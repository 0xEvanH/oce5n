import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoMark from './LogoMark';

const LINKS = [
  { path: '/',        label: 'Home'    },
  { path: '/about',   label: 'About'   },
  { path: '/rosters', label: 'Rosters' },
  { path: '/news',    label: 'News'    },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/contact', label: 'Contact' },
];

const Nav = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
        style={{
          padding:        scrolled ? '1rem 3rem' : '1.5rem 3rem',
          background:     scrolled || open ? 'rgba(4,13,26,.96)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(20px)'        : 'none',
          borderBottom:   scrolled || open ? '1px solid rgba(91,200,255,.08)' : 'none',
        }}
      >
        <LogoMark onClick={() => go('/')} />

        <div className="hidden md:flex gap-10">
          {LINKS.map(({ path, label }) => (
            <button
              key={path}
              className={`nav-link${location.pathname === path ? ' active' : ''}`}
              onClick={() => go(path)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            className="btn-primary"
            style={{ padding: '.55rem 1.4rem', fontSize: '.85rem' }}
            onClick={() => go('/contact')}
          >
            Join Us
          </button>
        </div>

        <button
          className="flex md:hidden flex-col justify-center gap-1.5 bg-transparent border-0 cursor-pointer p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ zIndex: 60 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 1.5,
                background: 'var(--accent)',
                transformOrigin: 'center',
                transition: 'transform .3s cubic-bezier(.16,1,.3,1), opacity .3s',
                transform: open
                  ? i === 0 ? 'translateY(5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-5px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center gap-3"
        style={{
          background: 'rgba(4,13,26,.97)',
          backdropFilter: 'blur(24px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
        }}
      >
        {LINKS.map(({ path, label }, i) => (
          <button
            key={path}
            onClick={() => go(path)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem,8vw,3.5rem)',
              letterSpacing: '.08em',
              color: location.pathname === path ? 'var(--accent)' : 'var(--white)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: `color .2s, transform .35s cubic-bezier(.16,1,.3,1) ${i * 0.06}s, opacity .35s ease ${i * 0.06}s`,
              transform: open ? 'translateX(0)' : 'translateX(40px)',
              opacity: open ? 1 : 0,
            }}
          >
            {label}
          </button>
        ))}

        <div style={{ marginTop: '2rem', transitionDelay: open ? `${LINKS.length * 0.06}s` : '0s' }}>
          <button
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '.8rem 2.5rem' }}
            onClick={() => go('/contact')}
          >
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
