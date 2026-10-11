import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, Calendar, Phone, ChevronDown, ArrowRight,
  ShieldAlert, Flame, Brain, Hand, Crosshair, Sparkles,
  MapPin, Clock, MessageCircle, ExternalLink
} from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/services';
import LucideIcon from './LucideIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  // Handle smooth scroll to homepage anchor or navigate if on another route
  const handleNavClick = (anchorId) => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${anchorId}`);
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Hover handlers for Amazon-style mega dropdown with safety timeout
  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  // Group services by category for clean columns
  const servicesByCategory = SERVICE_CATEGORIES.map((cat) => ({
    ...cat,
    services: SERVICES_DATA.filter((s) => s.categorySlug === cat.slug)
  }));

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'var(--warm-white)',
        borderBottom: isScrolled ? '1px solid var(--subtle-borders)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        transition: 'box-shadow var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      {/* =========================================================================
          TOP HIGHLIGHT BANNER: CLINIC LOCATION & DIRECT MOBILE CONTACT
      ========================================================================= */}
      <div
        className="top-highlight-banner"
        style={{
          backgroundColor: '#071A30',
          backgroundImage: 'linear-gradient(90deg, #071A30 0%, #0B2545 50%, #08213F 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#FFFFFF',
          fontSize: '0.8rem',
          padding: '0.42rem 0',
          position: 'relative',
          zIndex: 1001
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.45rem 1rem'
            }}
          >
            {/* Highlighted Location Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                flexWrap: 'wrap'
              }}
            >
              <a
                href={CLINIC_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Sahasraditya Physiotherapy on Google Maps"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(0, 163, 215, 0.16)',
                  border: '1px solid rgba(0, 163, 215, 0.5)',
                  color: '#E0F2FE',
                  padding: '0.22rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 650,
                  fontSize: '0.775rem',
                  textDecoration: 'none'
                }}
                className="top-banner-pill-location"
              >
                <MapPin size={13} style={{ color: 'var(--logo-cyan)', flexShrink: 0 }} />
                <span className="desktop-address">
                  Ground Floor, Suvishesapuram, Opp. Central Jail Rd, Bhaskar Nagar, Rajamahendravaram
                </span>
                <span className="mobile-address">
                  Suvishesapuram, Opp. Central Jail Rd, Rajahmundry
                </span>
                <span
                  style={{
                    backgroundColor: 'var(--logo-cyan)',
                    color: '#0B2545',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                    marginLeft: '0.2rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  MAP
                </span>
              </a>

              {/* Consultation Hours Subtle Tag */}
              <div
                className="top-banner-hours"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '0.725rem',
                  fontWeight: 500
                }}
              >
                <Clock size={12} style={{ color: 'var(--logo-gold)' }} />
                <span>Mon–Sat: 9 AM – 8:30 PM</span>
              </div>
            </div>

            {/* Highlighted Mobile Numbers & WhatsApp Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              {/* Primary Mobile Number (Highlighted with Gold Badge) */}
              <a
                href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                title="Call Dr. Balaji directly"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                  border: '1.5px solid rgba(245, 158, 11, 0.65)',
                  color: '#FEF3C7',
                  padding: '0.22rem 0.7rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '0.775rem',
                  textDecoration: 'none',
                  boxShadow: '0 1px 6px rgba(245, 158, 11, 0.22)'
                }}
                className="top-banner-pill-phone"
              >
                <Phone size={13} style={{ color: '#FBBF24', flexShrink: 0 }} />
                <span>{CLINIC_INFO.contact.primaryPhone}</span>
              </a>

              {/* Secondary Mobile Number */}
              <a
                href={`tel:${CLINIC_INFO.contact.secondaryPhoneRaw}`}
                title="Call Clinic Reception"
                className="top-banner-phone-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.75rem',
                  fontWeight: 650,
                  textDecoration: 'none',
                  padding: '0.2rem 0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <span>{CLINIC_INFO.contact.secondaryPhone}</span>
              </a>

              {/* Instant WhatsApp Quick Link */}
              <a
                href={getWhatsAppUrl("Hello Dr. Balaji, I would like to consult regarding physiotherapy treatment at Sahasraditya in Rajamahendravaram.")}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Clinic on WhatsApp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.22rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 750,
                  fontSize: '0.725rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(37, 211, 102, 0.25)'
                }}
              >
                <MessageCircle size={12} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sahasraditya Official Logo Spectrum Accent Line */}
      <div style={{ height: '3.5px', width: '100%', background: 'var(--gradient-spectrum)' }} />

      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--nav-height)',
            gap: '1rem'
          }}
        >
          {/* Brand Logo & Clinic Identity */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
            aria-label="Sahasraditya Physiotherapy - Home"
          >
            <img
              src="/images/sahasraditya-logo.png"
              alt="Sahasraditya Logo"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  fontWeight: 800,
                  color: 'var(--primary-navy)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em'
                }}
              >
                SAHASRADITYA
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 650,
                  color: 'var(--teal)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Physiotherapy &amp; In-Patient Rehab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.25rem'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <button
              onClick={() => handleNavClick('hero')}
              className="nav-link-btn"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="nav-link-btn"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('doctor')}
              className="nav-link-btn"
            >
              Doctor
            </button>

            {/* Services with Amazon-Style Mega Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-link-btn ${servicesDropdownOpen ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform var(--transition-fast)'
                  }}
                  aria-hidden="true"
                />
              </button>

              {/* Mega Dropdown Menu Container */}
              {servicesDropdownOpen && (
                <div
                  className="mega-dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(1120px, 92vw)',
                    backgroundColor: 'var(--warm-white)',
                    border: '1px solid var(--subtle-borders)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 20px 45px -10px rgba(23, 50, 77, 0.18)',
                    zIndex: 1100,
                    padding: '1.5rem',
                    paddingBottom: '1.25rem',
                    marginTop: '0.5rem',
                    animation: 'fadeInMenu 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Top Bar inside Dropdown */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '1rem',
                      marginBottom: '1.25rem',
                      borderBottom: '1px solid var(--subtle-borders)'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--teal)'
                        }}
                      >
                        CLINICAL REHABILITATION DIRECTORY
                      </span>
                      <h4
                        style={{
                          fontSize: '1.15rem',
                          color: 'var(--primary-navy)',
                          margin: 0
                        }}
                      >
                        All 16 Physiotherapy &amp; In-Patient Services
                      </h4>
                    </div>

                    <button
                      onClick={() => handleNavClick('services')}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.825rem', gap: '0.35rem' }}
                    >
                      <span>Go to Services Section</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Multi-Column Mega Menu Categories Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '1.25rem',
                      alignItems: 'start'
                    }}
                  >
                    {servicesByCategory.map((category) => (
                      <div key={category.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 750,
                            textTransform: 'uppercase',
                            letterSpacing: '0.03em',
                            color: 'var(--primary-navy)',
                            marginBottom: '0.75rem',
                            paddingBottom: '0.35rem',
                            borderBottom: '2px solid var(--teal-light)'
                          }}
                        >
                          {category.name}
                        </div>

                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.45rem'
                          }}
                        >
                          {category.services.map((svc) => (
                            <li key={svc.id}>
                              <Link
                                to={`/services/${svc.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.45rem',
                                  padding: '0.4rem 0.5rem',
                                  borderRadius: 'var(--radius-sm)',
                                  color: 'var(--charcoal-text)',
                                  fontSize: '0.85rem',
                                  fontWeight: 500,
                                  lineHeight: 1.35,
                                  textDecoration: 'none',
                                  transition: 'all 0.15s ease'
                                }}
                                className="mega-menu-item"
                              >
                                <LucideIcon name={svc.icon} size={15} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                                <span>{svc.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Bottom Banner Bar */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--subtle-borders)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--soft-ivory)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.825rem',
                      color: 'var(--charcoal-text)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={16} style={{ color: 'var(--teal)' }} />
                      <span>
                        Need guidance on which therapy fits your pain or mobility goal?
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a
                        href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                        style={{ color: 'var(--primary-navy)', fontWeight: 650, textDecoration: 'none' }}
                      >
                        Call: {CLINIC_INFO.contact.primaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('reviews')}
              className="nav-link-btn"
            >
              Reviews
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="nav-link-btn"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.85rem'
            }}
            className="desktop-actions"
          >
            <a
              href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.4rem' }}
              aria-label={`Call ${CLINIC_INFO.contact.primaryPhone}`}
            >
              <Phone size={15} style={{ color: 'var(--teal)' }} />
              <span>{CLINIC_INFO.contact.primaryPhone}</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-aditya btn-sm"
              style={{ gap: '0.4rem' }}
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-toggle">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary btn-sm"
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.825rem' }}
              aria-label="Enquire now"
            >
              <Calendar size={14} />
              <span>Enquire</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: '1px solid var(--subtle-borders)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.45rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-navy)'
              }}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            style={{
              padding: '1.25rem 0 1.5rem 0',
              borderTop: '1px solid var(--subtle-borders)',
              backgroundColor: 'var(--warm-white)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
            className="mobile-drawer"
          >
            <button
              onClick={() => handleNavClick('hero')}
              className="mobile-nav-btn"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="mobile-nav-btn"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('doctor')}
              className="mobile-nav-btn"
            >
              Doctor
            </button>

            {/* Mobile Services Accordion */}
            <div style={{ borderBottom: '1px solid var(--subtle-borders)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.5rem'
                }}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 650,
                    color: 'var(--primary-navy)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    flexGrow: 1
                  }}
                >
                  Services
                </button>
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.3rem',
                    cursor: 'pointer',
                    color: 'var(--teal)'
                  }}
                  aria-label="Toggle all services list"
                >
                  <ChevronDown
                    size={20}
                    style={{
                      transform: mobileServicesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>
              </div>

              {/* Expanded Mobile Services List */}
              {mobileServicesExpanded && (
                <div
                  style={{
                    backgroundColor: 'var(--soft-ivory)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <button
                    onClick={() => handleNavClick('services')}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      color: 'var(--teal)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: '0.3rem 0',
                      borderBottom: '1px solid var(--subtle-borders)'
                    }}
                  >
                    &rarr; View All Services Section
                  </button>

                  {SERVICES_DATA.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--charcoal-text)',
                        textDecoration: 'none',
                        padding: '0.3rem 0'
                      }}
                    >
                      <LucideIcon name={s.icon} size={15} style={{ color: 'var(--teal)' }} />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('reviews')}
              className="mobile-nav-btn"
            >
              Reviews
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-nav-btn"
            >
              Contact
            </button>

            <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={16} /> Call {CLINIC_INFO.contact.primaryPhone}
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={16} /> Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .nav-link-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--charcoal-text);
          cursor: pointer;
          padding: 0.4rem 0.2rem;
          transition: color var(--transition-fast);
        }

        .nav-link-btn:hover, .nav-link-btn.active {
          color: var(--teal);
        }

        .mega-menu-item:hover {
          background-color: var(--teal-light);
          color: var(--teal) !important;
          padding-left: 0.75rem !important;
        }

        .mobile-nav-btn {
          text-align: left;
          background: none;
          border: none;
          padding: 0.75rem 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          fontWeight: 650;
          color: var(--primary-navy);
          cursor: pointer;
          border-bottom: 1px solid var(--subtle-borders);
        }

        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
