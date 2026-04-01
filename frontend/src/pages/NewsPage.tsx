import { useRef, type MouseEvent } from 'react';
import { SiX } from 'react-icons/si';
import { useFeed, timeAgo, type FeedPost } from '../hooks/UseFeed';
import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';
import SEO from "../components/seo";

const HANDLE = 'OCE5NS';
const PROFILE = `https://x.com/${HANDLE}`;

const Skeleton = () => (
  <div className="stat-card" style={{ minHeight: 200 }}>
    <div style={{ aspectRatio: '16/9', background: 'rgba(91,200,255,.04)' }} />
    <div style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(91,200,255,.07)' }} />
        <div style={{ width: 90, height: 8, background: 'rgba(91,200,255,.07)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
        <div style={{ height: 8, background: 'rgba(91,200,255,.06)' }} />
        <div style={{ height: 8, background: 'rgba(91,200,255,.06)', width: '80%' }} />
        <div style={{ height: 8, background: 'rgba(91,200,255,.05)', width: '55%' }} />
      </div>
      <div style={{ height: 1, background: 'rgba(91,200,255,.05)', marginBottom: 12 }} />
      <div style={{ width: 60, height: 8, background: 'rgba(91,200,255,.06)' }} />
    </div>
  </div>
);

const PostCard = ({ post, i }: { post: FeedPost; i: number }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`rv rv-d${(i % 3) + 1}`}
    style={{ textDecoration: 'none', display: 'block' }}
  >
    <div
      className="news-card flex flex-col h-full"
      style={{ cursor: 'pointer' }}
    >
      {post.image && (
        <div style={{ overflow: 'hidden', aspectRatio: '16/9', flexShrink: 0 }}>
          <img
            src={post.image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(.75) saturate(1.05)', transition: 'filter .4s, transform .4s' }}
            onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
              e.currentTarget.style.filter = 'brightness(.9) saturate(1.2)';
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
              e.currentTarget.style.filter = 'brightness(.75) saturate(1.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(231,233,234,.08)', border: '1px solid rgba(231,233,234,.15)', color: '#e7e9ea', flexShrink: 0 }}>
              <SiX size={12} />
            </span>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '.92rem', letterSpacing: '.06em', color: 'var(--white)' }}>
                @{HANDLE}
              </div>
              <div style={{ fontSize: '.6rem', color: 'var(--offwhite)', opacity: .4, fontFamily: "'Barlow', sans-serif" }}>
                {timeAgo(post.publishedAt)}
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'var(--offwhite)', opacity: .85, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          {post.text}
        </p>

        <div className="flex items-center justify-end pt-3" style={{ borderTop: '1px solid rgba(91,200,255,.07)' }}>
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '.85rem', letterSpacing: '.1em', color: '#e7e9ea', opacity: .45, transition: 'opacity .2s' }}
            onMouseEnter={(e: MouseEvent<HTMLSpanElement>) => { e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e: MouseEvent<HTMLSpanElement>) => { e.currentTarget.style.opacity = '.45'; }}
          >
            View on X ›
          </span>
        </div>
      </div>
    </div>
  </a>
);

const NewsPage = () => {
  useReveal();
  const { posts, status, fetchedAt, refresh } = useFeed();
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO
        title="News & Updates | OCE5N Esports"
        description="Stay up to date with the latest OCE5N news — tournament results, team announcements, FNCS updates, and community highlights."
        keywords="OCE5N news, esports updates, FNCS results, Fortnite OCE5N, tournament news, gaming announcements"
        path="/news"
      />
      <div>
        <div className="pt-40 px-12 pb-20 max-w-300 mx-auto">
          <div className="rv">
            <SectionLabel num="03" label="Latest News" />
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3.5rem,7vw,6rem)',
                letterSpacing: '.04em',
                lineHeight: .92,
                marginTop: '.3rem',
              }}
            >
              Stay in the <span style={{ color: 'var(--accent)' }}>Current</span>
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-4">
                <a href={PROFILE} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <div
                    className="flex items-center gap-3 px-5 py-3 transition-all duration-300"
                    style={{ border: '1px solid rgba(91,200,255,.18)', background: 'rgba(6,20,40,.5)', cursor: 'pointer' }}
                    onMouseEnter={(e: MouseEvent<HTMLDivElement>) => { e.currentTarget.style.borderColor = 'rgba(91,200,255,.45)'; }}
                    onMouseLeave={(e: MouseEvent<HTMLDivElement>) => { e.currentTarget.style.borderColor = 'rgba(91,200,255,.18)'; }}
                  >
                    <SiX size={13} style={{ color: '#e7e9ea' }} />
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '.1em', color: '#e7e9ea' }}>
                      @{HANDLE}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2.5">
                  {status === 'ok' && (
                    <>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'block', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '.68rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--offwhite)', opacity: .4 }}>
                        Live
                      </span>
                    </>
                  )}
                  {status === 'loading' && (
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '.68rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--offwhite)', opacity: .35 }}>
                      Loading...
                    </span>
                  )}
                  {status === 'error' && (
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '.68rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#ef4444' }}>
                      Unavailable
                    </span>
                  )}
                  {fetchedAt && status === 'ok' && (
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '.65rem', color: 'var(--offwhite)', opacity: .25 }}>
                      · updated {new Date(fetchedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={refresh}
                className="btn-ghost"
                style={{ fontSize: '.78rem', padding: '.45rem 1.1rem' }}
              >
                ↻ Refresh
              </button>
            </div>
          </div>
        </div>

        <section ref={gridRef} className="px-12 pb-32 max-w-300 mx-auto">

          {status === 'error' && posts.length === 0 && (
            <div
              className="rv flex flex-col items-start gap-6 p-10"
              style={{ border: '1px solid rgba(91,200,255,.12)', background: 'rgba(6,20,40,.6)', maxWidth: 560 }}
            >
              <SiX size={28} style={{ color: '#e7e9ea', opacity: .4 }} />
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '.05em', marginBottom: '.5rem' }}>
                  Feed unavailable
                </h3>
                <p style={{ fontSize: '.9rem', color: 'var(--offwhite)', opacity: .55, lineHeight: 1.7 }}>
                  Check that the proxy server is running and <code style={{ fontFamily: 'monospace', color: 'var(--accent)', opacity: .8 }}>RSS_URL</code> is set in your <code style={{ fontFamily: 'monospace', color: 'var(--accent)', opacity: .8 }}>server/.env</code>.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="btn-primary" style={{ fontSize: '.9rem' }} onClick={refresh}>
                  Try Again
                </button>
                <a href={PROFILE} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ fontSize: '.9rem' }}>
                    Follow @{HANDLE}
                  </button>
                </a>
              </div>
            </div>
          )}

          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))' }}>
            {status === 'loading' && posts.length === 0
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
              : posts.map((post, i) => <PostCard key={post.id} post={post} i={i} />)
            }
          </div>

          {status === 'ok' && posts.length > 0 && (
            <div className="rv mt-16 flex items-center justify-center">
              <a href={PROFILE} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-ghost" style={{ fontSize: '.9rem' }}>
                  See all posts on X
                </button>
              </a>
            </div>
          )}

        </section>
      </div>
    </>
  );
};

export default NewsPage;