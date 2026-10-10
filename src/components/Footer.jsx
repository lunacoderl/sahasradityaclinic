import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';
import { SERVICES_DATA } from '../data/services';

export default function Footer() {
  const topServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-navy)',
        color: 'var(--warm-white)',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 'auto',
        position: 'relative'
      }}
    >
      {/* Top 3.5px Brand Spectrum Bar */}
      <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px' }} />

      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem'
          }}
        >
          {/* Column 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/images/sahasraditya-logo.png"
                alt="Sahasraditya Logo"
                style={{ height: '42px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: 'var(--warm-white)',
                    display: 'block',
                    lineHeight: 1.15
                  }}
                >
                  SAHASRADITYA
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--warm-accent)',
                    fontWeight: 650,
                    letterSpacing: '0.04em'
                  }}
                >
                  Physiotherapy &amp; Rehabilitation
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.925rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}
            >
              <strong>{CLINIC_INFO.tagline}</strong>
              <br />
              Personalized, assessment-led physiotherapy and inpatient rehabilitation focused on functional movement, recovery, and patient independence in Rajamahendravaram.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.825rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--teal)' }} />
              <span>Evidence-based clinical care</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4
              style={{
                color: 'var(--warm-white)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                position: 'relative'
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Home</Link>
              </li>
              <li>
                <a href="/#about" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>About the Clinic</a>
              </li>
              <li>
                <a href="/#doctor" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Meet Dr. Balaji N</a>
              </li>
              <li>
                <a href="/#services" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>All Physiotherapy Services</a>
              </li>
              <li>
                <a href="/#journey" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Recovery Journey</a>
              </li>
              <li>
                <a href="/#contact" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Contact &amp; Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4
              style={{
                color: 'var(--warm-white)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              Key Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--teal)' }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Contact & Directions */}
          <div>
            <h4
              style={{
                color: 'var(--warm-white)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              Visit &amp; Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {CLINIC_INFO.contact.address.full}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={17} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`} style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                    {CLINIC_INFO.contact.primaryPhone}
                  </a>
                  <span style={{ color: '#64748b' }}>|</span>
                  <a href={`tel:${CLINIC_INFO.contact.secondaryPhoneRaw}`} style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                    {CLINIC_INFO.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={17} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                <a href={`mailto:${CLINIC_INFO.contact.email}`} style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                  {CLINIC_INFO.contact.email}
                </a>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <a
                  href={CLINIC_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aditya btn-sm"
                  style={{ gap: '0.45rem' }}
                >
                  <MapPin size={14} /> <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#94a3b8'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" style={{ color: '#94a3b8' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" style={{ color: '#94a3b8' }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
