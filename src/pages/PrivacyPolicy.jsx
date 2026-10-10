import React from 'react';
import { Shield, Lock, Phone, Mail } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { CLINIC_INFO } from '../data/clinic';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Sahasraditya Physiotherapy"
        description="Privacy policy and data handling practices for Sahasraditya Physiotherapy & In Patient Rehabilitation Centre in Rajamahendravaram."
        canonicalUrl="https://sahasradityaphysio.in/privacy-policy"
      />

      <div style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </div>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--soft-ivory)' }}>
        <div className="container-narrow">
          <div
            className="card"
            style={{
              backgroundColor: 'var(--warm-white)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.7
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--teal-light)',
                  color: 'var(--teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Shield size={24} />
              </div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary-navy)' }}>
                  Privacy Policy
                </h1>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                  Last Updated: October 2026
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              1. Introduction &amp; Scope
            </h2>
            <p>
              Sahasraditya Physiotherapy &amp; In Patient Rehabilitation Centre ("we", "our", or "the Clinic"), operating in Rajamahendravaram, Andhra Pradesh, respects the privacy of our website visitors. This Privacy Policy clarifies how personal information entered on our website is handled.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              2. Website Architecture &amp; Data Collection
            </h2>
            <p>
              Our website is an informational frontend platform designed to share healthcare information and facilitate communication.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>
                <strong>No Database Storage of Inquiries:</strong> We do not store, host, or retain patient contact form inquiries on a remote web server database.
              </li>
              <li>
                <strong>WhatsApp &amp; Telephone Communication:</strong> When you submit an inquiry form on our website, your information (name, contact phone number, preferred time, and brief inquiry) is formatted into a direct message transmitted via WhatsApp or initiated via your telephone dialer.
              </li>
              <li>
                <strong>Medical Confidentiality:</strong> Please do not submit confidential medical diagnostic reports, laboratory test results, or detailed sensitive health history through our web inquiry form. Medical documentation is reviewed directly in person during clinical consultations.
              </li>
            </ul>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              3. Third-Party Services
            </h2>
            <p>
              Our website provides links to external services, including:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>
                <strong>WhatsApp (Meta Platforms, Inc.):</strong> For direct patient-clinic communication. Messages are subject to WhatsApp's standard end-to-end encryption and terms.
              </li>
              <li>
                <strong>Google Maps (Google LLC):</strong> To help visitors locate our clinic address at Ground Floor, Suvishesapuram, Rajamahendravaram.
              </li>
            </ul>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              4. Cookies and Web Analytics
            </h2>
            <p>
              We do not utilize invasive advertising tracking cookies or sell visitor analytics to third-party brokers. Standard technical server logs may temporarily register anonymous browser header information solely to ensure website availability and security.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions regarding this policy or wish to discuss how your contact information is handled, please reach out to our clinic:
            </p>
            <div
              style={{
                backgroundColor: 'var(--soft-ivory)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                marginTop: '1rem'
              }}
            >
              <p style={{ margin: 0, fontWeight: 650, color: 'var(--primary-navy)' }}>
                {CLINIC_INFO.name}
              </p>
              <p style={{ margin: '0.25rem 0', color: 'var(--muted-secondary-text)', fontSize: '0.9rem' }}>
                {CLINIC_INFO.contact.address.full}
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Phone: <a href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}>{CLINIC_INFO.contact.primaryPhone}</a> | Email: <a href={`mailto:${CLINIC_INFO.contact.email}`}>{CLINIC_INFO.contact.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
