import { useEffect, useState } from 'react';
import logo from '/oce5nwhite.svg';

interface IntroOverlayProps {
  onDone: () => void;
}

const IntroOverlay = ({ onDone }: IntroOverlayProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 1600);
    const t2 = setTimeout(() => onDone(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`intro-overlay${exiting ? ' intro-exit' : ''}`}>
      <div className="intro-content">
        <img
          src={logo}
          alt="Oce5n"
          className="intro-logo"
          style={{ width: 68, height: 68 }}
        />

        <div
          className="intro-wordmark"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '3.5rem',
            color: '#eef6ff',
            letterSpacing: '.14em',
          }}
        >
          OCE<span style={{ color: '#5bc8ff' }}>5</span>N
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
