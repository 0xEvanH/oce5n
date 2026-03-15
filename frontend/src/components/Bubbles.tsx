import type { BubbleDef } from '../types';

const BUBBLES: BubbleDef[] = [
  { size: 6,  left: '8%',  delay: '0s',  dur: '18s' },
  { size: 10, left: '22%', delay: '3s',  dur: '24s' },
  { size: 4,  left: '45%', delay: '6s',  dur: '20s' },
  { size: 8,  left: '67%', delay: '1s',  dur: '22s' },
  { size: 5,  left: '80%', delay: '9s',  dur: '16s' },
  { size: 12, left: '91%', delay: '4s',  dur: '28s' },
  { size: 3,  left: '33%', delay: '12s', dur: '19s' },
  { size: 7,  left: '58%', delay: '7s',  dur: '21s' },
];

const Bubbles = () => (
  <>
    {BUBBLES.map((b, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          width: b.size,
          height: b.size,
          left: b.left,
          bottom: '-20px',
          animationDuration: b.dur,
          animationDelay: b.delay,
        }}
      />
    ))}
  </>
);

export default Bubbles;
