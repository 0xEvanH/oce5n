/**
 * OCE5N Esports — SEO Usage Examples
 * ============================================================
 * Copy the relevant <SEO /> block into each page component.
 * All 6 pages: Home, About, News, Roster, Sponsors, Contact
 * ============================================================
 */

import SEO from "../SEO";

// ─── HOME ────────────────────────────────────────────────────
// src/pages/Home.jsx
export function HomePage() {
  return (
    <>
      <SEO
        title="OCE5N Esports | #The71Percent — Multi-Media Gaming Team"
        description="OCE5N is a multi-media esports & gaming team based in Columbus, Ohio. Competing, creating, and building community since 2022. Powered by SocialSight, Hypertune & Sonix."
        path="/"
      />
      {/* page content */}
    </>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────
// src/pages/About.jsx
export function AboutPage() {
  return (
    <>
      <SEO
        title="About OCE5N Esports | Our Story & Mission"
        description="Learn about OCE5N — a multi-media esports organization built on community, competition, and creativity. Founded in Columbus, Ohio in 2022 under the banner of #The71Percent."
        keywords="about OCE5N, OCE5N story, esports organization, The71Percent, Columbus Ohio gaming, OCE5NS history"
        path="/about"
      />
      {/* page content */}
    </>
  );
}

// ─── NEWS ────────────────────────────────────────────────────
// src/pages/News.jsx  (news index listing)
export function NewsPage() {
  return (
    <>
      <SEO
        title="News & Updates | OCE5N Esports"
        description="Stay up to date with the latest OCE5N news — tournament results, team announcements, FNCS updates, and community highlights."
        keywords="OCE5N news, esports updates, FNCS results, Fortnite OCE5N, tournament news, gaming announcements"
        path="/news"
      />
      {/* page content */}
    </>
  );
}

// src/pages/NewsPost.jsx  (individual article — use "article" prop)
export function NewsPostPage({ post }) {
  return (
    <>
      <SEO
        title={`${post.title} | OCE5N Esports`}
        description={post.excerpt}
        image={post.coverImage ?? "https://oce5n.com/og-image.png"}
        path={`/news/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.publishedAt,   // ISO 8601: "2026-03-29T12:00:00Z"
          modifiedTime: post.updatedAt,
          author: post.author ?? "OCE5N Esports",
          section: "Esports",
          tags: post.tags,                   // e.g. ["Fortnite", "FNCS", "OCE5N"]
        }}
      />
      {/* page content */}
    </>
  );
}

// ─── ROSTER ──────────────────────────────────────────────────
// src/pages/Roster.jsx
export function RosterPage() {
  return (
    <>
      <SEO
        title="Roster | OCE5N Esports"
        description="Meet the OCE5N roster — competitive players, content creators, and community staff representing #The71Percent out of Columbus, Ohio."
        keywords="OCE5N roster, OCE5N players, esports team members, gaming lineup, OCE5NS squad, The71Percent"
        path="/roster"
      />
      {/* page content */}
    </>
  );
}

// ─── SPONSORS ────────────────────────────────────────────────
// src/pages/Sponsors.jsx
export function SponsorsPage() {
  return (
    <>
      <SEO
        title="Sponsors & Partners | OCE5N Esports"
        description="OCE5N is proudly powered by SocialSight, Hypertune & Sonix. Interested in partnering with #The71Percent? Learn about sponsorship and investment opportunities."
        keywords="OCE5N sponsors, esports sponsorship, OCE5N partners, SocialSight, Hypertune, Sonix, esports investment, Columbus Ohio esports"
        path="/sponsors"
      />
      {/* page content */}
    </>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────
// src/pages/Contact.jsx
export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact OCE5N Esports | Get in Touch"
        description="Reach out to OCE5N for sponsorship inquiries, partnership opportunities, or general questions. We're recruiting Tournament Hosts, Community Managers, Graphic Designers, and more."
        keywords="contact OCE5N, OCE5N email, esports sponsorship inquiry, join OCE5N, OCE5NS contact"
        path="/contact"
      />
      {/* page content */}
    </>
  );
}