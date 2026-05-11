import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed z-[70] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      style={{
        bottom: '1.5rem',
        left: '1.5rem',
        right: '1.5rem',
        maxWidth: 720,
        margin: '0 auto',
        background: 'rgba(4,13,26,.97)',
        border: '1px solid rgba(91,200,255,.18)',
        backdropFilter: 'blur(20px)',
        padding: '1.25rem 1.5rem',
        animation: 'slideUp .4s cubic-bezier(.16,1,.3,1)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '.82rem',
            color: 'var(--offwhite)',
            opacity: .8,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          We use cookies to improve your experience.{' '}
          <button
            onClick={() => { navigate('/cookie-policy'); setVisible(false); }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--accent)',
              fontFamily: "'Barlow', sans-serif",
              fontSize: '.82rem',
              padding: 0,
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            Cookie Policy
          </button>
        </p>
      </div>

      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: '.72rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            padding: '.55rem 1.25rem',
            background: 'transparent',
            border: '1px solid rgba(91,200,255,.2)',
            color: 'var(--offwhite)',
            cursor: 'pointer',
            transition: 'border-color .2s, color .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(91,200,255,.5)';
            e.currentTarget.style.color = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(91,200,255,.2)';
            e.currentTarget.style.color = 'var(--offwhite)';
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="btn-primary"
          style={{ fontSize: '.72rem', padding: '.55rem 1.5rem' }}
        >
          Accept
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
