import React from 'react';
import { FileText, AlertCircle, Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { CLINIC_INFO } from '../data/clinic';

export default function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Sahasraditya Physiotherapy"
        description="Terms and conditions for use of the Sahasraditya Physiotherapy website and healthcare educational resources."
        canonicalUrl="https://sahasradityaphysio.in/terms-and-conditions"
      />

      <div style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
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
                <FileText size={24} />
              </div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--primary-navy)' }}>
                  Terms &amp; Conditions
                </h1>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                  Last Updated: October 2026
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you acknowledge and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of this website.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              2. Healthcare Information Disclaimer
            </h2>
            <div
              style={{
                backgroundColor: 'var(--warm-accent-light)',
                borderLeft: '4px solid var(--warm-accent)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1rem',
                fontSize: '0.925rem'
              }}
            >
              <strong>Important Notice:</strong> Content provided on this website—including descriptions of orthopaedic conditions, manual therapies, dry needling, cupping, and rehabilitation protocols—is for informational and educational purposes only.
            </div>
            <p>
              Browsing this website does not establish a formal therapist-patient relationship. The website content does not replace individualized clinical evaluation, physical assessment, or customized medical diagnosis. Always consult a qualified physiotherapist or physician regarding your specific health condition.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              3. No Guarantee of Clinical Outcomes
            </h2>
            <p>
              In healthcare and physical rehabilitation, human bodies respond differently based on age, chronicity of condition, tissue compliance, and lifestyle factors. While our clinical methods are grounded in evidence-informed practice, Sahasraditya Physiotherapy makes no representations, guarantees, or warranties of absolute pain removal or specific timeframes for recovery.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              4. Appointment Enquiries
            </h2>
            <p>
              Submitting an online appointment enquiry via this website or initiating a WhatsApp inquiry indicates an intention to request an assessment. It does not constitute a confirmed, legally binding booking until our clinic staff contacts you directly and confirms a specific appointment slot and time.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              5. Intellectual Property
            </h2>
            <p>
              The clinic name, branding, emblem, logos, photographs of Dr. D. V. Balaji N, custom layout designs, and original editorial descriptions are the property of Sahasraditya Physiotherapy &amp; In Patient Rehabilitation Centre. Unauthorized reproduction, modification, or distribution is prohibited.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
              6. Contact Information
            </h2>
            <p>
              For legal inquiries or questions regarding our terms of service, please contact:
            </p>
            <p style={{ fontWeight: 650, color: 'var(--primary-navy)', margin: '0.5rem 0' }}>
              {CLINIC_INFO.name}
            </p>
            <p style={{ margin: 0, color: 'var(--muted-secondary-text)', fontSize: '0.9rem' }}>
              {CLINIC_INFO.contact.address.full}
            </p>
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
              Telephone: {CLINIC_INFO.contact.primaryPhone} | Email: {CLINIC_INFO.contact.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
