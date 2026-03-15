import logo from '/oce5nwhite.svg';

interface LogoMarkProps {
  onClick?: () => void;
}

const LogoMark = ({ onClick }: LogoMarkProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2.5 bg-transparent border-0 cursor-pointer"
  >
    <img src={logo} alt="Oce5n" className="w-8 h-8" />
    <span
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.55rem',
        color: '#eef6ff',
        letterSpacing: '.08em',
      }}
    >
      OCE<span style={{ color: '#5bc8ff' }}>5</span>N
    </span>
  </button>
);

export default LogoMark;
