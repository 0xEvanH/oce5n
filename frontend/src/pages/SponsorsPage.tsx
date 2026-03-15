import { useEffect, useRef, useState, useCallback, type MouseEvent } from 'react';
import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';

interface Sponsor {
  name: string;
  category: string;
  desc: string;
  logo: string;
  url: string;
  since: string;
}

const SPONSORS: Sponsor[] = [
  { name: 'Socialsight AI', category: 'Sponsor', desc: 'Description', logo: 'SS', url: '#', since: '2026' },
  { name: 'Hypertune',      category: 'Sponsor', desc: 'Description', logo: 'HT', url: '#', since: '2026' },
  { name: 'SonixApp',       category: 'Sponsor', desc: 'Description', logo: 'SA', url: '#', since: '2026' },
];

const CARD_WIDTH = 380;
const CARD_GAP   = 24;
const STEP       = CARD_WIDTH + CARD_GAP;
const AUTO_MS    = 4000;
const CLONES     = 2;

const SponsorsPage = () => {
  useReveal();

  const count   = SPONSORS.length;
  // Build track: [last N clones] [real items] [first N clones]
  const items   = [
    ...SPONSORS.slice(-CLONES),
    ...SPONSORS,
    ...SPONSORS.slice(0, CLONES),
  ];

  // Start visually at the first real item (index CLONES in the extended list)
  const [pos,       setPos]       = useState(CLONES);
  const [animated,  setAnimated]  = useState(true);
  const [dragging,  setDragging]  = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitioning = useRef(false);

  // The "real" active index (0-based into SPONSORS)
  const activeReal = ((pos - CLONES) % count + count) % count;

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimated(true);
      setPos((p) => p + 1);
    }, AUTO_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const advance = (dir: 1 | -1) => {
    if (transitioning.current) return;
    setAnimated(true);
    setPos((p) => p + dir);
    resetTimer();
  };

  // After transition ends, silently teleport from clone zone back to real zone
  const onTransitionEnd = () => {
    transitioning.current = false;
    setPos((p) => {
      if (p >= CLONES + count) {
        setAnimated(false);
        return p - count;
      }
      if (p < CLONES) {
        setAnimated(false);
        return p + count;
      }
      return p;
    });
  };

  // Re-enable animation on the frame after a silent jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    setAnimated(false);
    if (timerRef.current) clearInterval(timerRef.current);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragDelta(e.clientX - dragStart);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    setAnimated(true);
    if (dragDelta < -60)     { advance(1);  }
    else if (dragDelta > 60) { advance(-1); }
    else                     { resetTimer(); }
    setDragDelta(0);
  };

  const translateX = -pos * STEP + dragDelta;

  return (
    <div>
      <div className="pt-40 px-12 pb-16 max-w-300 mx-auto">
        <div className="rv">
          <SectionLabel num="06" label="Sponsors" />
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem,7vw,6rem)',
              letterSpacing: '.04em',
              lineHeight: .92,
              marginTop: '.3rem',
            }}
          >
            Those Who <span style={{ color: 'var(--accent)' }}>Back the Wave</span>
          </h1>
          <p
            className="mt-5"
            style={{
              fontSize: '1.05rem',
              color: 'var(--offwhite)',
              opacity: .65,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            OCE5N is built with the support of partners who believe in competitive excellence. Every sponsor plays a direct role in what we achieve.
          </p>
        </div>
      </div>

      <section className="px-12 pb-24 max-w-300 mx-auto">
        <div className="rv">

          {/* Track wrapper — clips overflow so clones are hidden */}
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: CARD_GAP,
                transform: `translateX(${translateX}px)`,
                transition: animated ? 'transform .5s cubic-bezier(.16,1,.3,1)' : 'none',
                willChange: 'transform',
                cursor: dragging ? 'grabbing' : 'grab',
                userSelect: 'none',
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onTransitionEnd={onTransitionEnd}
            >
              {items.map((sponsor, i) => {
                const realIdx  = ((i - CLONES) % count + count) % count;
                const isActive = realIdx === activeReal && !dragging
                  ? (i >= CLONES && i < CLONES + count)
                    ? true
                    : false
                  : false;

                return (
                  <a
                    key={`${sponsor.name}-${i}`}
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none', flexShrink: 0, width: CARD_WIDTH }}
                    onClick={(e) => { if (Math.abs(dragDelta) > 8) e.preventDefault(); }}
                    draggable={false}
                  >
                    <div
                      className="stat-card flex flex-col h-full"
                      style={{
                        padding: '2.5rem',
                        minHeight: 320,
                        cursor: 'pointer',
                        borderColor: isActive ? 'rgba(91,200,255,.38)' : 'rgba(91,200,255,.09)',
                        opacity: isActive ? 1 : 0.38,
                        transform: isActive ? 'scale(1)' : 'scale(.96)',
                        transition: 'opacity .4s, transform .4s, border-color .4s, box-shadow .3s',
                        boxShadow: isActive ? '0 0 40px rgba(91,200,255,.06)' : 'none',
                      }}
                      onMouseEnter={(e: MouseEvent<HTMLDivElement>) => {
                        if (!isActive) return;
                        e.currentTarget.style.borderColor = 'rgba(91,200,255,.6)';
                        e.currentTarget.style.boxShadow  = '0 20px 60px rgba(0,0,0,.4), 0 0 40px rgba(91,200,255,.12)';
                      }}
                      onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.borderColor = isActive ? 'rgba(91,200,255,.38)' : 'rgba(91,200,255,.09)';
                        e.currentTarget.style.boxShadow  = isActive ? '0 0 40px rgba(91,200,255,.06)' : 'none';
                      }}
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div
                          style={{
                            width: 72,
                            height: 72,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(91,200,255,.1)',
                            border: '1px solid rgba(91,200,255,.22)',
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '1.4rem',
                            letterSpacing: '.1em',
                            color: 'var(--accent)',
                            flexShrink: 0,
                          }}
                        >
                          {sponsor.logo}
                        </div>
                        <span
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: '.6rem',
                            fontWeight: 600,
                            letterSpacing: '.22em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            border: '1px solid rgba(91,200,255,.25)',
                            background: 'rgba(91,200,255,.08)',
                            padding: '.25rem .75rem',
                          }}
                        >
                          {sponsor.category}
                        </span>
                      </div>

                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: '.62rem',
                          fontWeight: 600,
                          letterSpacing: '.22em',
                          textTransform: 'uppercase',
                          color: 'var(--offwhite)',
                          opacity: .35,
                          marginBottom: '.4rem',
                        }}
                      >
                        Partner since {sponsor.since}
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '2.2rem',
                          letterSpacing: '.05em',
                          color: 'var(--white)',
                          marginBottom: '.75rem',
                          lineHeight: 1,
                        }}
                      >
                        {sponsor.name}
                      </h3>

                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: 'var(--offwhite)', opacity: .6 }}
                      >
                        {sponsor.desc}
                      </p>

                      <div
                        className="mt-6 pt-4 flex items-center justify-end"
                        style={{ borderTop: '1px solid rgba(91,200,255,.07)' }}
                      >
                        <span
                          style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '.9rem',
                            letterSpacing: '.1em',
                            color: 'var(--accent)',
                            opacity: .6,
                          }}
                        >
                          Visit ›
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() => advance(-1)}
              className="btn-ghost"
              style={{ padding: '.6rem 1.2rem', fontSize: '1rem' }}
              aria-label="Previous sponsor"
            >
              ‹
            </button>

            <div className="flex gap-3 items-center">
              {SPONSORS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const target = i + CLONES;
                    setAnimated(true);
                    setPos(target);
                    resetTimer();
                  }}
                  aria-label={`Go to sponsor ${i + 1}`}
                  style={{
                    width: i === activeReal ? 28 : 8,
                    height: 4,
                    background: i === activeReal ? 'var(--accent)' : 'rgba(91,200,255,.25)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width .4s cubic-bezier(.16,1,.3,1), background .3s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => advance(1)}
              className="btn-ghost"
              style={{ padding: '.6rem 1.2rem', fontSize: '1rem' }}
              aria-label="Next sponsor"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section
        className="px-12 pb-32 max-w-300 mx-auto"
        style={{ borderTop: '1px solid rgba(91,200,255,.07)', paddingTop: '5rem' }}
      >
        <div
          className="rv relative overflow-hidden flex flex-col items-start gap-8 p-14"
          style={{
            background: 'linear-gradient(135deg, rgba(10,34,64,.9) 0%, rgba(26,107,191,.18) 100%)',
            border: '1px solid rgba(91,200,255,.18)',
          }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: '40%',
              background: 'radial-gradient(ellipse at right center, rgba(91,200,255,.08), transparent 70%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2rem,3.5vw,3rem)',
                letterSpacing: '.04em',
                marginBottom: '.6rem',
              }}
            >
              Become a <span style={{ color: 'var(--accent)' }}>Sponsor</span>
            </h2>
            <p style={{ color: 'var(--offwhite)', opacity: .65, maxWidth: 440, lineHeight: 1.7 }}>
              Reach a highly engaged esports audience. We offer tailored partnership packages across content, tournament and social channels.
            </p>
          </div>
          <a
            href="mailto:sponsors@oce5n.gg?subject=Sponsorship Enquiry"
            style={{ textDecoration: 'none', flexShrink: 0, position: 'relative', zIndex: 1 }}
          >
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;