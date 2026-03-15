import type { MouseEvent } from 'react';
import { SiX } from 'react-icons/si';
import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';

const SOCIALS = [
  {
    label: 'Twitter / X',
    handle: '@OCE5N',
    url: 'https://x.com/oce5n',
    icon: SiX,
    color: '#e7e9ea',
    desc: 'Announcements and real-time coverage.',
  },
];

const ContactPage = () => {
  useReveal();

  return (
    <div>
      <div className="pt-40 px-12 pb-16 max-w-300 mx-auto">
        <div className="rv">
          <SectionLabel num="05" label="Contact" />
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem,7vw,6rem)',
              letterSpacing: '.04em',
              lineHeight: .92,
              marginTop: '.3rem',
            }}
          >
            Find Us in the <span style={{ color: 'var(--accent)' }}>Current</span>
          </h1>
          <p
            className="mt-5"
            style={{
              fontSize: '1.05rem',
              color: 'var(--offwhite)',
              opacity: .65,
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            We are across every platform. Follow along, reach out, or send us a message directly.
          </p>
        </div>
      </div>

      <section className="px-12 pb-24 max-w-300 mx-auto">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
        >
          {SOCIALS.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={`rv rv-d${(i % 3) + 1}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="stat-card p-7 flex gap-5 items-start h-full transition-all duration-300 group"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e: MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = `${s.color}55`;
                    e.currentTarget.style.background = `rgba(6,20,40,.85)`;
                  }}
                  onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(91,200,255,.12)';
                    e.currentTarget.style.background = 'rgba(6,20,40,.6)';
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      background: `${s.color}14`,
                      border: `1px solid ${s.color}30`,
                      color: s.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: '.62rem',
                        fontWeight: 600,
                        letterSpacing: '.24em',
                        textTransform: 'uppercase',
                        color: 'var(--offwhite)',
                        opacity: .45,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '1.3rem',
                        letterSpacing: '.06em',
                        color: s.color,
                        lineHeight: 1,
                      }}
                    >
                      {s.handle}
                    </div>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: 'var(--offwhite)', opacity: .55 }}
                    >
                      {s.desc}
                    </p>
                  </div>

                  <div
                    className="shrink-0 self-center"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '.85rem',
                      letterSpacing: '.1em',
                      color: s.color,
                      opacity: .5,
                      transition: 'opacity .2s, transform .2s',
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.opacity = '.5';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    ›
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section
        className="mx-12 mb-32"
        style={{
          borderTop: '1px solid rgba(91,200,255,.08)',
          paddingTop: '4rem',
          maxWidth: '75rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="rv flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2rem,4vw,3rem)',
                letterSpacing: '.04em',
                marginBottom: '.5rem',
              }}
            >
              Prefer Email?
            </h2>
            <p style={{ color: 'var(--offwhite)', opacity: .6, maxWidth: 460, lineHeight: 1.7 }}>
              For sponsorships, media enquiries, tryouts and anything else — drop us a line directly.
            </p>
          </div>
          <a
            href="mailto:contact@oce5n.gg?subject=Enquiry"
            style={{ textDecoration: 'none', flexShrink: 0 }}
          >
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Send an Email
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;