import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IntroOverlay    from './components/IntroOverlay';
import PageTransition  from './components/PageTransition';
import Bubbles         from './components/Bubbles';
import Nav             from './components/Nav';
import Footer          from './components/Footer';
import CookieConsent   from './components/CookieConsent';

import HomePage           from './pages/HomePage';
import AboutPage          from './pages/AboutPage';
import RostersPage        from './pages/RostersPage';
import NewsPage           from './pages/NewsPage';
import SponsorsPage       from './pages/SponsorsPage';
import ContactPage        from './pages/ContactPage';
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage   from './pages/CookiePolicyPage';
import NotFoundPage       from './pages/NotFoundPage';

const Layout = () => (
  <div className="grain water-bg min-h-screen">
    <Bubbles />
    <Nav />
    <main className="relative z-10">
      <PageTransition>
        <Routes>
          <Route path="/"               element={<HomePage />}           />
          <Route path="/about"          element={<AboutPage />}          />
          <Route path="/rosters"        element={<RostersPage />}        />
          <Route path="/news"           element={<NewsPage />}           />
          <Route path="/sponsors"       element={<SponsorsPage />}       />
          <Route path="/contact"        element={<ContactPage />}        />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />}  />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy"  element={<CookiePolicyPage />}   />
          <Route path="*"               element={<NotFoundPage />}       />
        </Routes>
      </PageTransition>
    </main>
    <Footer />
    <CookieConsent />
  </div>
);

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [introDone]);

  return (
    <>
      <BrowserRouter>
        {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
        <Layout />
      </BrowserRouter>
    </>
  );
}
