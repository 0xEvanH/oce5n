import { useState } from 'react';
import { SiValorant, SiEpicgames } from 'react-icons/si';
import useReveal from '../useReveal';
import SectionLabel from '../components/SectionLabel';
import type { DivisionId, Divisions } from '../types';

const RostersPage = () => {
  useReveal();
  const [activeDiv, setActiveDiv] = useState<DivisionId>('fortnite');

  const divisions: Divisions = {
    fortnite: {
      color: '#85d9ff',
      label: 'Fortnite',
      tag: 'OCE5N',
      players: [
        { name: 'Liamtfup', role: 'OCE5N', country: 'NA', img: '' },
        { name: 'Teak',     role: 'OCE5N', country: 'NA', img: '' },
        { name: 'Phazma',   role: 'OCE5N', country: 'AU', img: '' },
        { name: 'Creep',    role: 'OCE5N', country: 'CA', img: '' },
      ],
    },
    valorant: {
      color: 'var(--accent)',
      label: 'Valorant',
      tag: 'OCE5N',
      players: [
        { name: 'NAME', role: 'IGL / Duelist', country: 'NA', img: '' },
        { name: '',     role: 'Sentinel',      country: 'NA', img: '' },
        { name: '',     role: 'Controller',    country: 'NA', img: '' },
        { name: '',     role: 'Initiator',     country: 'NA', img: '' },
        { name: '',     role: 'Flex',          country: 'NA', img: '' },
      ],
    },
  };

  const div = divisions[activeDiv];

  const fStats = [
    { k: 'Current Rank',  v: '0'         },
    { k: 'Region',        v: 'NAC'       },
    { k: 'Roster Size',   v: '4 Players' },
    { k: 'Cash Cups Won', v: '0'         },
  ];
  const vStats = [
    { k: 'Current Rank', v: '0'         },
    { k: 'Region',       v: 'NA'        },
    { k: 'Roster Size',  v: '5 + Coach' },
    { k: 'Win Rate',     v: '0'         },
  ];
  const teamStats = activeDiv === 'fortnite' ? fStats : vStats;

  return (
    <div className="page-enter">

      <div className="pt-40 px-12 pb-16 max-w-300 mx-auto">
        <div className="rv">
          <SectionLabel num="02" label="Our Divisions" />
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem,7vw,6rem)',
              letterSpacing: '.04em',
              lineHeight: .92,
              marginTop: '.3rem',
            }}
          >
            Meet the <span style={{ color: 'var(--accent)' }}>Gladiators</span>
          </h1>
        </div>

        <div className="rv flex gap-4 mt-12 mb-16">
          {(Object.keys(divisions) as DivisionId[]).map((d) => (
            <button
              key={d}
              onClick={() => setActiveDiv(d)}
              className="transition-all duration-300 flex items-center gap-2.5"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1rem',
                letterSpacing: '.18em',
                padding: '.65rem 2rem',
                border: '1px solid',
                cursor: 'pointer',
                borderColor: activeDiv === d ? 'var(--accent)' : 'rgba(91,200,255,.2)',
                background:  activeDiv === d ? 'rgba(91,200,255,.1)' : 'transparent',
                color:       activeDiv === d ? 'var(--accent)' : 'var(--offwhite)',
              }}
            >
              {d === 'valorant' ? <SiValorant size={14} /> : <SiEpicgames size={14} />}
              {divisions[d].label}
            </button>
          ))}
        </div>
      </div>

      <section className="px-12 pb-32 max-w-300 mx-auto">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))' }}>
          {div.players.map((p, i) => (
            <div key={i} className={`rv rv-d${(i % 3) + 1} player-card cut`}>
              {p.img ? <img src={p.img} alt={p.name} /> : <div style={{ width: '100%', height: 220, background: 'rgba(6,20,40,.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(91,200,255,.15)', fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '.1em' }}>{p.name || '?'}</div>}
              <div className="player-card-info">
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '.62rem',
                    fontWeight: 600,
                    letterSpacing: '.2em',
                    color: div.color,
                    marginBottom: '.2rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.country} — {p.role}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.4rem',
                    letterSpacing: '.08em',
                  }}
                >
                  {p.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rv mt-16 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))' }}>
          {teamStats.map((s, i) => (
            <div key={i} className="stat-card px-6 py-5">
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '.62rem',
                  fontWeight: 500,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--offwhite)',
                  opacity: .5,
                  marginBottom: '.25rem',
                }}
              >
                {s.k}
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.2rem',
                  letterSpacing: '.06em',
                  color: 'var(--white)',
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RostersPage;