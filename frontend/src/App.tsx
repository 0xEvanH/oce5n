import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IntroOverlay    from './components/IntroOverlay';
import PageTransition  from './components/PageTransition';
import Bubbles         from './components/Bubbles';
import Nav             from './components/Nav';
import Footer          from './components/Footer';

import HomePage    from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import RostersPage from './pages/RostersPage';
import NewsPage    from './pages/NewsPage';
import SponsorsPage from './pages/SponsorsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const Layout = () => (
  <div className="grain water-bg min-h-screen">
    <Bubbles />
    <Nav />
    <main className="relative z-10">
      <PageTransition>
        <Routes>
          <Route path="/"        element={<HomePage />}    />
          <Route path="/about"   element={<AboutPage />}   />
          <Route path="/rosters" element={<RostersPage />} />
          <Route path="/news"    element={<NewsPage />}    />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*"        element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
    </main>
    <Footer />
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
