import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Fragrances from './pages/Fragrances';
import Beauty from './pages/Beauty';
import Gifts from './pages/Gifts';
import BrandStory from './pages/BrandStory';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/brand-story" element={<BrandStory />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
