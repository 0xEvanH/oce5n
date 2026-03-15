import { useNavigate } from 'react-router-dom';
import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';
import background from '/video.webm';

const HomePage = () => {
  useReveal();
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0 }); };

  const divCards = [
    {
      game: 'Fortnite',
      tag: 'OCE5N',
      color: '#85d9ff',
      img: '',
      desc: 'Description',
      stat1: 'FNCS Finalists',
      stat2: '0 Players',
    },
    {
      game: 'Valorant',
      tag: 'OCE5N',
      color: 'var(--accent)',
      img: '',
      desc: 'Description',
      stat1: '0',
      stat2: '5 Players + Coach',
    },
  ];

  const stats = [
    { val: '0+', label: 'Major Titles'     },
    { val: '0+', label: 'Global Fans'      },
    { val: '0',  label: 'Members' },
    { val: '0',  label: 'Ranking'     },
  ];

  return (
    <div className="page-enter">

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <video
          src={background}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(.3) contrast(1.2)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(4,13,26,.3) 0%, rgba(4,13,26,.95) 100%)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 40%, rgba(26,107,191,.18) 0%, transparent 70%)' }}
        />

        {[15, 30, 50, 70, 85].map((l, i) => (
          <div
            key={i}
            className="depth-line absolute top-0 bottom-0 z-10 w-px"
            style={{
              left: `${l}%`,
              background: 'linear-gradient(180deg, transparent, rgba(91,200,255,.13), transparent)',
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        <div className="relative z-20 w-full" style={{ paddingLeft: '3rem' }}>
          <div style={{ maxWidth: 680 }}>

            <div className="rv flex items-center gap-4 mb-6">
              <div style={{ height: 1, width: 50, background: 'var(--accent)' }} />
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '.7rem',
                  fontWeight: 600,
                  letterSpacing: '.35em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                Professional Esports - Est. 2022
              </span>
            </div>

            <h1
              className="rv rv-d1 glow"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(4rem,9vw,8rem)',
                letterSpacing: '.04em',
                lineHeight: .95,
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}
            >
              Oce5n<br />
              <span style={{ color: 'var(--white)' }}>The 71 </span>
              <span style={{ color: 'var(--accent)' }}>Percent</span>
            </h1>

            <p
              className="rv rv-d2 leading-relaxed mb-10"
              style={{ fontSize: '1.1rem', color: 'var(--offwhite)', opacity: .8, maxWidth: 520 }}
            >
              Multi-Media Gaming Team Since 2022
            </p>

            <div className="rv rv-d3 flex gap-4 flex-wrap mb-20">
              <button className="btn-primary" onClick={() => go('/rosters')}>
                Discover Rosters
              </button>
              <button className="btn-ghost" onClick={() => go('/about')}>
                Our Story
              </button>
            </div>

            <div className="rv rv-d4 flex gap-4 flex-wrap">
              {stats.map((s, i) => (
                <div key={i} className="stat-card cut px-6 py-3">
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.6rem',
                      letterSpacing: '.06em',
                      color: 'var(--accent)',
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '.65rem',
                      fontWeight: 500,
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: 'var(--offwhite)',
                      opacity: .6,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: '.6rem',
              fontWeight: 500,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </section>

      <section className="py-32 px-12 max-w-300 mx-auto">
        <div className="rv mb-16">
          <SectionLabel num="01" label="Divisions" />
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem,5vw,4.5rem)',
              letterSpacing: '.04em',
              lineHeight: .95,
              marginTop: '.3rem',
            }}
          >
            Built for Every<br />
            <span style={{ color: 'var(--accent)' }}>Battlefield</span>
          </h2>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
          {divCards.map((item, i) => (
            <div
              key={i}
              className={`rv rv-d${i + 1} news-card cursor-pointer`}
              onClick={() => go('/rosters')}
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.game}
                  className="w-full h-full object-cover block"
                  style={{ filter: 'grayscale(.4) brightness(.6)' }}
                />
              </div>
              <div className="p-6">
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '.65rem',
                    fontWeight: 600,
                    letterSpacing: '.28em',
                    color: item.color,
                    marginBottom: '.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.8rem',
                    letterSpacing: '.05em',
                    marginBottom: '.6rem',
                  }}
                >
                  {item.game}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--offwhite)', opacity: .7 }}>
                  {item.desc}
                </p>
                <div
                  className="flex justify-between pt-4"
                  style={{ borderTop: '1px solid rgba(91,200,255,.1)' }}
                >
                  <div>
                    <div style={{ fontSize: '.6rem', color: 'var(--offwhite)', opacity: .5, textTransform: 'uppercase', letterSpacing: '.12em' }}>Rank</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--white)' }}>{item.stat1}</div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontSize: '.6rem', color: 'var(--offwhite)', opacity: .5, textTransform: 'uppercase', letterSpacing: '.12em' }}>Roster</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--white)' }}>{item.stat2}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-12 mb-32 relative overflow-hidden">
        <div
          className="rv relative flex items-center justify-between gap-8 flex-wrap p-16"
          style={{
            background: 'linear-gradient(135deg, rgba(10,34,64,.9) 0%, rgba(26,107,191,.22) 100%)',
            border: '1px solid rgba(91,200,255,.2)',
          }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at right center, rgba(91,200,255,.1), transparent 70%)' }}
          />
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2rem,3.5vw,3.2rem)',
                letterSpacing: '.04em',
                marginBottom: '.6rem',
              }}
            >
              Ready to Join <span style={{ color: 'var(--accent)' }}>OCE5N</span>?
            </h2>
            <p style={{ color: 'var(--offwhite)', opacity: .7, maxWidth: 480 }}>
              We are always scouting for new talent. Show us you can take on the wave.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: '.95rem', padding: '.9rem 2.5rem' }}
            onClick={() => go('/contact')}
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
