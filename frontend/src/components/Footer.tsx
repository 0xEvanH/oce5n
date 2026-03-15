import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoMark from './LogoMark';

const Footer = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0 }); };

  const navCols: { heading: string; links: [string, string][] }[] = [
    {
      heading: 'Navigate',
      links: [
        ['/',        'Home'   ],
        ['/about',   'Story'  ],
        ['/rosters', 'Rosters'],
        ['/news',    'News'   ],
        ['/contact', 'Contact'],
      ],
    },
    {
      heading: 'Teams',
      links: [
        ['/rosters', 'Valorant'],
        ['/rosters', 'Fortnite'],
        ['/rosters', 'Creators'],
      ],
    },
  ];

  return (
    <footer
      className="px-12 pt-16 pb-10"
      style={{ background: 'var(--deep)', borderTop: '1px solid rgba(91,200,255,.08)' }}
    >
      <div className="max-w-300 mx-auto">
        <div
          className="flex justify-between items-start gap-12 flex-wrap mb-12 pb-12"
          style={{ borderBottom: '1px solid rgba(91,200,255,.08)' }}
        >
          <div>
            <LogoMark onClick={() => go('/')} />
            <p
              className="text-sm leading-relaxed mt-4 max-w-70"
              style={{ color: 'var(--offwhite)', opacity: .5 }}
            >
              Professional esports. Rooted in competition, driven by legacy.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            {navCols.map((col, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: '.68rem',
                    letterSpacing: '.28em',
                    textTransform: 'uppercase',
                    color: 'var(--offwhite)',
                    opacity: .4,
                    marginBottom: '1rem',
                  }}
                >
                  {col.heading}
                </div>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  {col.links.map(([path, label], j) => (
                    <li key={j}>
                      <button
                        onClick={() => go(path)}
                        className="bg-transparent border-0 cursor-pointer text-sm p-0 transition-all duration-200"
                        style={{ color: 'var(--offwhite)', opacity: .7, fontFamily: "'Barlow', sans-serif" }}
                        onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
                          e.currentTarget.style.color = 'var(--accent)';
                          e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
                          e.currentTarget.style.color = 'var(--offwhite)';
                          e.currentTarget.style.opacity = '.7';
                        }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <p
            style={{
              fontSize: '.68rem',
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--offwhite)',
              opacity: .3,
            }}
          >
            {new Date().getFullYear()} OCE5N Esports. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l, i) => (
              <span
                key={i}
                className="cursor-pointer"
                style={{ fontSize: '.68rem', letterSpacing: '.1em', color: 'var(--offwhite)', opacity: .3 }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
