// src/components/layout/AppLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatingButton from '../common/WhatsAppFloatingButton';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};
