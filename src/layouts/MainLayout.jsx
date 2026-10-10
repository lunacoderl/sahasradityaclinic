import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top whenever route changes unless an anchor hash is present
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }}
    >
      <Navbar />
      <main style={{ flex: '1 0 auto', width: '100%' }}>
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
