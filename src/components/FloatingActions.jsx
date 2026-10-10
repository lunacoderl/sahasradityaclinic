import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAppointment = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      className="floating-action-stack"
      aria-label="Quick contact and navigation actions"
      style={{
        position: 'fixed',
        right: 'clamp(1rem, 2.5vw, 1.75rem)',
        bottom: 'clamp(1.25rem, 3vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
        zIndex: 999,
        alignItems: 'center'
      }}
    >
      {/* 1. Direct Telephone Call Button */}
      <a
        href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
        className="floating-btn floating-call"
        aria-label={`Call clinic at ${CLINIC_INFO.contact.primaryPhone}`}
        title={`Call ${CLINIC_INFO.contact.primaryPhone}`}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--primary-navy)',
          color: 'var(--warm-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          textDecoration: 'none',
          transition: 'transform var(--transition-fast), background-color var(--transition-fast)'
        }}
      >
        <Phone size={20} />
      </a>

      {/* 2. WhatsApp Direct Enquiry Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Enquire via WhatsApp with Dr. Balaji"
        title="WhatsApp Enquiry"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: '#25D366', // Authentic WhatsApp Green
          color: 'var(--warm-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          textDecoration: 'none',
          transition: 'transform var(--transition-fast)'
        }}
      >
        <MessageCircle size={22} />
      </a>

      {/* 3. Book Appointment Scroll Action */}
      <button
        onClick={scrollToAppointment}
        className="floating-btn floating-appointment"
        aria-label="Scroll to appointment booking form"
        title="Book Appointment"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--teal)',
          color: 'var(--warm-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform var(--transition-fast)'
        }}
      >
        <Calendar size={20} />
      </button>

      {/* 4. Scroll To Top Action (Conditional upon scroll depth) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-btn floating-top"
          aria-label="Scroll back to top of the page"
          title="Scroll to Top"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--warm-white)',
            color: 'var(--primary-navy)',
            border: '1px solid var(--subtle-borders)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            transition: 'transform var(--transition-fast)'
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}

      <style>{`
        .floating-btn:hover {
          transform: scale(1.08);
        }
        .floating-btn:active {
          transform: scale(0.96);
        }
      `}</style>
    </aside>
  );
}
