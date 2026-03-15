import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="page-enter min-h-screen flex flex-col items-center justify-center text-center px-8"
      style={{ paddingTop: '80px' }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(8rem,20vw,16rem)',
          letterSpacing: '.04em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(91,200,255,.25)',
          userSelect: 'none',
          marginBottom: '-1rem',
        }}
      >
        404
      </div>

      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(1.8rem,4vw,2.8rem)',
          letterSpacing: '.06em',
          color: 'var(--white)',
          marginBottom: '1rem',
        }}
      >
        You've drifted off course
      </div>

      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: '1rem',
          color: 'var(--offwhite)',
          opacity: .6,
          maxWidth: 380,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}
      >
        This page doesn't exist. Head back and find what you're looking for.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          className="btn-primary"
          onClick={() => { navigate('/'); window.scrollTo({ top: 0 }); }}
        >
          Back to Home
        </button>
        <button
          className="btn-ghost"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(26,107,191,.12) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default NotFoundPage;
