import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar, Phone, MessageCircle, ArrowRight, CheckCircle2,
  AlertTriangle, Clock, Activity, ShieldAlert, ChevronDown,
  Info, Sparkles, BookOpen, HeartHandshake, Check, X
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceCard from '../components/ServiceCard';
import LucideIcon from '../components/LucideIcon';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';
import { SERVICES_DATA } from '../data/services';

export default function ServiceDetails() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  // If service slug is invalid, render custom 404
  if (!service) {
    return <NotFound />;
  }

  // Get related service objects
  const relatedServicesList = (service.relatedServices || [])
    .map((rSlug) => SERVICES_DATA.find((s) => s.slug === rSlug))
    .filter(Boolean);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Structured Data: BreadcrumbList + Service Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sahasradityaphysio.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sahasradityaphysio.in/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.name,
            "item": `https://sahasradityaphysio.in/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": service.name,
        "description": service.shortDescription,
        "image": service.image ? `https://sahasradityaphysio.in${service.image}` : undefined,
        "procedureType": "Non-surgical, physical therapy and rehabilitation",
        "provider": {
          "@type": "MedicalBusiness",
          "name": CLINIC_INFO.name,
          "address": CLINIC_INFO.contact.address.full,
          "telephone": CLINIC_INFO.contact.primaryPhone
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={service.seoTitle || `${service.name} in Rajamahendravaram`}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalUrl={`https://sahasradityaphysio.in/services/${service.slug}`}
        ogImage={service.image ? `https://sahasradityaphysio.in${service.image}` : undefined}
        schemaJson={structuredData}
      />

      {/* SECTION 1: BREADCRUMB NAVIGATION */}
      <div style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/#services' },
              { label: service.name }
            ]}
          />
        </div>
      </div>

      {/* SECTION 2: SERVICE HERO */}
      <section
        style={{
          backgroundColor: 'var(--soft-ivory)',
          paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--subtle-borders)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                {service.category}
              </span>

              <h1
                style={{
                  color: 'var(--primary-navy)',
                  marginBottom: '1rem',
                  lineHeight: 1.2
                }}
              >
                {service.name}
              </h1>

              <p
                className="lead"
                style={{
                  color: 'var(--charcoal-text)',
                  marginBottom: '1.75rem',
                  lineHeight: 1.65
                }}
              >
                {service.heroDescription}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="/#contact"
                  className="btn btn-primary btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Calendar size={18} />
                  <span>Book an Appointment</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Phone size={18} />
                  <span>Call {CLINIC_INFO.contact.primaryPhone}</span>
                </a>
              </div>

              {!service.availabilityConfirmed && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'var(--warm-accent-light)',
                    border: '1px solid var(--warm-accent)',
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    marginTop: '1.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--charcoal-text)'
                  }}
                >
                  <Info size={18} style={{ color: 'var(--warm-accent-hover)', flexShrink: 0 }} />
                  <span>
                    <strong>Clinical Notice:</strong> This specialized procedure is subject to individual screening and current clinical equipment confirmation at our Rajamahendravaram centre.
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: High-Resolution Real Service Photo Card */}
            <div
              style={{
                backgroundColor: 'var(--warm-white)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--subtle-borders)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {service.image ? (
                <div style={{ width: '100%', height: '300px', overflow: 'hidden', backgroundColor: 'var(--soft-ivory)' }}>
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading="eager"
                  />
                </div>
              ) : null}

              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--teal-light)',
                      color: 'var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <LucideIcon name={service.icon} size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', margin: 0 }}>
                      Evidence-Informed Protocol
                    </h2>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>
                      Administered by Dr. D. V. Balaji N (MS Sports &amp; Health Sciences)
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: '100%',
                    paddingTop: '1rem',
                    marginTop: '0.75rem',
                    borderTop: '1px solid var(--subtle-borders)',
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: '0.8rem',
                    color: 'var(--charcoal-text)',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <strong>Session</strong>
                    <div style={{ color: 'var(--teal)', fontWeight: 600 }}>Individualized</div>
                  </div>
                  <div>
                    <strong>Assessment</strong>
                    <div style={{ color: 'var(--teal)', fontWeight: 600 }}>Pre-Requisite</div>
                  </div>
                  <div>
                    <strong>Setting</strong>
                    <div style={{ color: 'var(--teal)', fontWeight: 600 }}>In-Patient / Outpatient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: QUICK OVERVIEW */}
      <section style={{ backgroundColor: 'var(--warm-white)', padding: '2.5rem 0', borderBottom: '1px solid var(--subtle-borders)' }}>
        <div className="container">
          <div className="grid-4">
            <div style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-secondary-text)' }}>CLINICAL PURPOSE</span>
              <h3 style={{ fontSize: '1rem', marginTop: '0.2rem', color: 'var(--primary-navy)' }}>Mobility &amp; Pain Management</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>Targeting underlying tissue restrictions and movement compensations.</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-secondary-text)' }}>PRE-REQUISITE</span>
              <h3 style={{ fontSize: '1rem', marginTop: '0.2rem', color: 'var(--primary-navy)' }}>Physical Assessment</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>Systematic evaluation of range, strength, and symptom irritability.</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--warm-accent)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-secondary-text)' }}>SUITABILITY</span>
              <h3 style={{ fontSize: '1rem', marginTop: '0.2rem', color: 'var(--primary-navy)' }}>Patient-Specific Evaluation</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>Confirmed during initial clinical consultation and screening.</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-secondary-text)' }}>PROGRAMME TYPE</span>
              <h3 style={{ fontSize: '1rem', marginTop: '0.2rem', color: 'var(--primary-navy)' }}>Outpatient &amp; In-Patient</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-secondary-text)', margin: 0 }}>Adapted to recovery intensity and individual functional needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT IS THIS TREATMENT? */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">DETAILED EXPLANATION</span>
            <h2 style={{ marginBottom: '1.25rem' }}>What is {service.name}?</h2>
            <p className="lead" style={{ marginBottom: '1.25rem' }}>
              {service.whatItIs}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONDITIONS AND SYMPTOMS */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">CLINICAL INDICATIONS</span>
            <h2 style={{ marginBottom: '1rem' }}>Conditions &amp; Symptoms Considered</h2>
            <p style={{ color: 'var(--muted-secondary-text)', marginBottom: '1.75rem' }}>
              This technique may be utilized as a primary intervention or an adjunct therapy for the following movement and musculoskeletal challenges:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
              }}
            >
              {service.conditions.map((item, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1.15rem'
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--charcoal-text)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO MAY BENEFIT? */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">PATIENT SUITABILITY</span>
            <h2 style={{ marginBottom: '1rem' }}>Who May Benefit from This Care?</h2>
            <div
              className="card"
              style={{
                backgroundColor: 'var(--soft-ivory)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)'
              }}
            >
              <p style={{ fontSize: '1rem', color: 'var(--charcoal-text)', lineHeight: 1.65, margin: 0 }}>
                {service.suitability}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW THE TREATMENT IS PERFORMED */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">STEP-BY-STEP PROTOCOL</span>
            <h2 style={{ marginBottom: '1rem' }}>How the Treatment is Performed</h2>
            <p style={{ color: 'var(--muted-secondary-text)', marginBottom: '2rem' }}>
              Every procedure at Sahasraditya adheres to a systematic clinical procedure to ensure safety, comfort, and efficacy:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {service.treatmentProcess.map((proc) => (
                <div
                  key={proc.step}
                  className="card"
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.35rem'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--teal)',
                      color: 'var(--warm-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 750,
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}
                  >
                    {proc.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                      {proc.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--muted-secondary-text)', margin: 0, lineHeight: 1.55 }}>
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SESSION DURATION AND TREATMENT TIMELINE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">TREATMENT PARAMETERS</span>
            <h2 style={{ marginBottom: '1rem' }}>Session Duration &amp; Expected Timeline</h2>
            <p style={{ color: 'var(--muted-secondary-text)', marginBottom: '2rem' }}>
              Actual timelines depend on whether your condition is acute or chronic, as well as adherence to home exercises:
            </p>

            <div className="grid-3" style={{ marginBottom: '2rem' }}>
              <div className="card" style={{ borderTop: '4px solid var(--teal)' }}>
                <Clock size={24} style={{ color: 'var(--teal)', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>Session Duration</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>{service.sessionDuration}</p>
              </div>

              <div className="card" style={{ borderTop: '4px solid var(--teal)' }}>
                <Activity size={24} style={{ color: 'var(--teal)', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>Session Frequency</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>{service.frequency}</p>
              </div>

              <div className="card" style={{ borderTop: '4px solid var(--warm-accent)' }}>
                <Calendar size={24} style={{ color: 'var(--warm-accent)', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>Programme Duration</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>{service.programmeDuration}</p>
              </div>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: 'var(--sage-light)',
                border: '1px solid var(--muted-sage)',
                padding: '1.25rem'
              }}
            >
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>Expected Progress</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-text)', margin: 0, lineHeight: 1.55 }}>
                {service.expectedProgress}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: POTENTIAL BENEFITS AND LIMITATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">HONEST OUTCOMES</span>
            <h2 style={{ marginBottom: '1.5rem' }}>Potential Benefits &amp; Realistic Limitations</h2>

            <div className="grid-2">
              {/* Benefits */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--warm-white)',
                  borderTop: '4px solid var(--teal)'
                }}
              >
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={20} style={{ color: 'var(--teal)' }} />
                  <span>Potential Clinical Benefits</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.benefits.map((b, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal-text)' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--warm-white)',
                  borderTop: '4px solid var(--warm-accent)'
                }}
              >
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={20} style={{ color: 'var(--warm-accent)' }} />
                  <span>Important Limitations</span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.limitations.map((lim, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--muted-secondary-text)' }}>
                      <span style={{ color: 'var(--warm-accent)', fontWeight: 'bold' }}>•</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: SAFETY, RISKS AND PRECAUTIONS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">CLINICAL RESPONSIBILITY</span>
            <h2 style={{ marginBottom: '1rem' }}>Safety, Risks &amp; Precautions</h2>
            <div
              className="card"
              style={{
                backgroundColor: 'var(--warm-white)',
                borderLeft: '4px solid #dc2626',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <ShieldAlert size={22} style={{ color: '#dc2626' }} />
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', margin: 0 }}>Pre-Treatment Screening</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {service.risksAndPrecautions.map((risk, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--charcoal-text)', paddingLeft: '1.25rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#dc2626' }}>•</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHAT TO EXPECT AT SAHASRADITYA */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">YOUR VISIT</span>
            <h2 style={{ marginBottom: '1rem' }}>What to Expect at Sahasraditya</h2>
            <div className="card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)', backgroundColor: 'var(--warm-white)' }}>
              <p style={{ fontSize: '1rem', color: 'var(--charcoal-text)', lineHeight: 1.65, margin: 0 }}>
                {service.whatToExpect}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <span className="eyebrow">PATIENT QUESTIONS</span>
            <h2 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {service.faq.map((item, idx) => {
                const isExpanded = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: 0,
                      overflow: 'hidden',
                      backgroundColor: 'var(--warm-white)'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isExpanded}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '1.25rem 1.5rem',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 650,
                        color: 'var(--primary-navy)'
                      }}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform var(--transition-fast)',
                          color: 'var(--teal)',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isExpanded && (
                      <div
                        style={{
                          padding: '0 1.5rem 1.35rem 1.5rem',
                          fontSize: '0.925rem',
                          color: 'var(--charcoal-text)',
                          lineHeight: 1.6,
                          borderTop: '1px solid var(--subtle-borders)'
                        }}
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: RELATED SERVICES */}
      {relatedServicesList.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto 2rem auto', textAlign: 'center' }}>
              <span className="eyebrow">CONNECTED CARE</span>
              <h2>Related Physiotherapy Services</h2>
              <p style={{ color: 'var(--muted-secondary-text)', marginTop: '0.5rem' }}>
                Other therapeutic modalities frequently combined with {service.name} for comprehensive rehabilitation.
              </p>
            </div>

            <div className="grid-3">
              {relatedServicesList.map((relService) => (
                <ServiceCard key={relService.id} service={relService} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 14: APPOINTMENT CTA */}
      <section
        style={{
          backgroundColor: 'var(--primary-navy)',
          color: 'var(--warm-white)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="eyebrow eyebrow-navy" style={{ marginBottom: '0.75rem' }}>
              ASSESSMENT &amp; ADVICE
            </span>
            <h2 style={{ color: 'var(--warm-white)', marginBottom: '1rem' }}>
              Not Sure Which Treatment Is Right for You?
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Contact Sahasraditya Physiotherapy to discuss your symptoms and arrange an appropriate clinical evaluation with Dr. Balaji.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/#contact"
                className="btn btn-accent btn-lg"
              >
                <Calendar size={18} /> Book an Assessment
              </a>

              <a
                href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                className="btn btn-secondary btn-lg"
              >
                <Phone size={18} /> Call {CLINIC_INFO.contact.primaryPhone}
              </a>

              <a
                href={getWhatsAppUrl(`Hello Dr. Balaji, I would like to enquire about ${service.name} at your clinic in Rajamahendravaram.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
              >
                <MessageCircle size={18} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: MEDICAL INFORMATION NOTICE */}
      <aside
        style={{
          backgroundColor: 'var(--soft-ivory)',
          borderTop: '1px solid var(--subtle-borders)',
          padding: '1.75rem 0',
          fontSize: '0.825rem',
          color: 'var(--muted-secondary-text)'
        }}
        aria-label="Medical Disclaimer"
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={18} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ margin: '0 0 0.35rem 0', lineHeight: 1.5 }}>
                <strong>Educational Notice:</strong> The information provided on this page is for general patient education only and does not constitute individualized medical diagnosis or a substitute for personal clinical consultation.
              </p>
              <p style={{ margin: 0, lineHeight: 1.5 }}>
                If you experience sudden severe numbness, sudden loss of bowel or bladder control, progressive paralysis, or intense chest/abdominal pain, please seek emergency medical attention immediately rather than waiting for a physiotherapy consultation.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
