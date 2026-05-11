import useReveal from '../useReveal';
import SEO from '../components/seo';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rv mb-10">
    <h2
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.6rem',
        letterSpacing: '.06em',
        color: 'var(--accent)',
        marginBottom: '.75rem',
      }}
    >
      {title}
    </h2>
    <div style={{ color: 'var(--offwhite)', opacity: .75, lineHeight: 1.8, fontSize: '.95rem' }}>
      {children}
    </div>
  </div>
);

const CookiePolicyPage = () => {
  useReveal();

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      desc: 'Required for the Site to function. These cannot be disabled. They include cookies that remember your cookie consent preference.',
      examples: 'cookie-consent',
      canDisable: false,
    },
    {
      name: 'Analytics Cookies',
      desc: 'Help us understand how visitors interact with the Site so we can improve it. Data is aggregated and anonymous.',
      examples: 'Analytics tracking',
      canDisable: true,
    },
    {
      name: 'Preference Cookies',
      desc: 'Remember settings and choices you make to personalise your experience on the Site.',
      examples: 'Theme and display preferences',
      canDisable: true,
    },
  ];

  return (
    <>
      <SEO
        title="Cookie Policy | OCE5N Esports"
        description="OCE5N Esports cookie policy — how we use cookies and how you can manage them."
        path="/cookie-policy"
        noIndex={false}
      />
      <div className="page-enter pt-40 px-12 pb-32 max-w-200 mx-auto">
        <div className="rv mb-12">
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '.7rem', fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '.5rem' }}>
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem,6vw,5rem)',
              letterSpacing: '.04em',
              lineHeight: .92,
            }}
          >
            Cookie <span style={{ color: 'var(--accent)' }}>Policy</span>
          </h1>
          <p style={{ color: 'var(--offwhite)', opacity: .45, fontSize: '.8rem', marginTop: '1rem', fontFamily: "'Barlow', sans-serif", letterSpacing: '.1em' }}>
            Last updated: May 2026
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(91,200,255,.1)', paddingTop: '3rem' }}>
          <Section title="1. What Are Cookies">
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve efficiency, and provide information to site owners. Cookies do not contain personally identifiable information.</p>
          </Section>

          <Section title="2. How We Use Cookies">
            <p>OCE5N Esports uses cookies to ensure the Site functions correctly, remember your preferences, and understand how you interact with our content. We only set cookies that are necessary for the Site to operate or that you have consented to.</p>
          </Section>

          <Section title="3. Types of Cookies We Use">
            <div className="flex flex-col gap-6 mt-2">
              {cookieTypes.map((ct, i) => (
                <div
                  key={i}
                  className="stat-card p-6"
                  style={{ borderColor: ct.canDisable ? 'rgba(91,200,255,.12)' : 'rgba(91,200,255,.22)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '1.1rem',
                        letterSpacing: '.06em',
                        color: 'var(--white)',
                      }}
                    >
                      {ct.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: '.58rem',
                        fontWeight: 600,
                        letterSpacing: '.18em',
                        textTransform: 'uppercase',
                        color: ct.canDisable ? 'var(--offwhite)' : 'var(--accent)',
                        border: '1px solid',
                        borderColor: ct.canDisable ? 'rgba(255,255,255,.15)' : 'rgba(91,200,255,.3)',
                        padding: '.2rem .6rem',
                      }}
                    >
                      {ct.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p style={{ fontSize: '.9rem' }}>{ct.desc}</p>
                  <p className="mt-2" style={{ fontSize: '.8rem', opacity: .5 }}>Examples: {ct.examples}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Third-Party Cookies">
            <p>Our sponsors and service providers (SocialSight, Hypertune, Sonix) may set their own cookies when their services are embedded or linked from our Site. These cookies are governed by each provider's privacy and cookie policies. We recommend reviewing their policies directly.</p>
          </Section>

          <Section title="5. Managing Cookies">
            <p>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="mt-3 flex flex-col gap-2 list-none p-0">
              {[
                'View what cookies are stored and delete them individually.',
                'Block third-party cookies.',
                'Block all cookies from specific sites.',
                'Block all cookies from being set.',
                'Delete all cookies when you close your browser.',
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(91,200,255,.2)' }}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">Note that disabling cookies may affect the functionality of this Site and others you visit.</p>
          </Section>

          <Section title="6. Your Consent">
            <p>When you first visit OCE5N Esports, you are shown a cookie consent banner. Clicking "Accept" gives us permission to use optional cookies. Clicking "Decline" means we will only use essential cookies. You can change your preference at any time by clearing your browser's cookies and revisiting the Site.</p>
          </Section>

          <Section title="7. Contact">
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:contact@oce5n.gg" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@oce5n.gg</a>.</p>
          </Section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;
