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
    // #D1922D
    // <div className="min-h-screen flex flex-col bg-[#392A3D]/20">
    <div className="min-h-screen flex flex-col bg-[#FFFBEA]/40">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};
