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

const PrivacyPolicyPage = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Privacy Policy | OCE5N Esports"
        description="OCE5N Esports privacy policy — how we collect, use, and protect your data."
        path="/privacy-policy"
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
            Privacy <span style={{ color: 'var(--accent)' }}>Policy</span>
          </h1>
          <p style={{ color: 'var(--offwhite)', opacity: .45, fontSize: '.8rem', marginTop: '1rem', fontFamily: "'Barlow', sans-serif", letterSpacing: '.1em' }}>
            Last updated: May 2026
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(91,200,255,.1)', paddingTop: '3rem' }}>
          <Section title="1. Who We Are">
            <p>OCE5N Esports ("OCE5N", "we", "us", or "our") is a multi-media esports organisation based in Columbus, Ohio, USA. This Privacy Policy explains how we collect, use, and protect information when you visit <strong style={{ color: 'var(--white)' }}>oce5n.com</strong>.</p>
            <p className="mt-3">For privacy-related enquiries, contact us at: <a href="mailto:contact@oce5n.gg" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@oce5n.gg</a></p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="mt-3 flex flex-col gap-2 list-none p-0">
              {[
                'Contact information you voluntarily provide (name, email address) when reaching out via our contact page.',
                'Usage data collected automatically — including IP address, browser type, pages visited, and time spent on the site.',
                'Cookie data as described in our Cookie Policy.',
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(91,200,255,.2)' }}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">We do not collect payment information. We do not knowingly collect data from children under 13.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use information collected to:</p>
            <ul className="mt-3 flex flex-col gap-2 list-none p-0">
              {[
                'Respond to enquiries, sponsorship requests, and tryout applications.',
                'Analyse site traffic and improve user experience.',
                'Comply with legal obligations.',
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(91,200,255,.2)' }}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>Our website is powered by the following third-party services which may collect data under their own privacy policies:</p>
            <ul className="mt-3 flex flex-col gap-2 list-none p-0">
              {[
                'SocialSight — AI content analytics platform.',
                'Hypertune — Feature flagging and personalisation service.',
                'Sonix — Voice and transcription services.',
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(91,200,255,.2)' }}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">We encourage you to review the privacy policies of these services.</p>
          </Section>

          <Section title="5. Cookies">
            <p>We use cookies to enhance your experience. See our <a href="/cookie-policy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Cookie Policy</a> for full details. You can manage your cookie preferences at any time through your browser settings.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain personal data only as long as necessary for the purposes described in this policy or as required by law. Contact form submissions are deleted after 12 months unless an ongoing relationship exists.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the right to access, correct, delete, or restrict our use of your personal data. To exercise any of these rights, email us at <a href="mailto:contact@oce5n.gg" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@oce5n.gg</a>.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this policy periodically. Material changes will be communicated via a notice on this page. Continued use of the site after changes constitutes your acceptance of the revised policy.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>This policy is governed by the laws of the State of Ohio, USA. Any disputes shall be resolved in the courts of Franklin County, Ohio.</p>
          </Section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
