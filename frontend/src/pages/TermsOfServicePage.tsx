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

const TermsOfServicePage = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Terms of Service | OCE5N Esports"
        description="OCE5N Esports terms of service — the rules and conditions for using our website."
        path="/terms-of-service"
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
            Terms of <span style={{ color: 'var(--accent)' }}>Service</span>
          </h1>
          <p style={{ color: 'var(--offwhite)', opacity: .45, fontSize: '.8rem', marginTop: '1rem', fontFamily: "'Barlow', sans-serif", letterSpacing: '.1em' }}>
            Last updated: May 2026
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(91,200,255,.1)', paddingTop: '3rem' }}>
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using <strong style={{ color: 'var(--white)' }}>oce5n.com</strong> ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site. These terms apply to all visitors and users of the Site.</p>
          </Section>

          <Section title="2. Use of the Site">
            <p>You agree to use this Site only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
            <ul className="mt-3 flex flex-col gap-2 list-none p-0">
              {[
                'Use the Site in any way that violates applicable local, national, or international laws or regulations.',
                'Transmit any unsolicited or unauthorised advertising or promotional material.',
                'Attempt to gain unauthorised access to any part of the Site or its related systems.',
                'Scrape, copy, or reproduce site content without prior written permission from OCE5N Esports.',
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(91,200,255,.2)' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            <p>All content on this Site — including but not limited to text, graphics, logos, images, videos, and design — is the property of OCE5N Esports or its content suppliers and is protected by applicable intellectual property laws.</p>
            <p className="mt-3">Player names, handles, and likenesses displayed on the Site remain the property of the respective individuals. Team branding and the OCE5N name and logo are trademarks of OCE5N Esports.</p>
          </Section>

          <Section title="4. Third-Party Links">
            <p>The Site may contain links to third-party websites. These links are provided for convenience only. OCE5N Esports has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </Section>

          <Section title="5. Disclaimer of Warranties">
            <p>The Site is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. OCE5N Esports does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>To the fullest extent permitted by law, OCE5N Esports shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, even if we have been advised of the possibility of such damages.</p>
          </Section>

          <Section title="7. Sponsorships & Commercial Relationships">
            <p>References to sponsors (SocialSight, Hypertune, Sonix) on this Site represent genuine commercial partnerships. Content about sponsors reflects OCE5N's honest experience with those products and services.</p>
          </Section>

          <Section title="8. Changes to Terms">
            <p>We reserve the right to modify these Terms at any time. Changes take effect upon posting to the Site. Your continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of the State of Ohio, USA. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Franklin County, Ohio.</p>
          </Section>

          <Section title="10. Contact">
            <p>For any questions about these Terms, please contact us at <a href="mailto:contact@oce5n.gg" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@oce5n.gg</a>.</p>
          </Section>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
