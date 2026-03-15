interface SectionLabelProps {
  num?: string;
  label: string;
  align?: 'left' | 'right';
}

const SectionLabel = ({ num, label, align = 'left' }: SectionLabelProps) => (
  <div
    className={`flex items-center gap-4 mb-4 ${
      align === 'right' ? 'justify-end' : 'justify-start'
    }`}
  >
    {align === 'right' && (
      <div style={{ height: 1, width: 40, background: 'var(--accent)' }} />
    )}
    <span
      style={{
        fontFamily: "'Barlow', sans-serif",
        fontSize: '.72rem',
        fontWeight: 600,
        letterSpacing: '.32em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
      }}
    >
      {num && (
        <span style={{ color: 'rgba(91,200,255,.4)', marginRight: '.5rem' }}>
          {num}
        </span>
      )}
      {label}
    </span>
    {align !== 'right' && (
      <div style={{ height: 1, width: 40, background: 'var(--accent)' }} />
    )}
  </div>
);

export default SectionLabel;
