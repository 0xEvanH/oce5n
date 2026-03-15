import { useEffect, useRef, useState, useCallback } from 'react';

export interface FeedPost {
  id: string;
  text: string;
  url: string;
  image?: string;
  publishedAt: string;
}

export type FeedStatus = 'loading' | 'ok' | 'error';

const CACHE_MS = 5 * 60 * 1000;

const parseRSS = (xml: string): FeedPost[] => {
  const parser = new DOMParser();
  const doc    = parser.parseFromString(xml, 'application/xml');

  const parseErr = doc.querySelector('parsererror');
  if (parseErr) throw new Error(`XML parse error: ${parseErr.textContent?.slice(0, 120)}`);

  const items = Array.from(doc.querySelectorAll('item')).slice(0, 12);

  return items.map((item): FeedPost => {
    const title   = item.querySelector('title')?.textContent?.trim()   ?? '';
    const link    = item.querySelector('link')?.textContent?.trim()    ?? '';
    const pubDate = item.querySelector('pubDate')?.textContent?.trim() ?? '';
    const desc    = item.querySelector('description')?.textContent     ?? '';
    const encUrl  = item.querySelector('enclosure')?.getAttribute('url') ?? '';

    const stripped = desc.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
    const text = stripped.length > 20 ? stripped : title;

    const imgFromDesc = desc.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
    const image = encUrl || imgFromDesc || undefined;

    const idMatch = link.match(/\/status\/(\d+)/);
    const id = idMatch?.[1] ?? `${link}-${pubDate}`;

    return { id, text, url: link, image, publishedAt: pubDate };
  });
};

let cachedPosts: FeedPost[]  = [];
let cachedAt:    number      = 0;

export const timeAgo = (dateStr: string): string => {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (m < 1)  return 'just now';
  if (m < 60) return `${m}m ago`;
  if (h < 24) return `${h}h ago`;
  return `${d}d ago`;
};

export const useFeed = () => {
  const [posts,     setPosts]     = useState<FeedPost[]>(cachedPosts);
  const [status,    setStatus]    = useState<FeedStatus>(cachedPosts.length > 0 ? 'ok' : 'loading');
  const [fetchedAt, setFetchedAt] = useState<number | null>(cachedAt || null);
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(async (force = false) => {
    if (!force && cachedPosts.length > 0 && Date.now() - cachedAt < CACHE_MS) {
      setPosts(cachedPosts);
      setFetchedAt(cachedAt);
      setStatus('ok');
      return;
    }

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setStatus('loading');

    try {
      const res = await fetch('/api/feed', { signal: ctrl.signal });

      const contentType = res.headers.get('Content-Type') ?? '';
      const text = await res.text();

      if (!res.ok || contentType.includes('application/json')) {
        let msg = `Server error ${res.status}`;
        try { msg = (JSON.parse(text) as { error?: string }).error ?? msg; } catch { /* noop */ }
        throw new Error(msg);
      }

      if (text.trimStart().startsWith('<!')) {
        throw new Error('Got HTML instead of XML — check Vite proxy config or server is not running');
      }

      const parsed = parseRSS(text);
      cachedPosts = parsed;
      cachedAt    = Date.now();

      setPosts(parsed);
      setFetchedAt(cachedAt);
      setStatus('ok');
    } catch (err: unknown) {
      if ((err as { name?: string }).name === 'AbortError') return;
      console.error('[useFeed]', (err as Error).message);
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(() => load(), CACHE_MS);
    return () => {
      clearInterval(interval);
      abortRef.current?.abort();
    };
  }, [load]);

  const refresh = useCallback(() => load(true), [load]);

  return { posts, status, fetchedAt, refresh };
};