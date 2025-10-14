
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ExcursionsPage from './pages/ExcursionsPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/excursiones" element={<ExcursionsPage />} />
        <Route path="/excursion/:id" element={<DetailPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;