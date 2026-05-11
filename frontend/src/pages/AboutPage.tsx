import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';
import SEO from "../components/seo";

const AboutPage = () => {
  useReveal();

  const timeline = [
    { year: '2022', event: 'OCE5N Founded', desc: 'Born in Columbus, Ohio under the banner of #The71Percent, OCE5N enters the esports scene with a clear mission — go deeper than the competition.' },
    { year: '2022', event: 'Valorant Division Launched', desc: "OCE5N's first competitive roster fields in Valorant NA, establishing the org's presence in the tactical shooter space." },
    { year: '2023', event: 'Community Growth', desc: 'The brand expands its reach, building a loyal following across X, TikTok, and Twitch as content and competition merge.' },
    { year: '2024', event: 'Sponsors Come Aboard', desc: 'SocialSight, Hypertune, and Sonix join as official partners, fueling the next chapter of OCE5N\'s growth.' },
    { year: '2025', event: 'Fortnite Division Launched', desc: 'OCE5N enters competitive Fortnite OCE, signing eight high-PR players ready to take over the server.' },
    { year: '2026', event: 'Dusseldorf Bound', desc: 'Both divisions are locked in and competing at the highest level. The 71 percent has only just begun.' },
  ];

  const values = [
    { icon: '◈', title: 'Depth', desc: 'Like the ocean, we go deeper than the competition. Our preparation and dedication is unmatched.' },
    { icon: '◆', title: 'Adaptability', desc: 'Metas change. Tides shift. We evolve before anyone else even notices the current moving.' },
    { icon: '◉', title: 'Precision', desc: 'Every decision, every shot, every rotation, executed with laser-sharp intent and zero waste.' },
    { icon: '◈', title: 'Legacy', desc: 'We are not here for a season. We are building something that outlasts every trophy we win.' },
  ];

  const bigStats = [
    { n: '1K+',  l: 'Global Fans' },
    { n: '13th', l: 'Ranking' },
    { n: '2',    l: 'Divisions' },
    { n: '4',    l: 'Years Running' },
  ];

  return (
    <>
      <SEO
        title="About OCE5N Esports | Our Story & Mission"
        description="Learn about OCE5N — a multi-media esports organization built on community, competition, and creativity. Founded in Columbus, Ohio in 2022 under the banner of #The71Percent."
        keywords="about OCE5N, OCE5N story, esports organization, The71Percent, Columbus Ohio gaming, OCE5NS history"
        path="/about"
      />
      <div className="page-enter">

        <div className="pt-40 pb-24 px-12 max-w-300 mx-auto">
          <div className="rv">
            <SectionLabel num="01" label="Our Story" />
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3.5rem,7vw,6.5rem)',
                letterSpacing: '.04em',
                lineHeight: .92,
                marginTop: '.3rem',
              }}
            >
              STARTING A<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(91,200,255,.5)' }}>NEW</span>{' '}
              <span style={{ color: 'var(--accent)' }}>WAVE.</span>
            </h1>
          </div>
        </div>

        <section className="px-12 pb-32 max-w-300 mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="rv">
              <p className="leading-loose mb-6" style={{ fontSize: '1.05rem', color: 'var(--offwhite)', opacity: .85 }}>
                OCE5N is a multi-media esports organization representing{' '}
                <strong style={{ color: 'var(--white)' }}>#The71Percent</strong> — the 71% of the ocean still unexplored. We carry that same spirit into every game we play.
              </p>
              <p className="leading-loose mb-8" style={{ fontSize: '1.05rem', color: 'var(--offwhite)', opacity: .7 }}>
                Founded in Columbus, Ohio in 2022, we compete across Fortnite (OCE) and Valorant (NA) with rosters built on raw talent, relentless preparation, and a refusal to settle.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8" style={{ borderTop: '1px solid rgba(91,200,255,.12)' }}>
                {bigStats.map((s, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '2.4rem',
                        letterSpacing: '.06em',
                        color: 'var(--accent)',
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: '.7rem',
                        fontWeight: 500,
                        letterSpacing: '.16em',
                        textTransform: 'uppercase',
                        color: 'var(--offwhite)',
                        opacity: .55,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv rv-d2 relative">
              <div
                className="absolute inset-0 z-0"
                style={{ background: 'rgba(91,200,255,.08)', transform: 'translate(12px,12px)' }}
              />
              <img
                src="/oce5npfp.png"
                alt="OCE5N Team"
                className="w-full relative z-10"
                style={{ height: 420, objectFit: 'cover', filter: 'grayscale(.3) brightness(.85)', border: '1px solid rgba(91,200,255,.15)' }}
              />
            </div>
          </div>
        </section>

        <section
          className="py-24 px-12"
          style={{
            background: 'rgba(6,20,40,.5)',
            borderTop: '1px solid rgba(91,200,255,.08)',
            borderBottom: '1px solid rgba(91,200,255,.08)',
          }}
        >
          <div className="max-w-300 mx-auto">
            <div className="rv mb-14">
              <SectionLabel num="02" label="Core Values" />
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2.5rem,4vw,3.5rem)',
                  letterSpacing: '.04em',
                  marginTop: '.3rem',
                }}
              >
                What We Stand For
              </h2>
            </div>
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))' }}>
              {values.map((v, i) => (
                <div key={i} className={`rv rv-d${i + 1} stat-card p-8`}>
                  <div className="text-2xl mb-4" style={{ color: 'var(--accent)' }}>{v.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.4rem',
                      letterSpacing: '.06em',
                      marginBottom: '.5rem',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--offwhite)', opacity: .65 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-12 max-w-300 mx-auto">
          <div className="rv mb-16">
            <SectionLabel num="03" label="Timeline" />
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem,4vw,3.5rem)',
                letterSpacing: '.04em',
                marginTop: '.3rem',
              }}
            >
              The Journey
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(91,200,255,.22), transparent)' }}
            />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`rv rv-d${(i % 3) + 1} flex gap-12 mb-14 items-center`}
                style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                <div className="flex-1" style={{ textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '.7rem',
                      fontWeight: 600,
                      letterSpacing: '.28em',
                      color: 'var(--accent)',
                      marginBottom: '.4rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.4rem',
                      letterSpacing: '.05em',
                      marginBottom: '.2rem',
                    }}
                  >
                    {item.event}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--offwhite)', opacity: .6 }}>
                    {item.desc}
                  </p>
                </div>
                <div
                  className="w-3.5 h-3.5 rounded-full shrink-0"
                  style={{ background: 'var(--accent)', border: '3px solid var(--navy)', boxShadow: '0 0 20px rgba(91,200,255,.5)' }}
                />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
