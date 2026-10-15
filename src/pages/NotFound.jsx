import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Search } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinic';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for at Sahasraditya Physiotherapy Centre could not be found."
        noIndex={true}
      />

      <section
        style={{
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          backgroundColor: 'var(--soft-ivory)',
          textAlign: 'center'
        }}
      >
        <div className="container-narrow">
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--teal-light)',
              color: 'var(--teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}
          >
            <Search size={36} aria-hidden="true" />
          </div>

          <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
            404 ERROR
          </span>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--primary-navy)',
              marginBottom: '1rem'
            }}
          >
            We Couldn't Find That Page.
          </h1>

          <p
            className="lead"
            style={{
              color: 'var(--muted-secondary-text)',
              maxWidth: '560px',
              margin: '0 auto 2.25rem auto'
            }}
          >
            The page you're looking for may have moved, been renamed, or is no longer available. Please explore our physiotherapy services or return to the homepage.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Go to Homepage</span>
            </Link>

            <Link to="/#services" className="btn btn-secondary btn-lg">
              <span>Explore Services</span>
            </Link>

            <a
              href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
              className="btn btn-navy btn-lg"
            >
              <Phone size={18} />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
