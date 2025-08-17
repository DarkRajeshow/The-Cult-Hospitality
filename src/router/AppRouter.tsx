// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Brands from '@/pages/Brands';
import Careers from '@/pages/Careers';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};
