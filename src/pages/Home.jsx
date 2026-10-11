import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, Phone, MessageCircle, ArrowRight, CheckCircle2,
  MapPin, Mail, Award, GraduationCap, Building2, ShieldCheck,
  Stethoscope, Clock, Sparkles, Sun, Flame, Activity, ExternalLink, Navigation
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ConditionCard from '../components/ConditionCard';
import AppointmentForm from '../components/AppointmentForm';
import LucideIcon from '../components/LucideIcon';
import SEO from '../components/SEO';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';
import { CONDITIONS_DATA } from '../data/conditions';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/services';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.categorySlug === activeCategory);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Sahasraditya Physiotherapy & In Patient Rehabilitation Centre"
        description="Sports and Neuro rehabilitation specialist in Rajamahendravaram. 8 years clinical hospital experience led by Dr. D. V. Balaji N (MS Sports Medicine, MBA Hospital Administration). Certified in PNF, NDT & advanced manual modalities."
        keywords={[
          "Sports and Neuro rehabilitation specialist",
          "Physiotherapy hospital Rajahmundry",
          "Dr D V Balaji N",
          "8 years experience physiotherapist",
          "PNF NDT Rehabilitation Rajahmundry",
          "MBA Hospital Administration Physiotherapist",
          "Orthopaedic Physiotherapy Rajahmundry",
          "In Patient Rehabilitation Centre Rajamahendravaram",
          "Sports Injury Rehabilitation",
          "Neurological Rehabilitation",
          "Dry Needling Rajamahendravaram",
          "Cupping Therapy"
        ]}
        canonicalUrl="https://sahasradityaphysio.in/"
      />

      {/* =========================================================================
          SECTION 2: HERO
      ========================================================================= */}
      {/* =========================================================================
          SECTION 2: HERO - TEXT DIRECTLY ON FULL-WIDTH BACKGROUND (ZERO COLOR OVERLAYS)
      ========================================================================= */}
      <section
        id="hero"
        className="hero-section"
        style={{
          width: '100%',
          backgroundImage: "url('/images/herosection-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          minHeight: 'clamp(580px, 82vh, 780px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          borderBottom: '1px solid var(--subtle-borders)',
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)'
        }}
      >
        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              maxWidth: 'min(100%, 620px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Eyebrow Pill */}
            <div style={{ marginBottom: '0.75rem' }}>
              <span
                className="eyebrow"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(6px)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(19, 138, 138, 0.25)',
                  margin: 0
                }}
              >
                <Sparkles size={14} aria-hidden="true" />
                PHYSIOTHERAPY &amp; IN-PATIENT REHABILITATION • RAJAMAHENDRAVARAM
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: 'var(--primary-navy)',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)'
              }}
            >
              Move Better. <br />
              Recover Stronger. <br />
              <span style={{ color: 'var(--teal)' }}>Live with Confidence.</span>
            </h1>

            {/* Lead Value Proposition */}
            <p
              className="lead"
              style={{
                color: 'var(--charcoal-text)',
                marginBottom: '2rem',
                maxWidth: '560px',
                fontWeight: 500,
                lineHeight: 1.65
              }}
            >
              Individualized physiotherapy, biomechanical movement assessment, and structured rehabilitation in Rajamahendravaram. Dedicated to restoring active function and lasting patient independence.
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}
            >
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <Calendar size={18} aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={scrollToServices}
                className="btn btn-secondary btn-lg"
                style={{
                  gap: '0.5rem',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span>Explore 16 Services</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <a
                href={getWhatsAppUrl("Hello Dr. Balaji, I would like to consult regarding physiotherapy rehabilitation at Sahasraditya in Rajamahendravaram.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>WhatsApp Doctor</span>
              </a>
            </div>

            {/* Verifiable Trust Indicators */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(23, 50, 77, 0.15)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  color: 'var(--primary-navy)',
                  fontWeight: 650,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(23, 50, 77, 0.1)'
                }}
              >
                <ShieldCheck size={17} style={{ color: 'var(--teal)' }} />
                <span>Assessment-Led Protocols</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  color: 'var(--primary-navy)',
                  fontWeight: 650,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(23, 50, 77, 0.1)'
                }}
              >
                <GraduationCap size={17} style={{ color: 'var(--teal)' }} />
                <span>Sports Medicine Postgraduate</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  color: 'var(--primary-navy)',
                  fontWeight: 650,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(23, 50, 77, 0.1)'
                }}
              >
                <CheckCircle2 size={17} style={{ color: 'var(--teal)' }} />
                <span>Personalized One-on-One Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRUST AND EXPERTISE STRIP
      ========================================================================= */}
      {/* =========================================================================
          SECTION 3: TRUST AND EXPERTISE STRIP (LOGO COLOR SPECTRUM)
      ========================================================================= */}
      <section
        style={{
          backgroundColor: 'var(--warm-white)',
          paddingTop: '2.25rem',
          paddingBottom: '2.25rem',
          borderBottom: '1px solid var(--subtle-borders)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {[
              {
                title: "Personalized Rehabilitation",
                description: "Treatment plans tailored to your specific functional goals, movement limitations, and daily activities.",
                icon: Sun,
                bg: 'var(--logo-gold-light)',
                color: '#D97706',
                border: 'rgba(245, 158, 11, 0.3)'
              },
              {
                title: "Movement-Focused Treatment",
                description: "Restoring active mobility and strengthening musculoskeletal mechanics for lasting physical independence.",
                icon: Flame,
                bg: 'var(--logo-orange-light)',
                color: 'var(--logo-orange)',
                border: 'rgba(255, 94, 20, 0.3)'
              },
              {
                title: "Assessment-Led Care",
                description: "Systematic physical evaluation before initiating any manual intervention or exercise protocol.",
                icon: ShieldCheck,
                bg: 'var(--logo-cyan-light)',
                color: 'var(--logo-cyan)',
                border: 'rgba(0, 163, 215, 0.3)'
              },
              {
                title: "Patient Education",
                description: "Clear guidance on posture, ergonomic self-care, and home exercise progressions to prevent recurrence.",
                icon: GraduationCap,
                bg: 'var(--teal-light)',
                color: 'var(--teal)',
                border: 'rgba(19, 138, 138, 0.3)'
              }
            ].map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: pillar.bg,
                      border: `1px solid ${pillar.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      flexShrink: 0,
                      marginTop: '2px',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <PillarIcon size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '0.975rem',
                        color: 'var(--primary-navy)',
                        marginBottom: '0.25rem',
                        fontWeight: 750
                      }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.825rem',
                        color: 'var(--muted-secondary-text)',
                        lineHeight: 1.5,
                        margin: 0
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ABOUT THE CLINIC
      ========================================================================= */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="eyebrow eyebrow-aditya">
                <Sparkles size={14} /> ABOUT OUR CLINIC
              </span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                Care That Helps You Move Forward.
              </h2>
              <p className="lead" style={{ marginBottom: '1rem' }}>
                At Sahasraditya Physiotherapy &amp; In Patient Rehabilitation Centre in Rajamahendravaram, we believe that restoring movement is the foundational step toward restoring quality of life.
              </p>
              <p style={{ color: 'var(--muted-secondary-text)', marginBottom: '1rem' }}>
                Rather than offering temporary, passive treatments alone, our approach focuses on systematic functional movement assessments, evidence-based manual therapy, and progressive active exercise. Every treatment plan is uniquely crafted around your daily demands—whether returning to sports, recovering from major orthopaedic surgery, or regaining balance and independence.
              </p>
              <p style={{ color: 'var(--muted-secondary-text)', marginBottom: '1.75rem' }}>
                With dedicated facilities for outpatient consultations and structured in-patient rehabilitation, our centre provides a supportive, reassuring environment for comprehensive recovery.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={scrollToServices} className="btn btn-aditya">
                  <span>Explore Our Rehabilitation Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--warm-white)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                border: '1px solid var(--subtle-borders)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top spectrum decorative bar */}
              <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px' }} />

              <h3
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--primary-navy)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--logo-cyan-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--logo-cyan)'
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <span>Our Clinical Approach</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  style={{
                    borderLeft: '4px solid var(--logo-cyan)',
                    paddingLeft: '1rem',
                    backgroundColor: '#F8FAFC',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--primary-navy)' }}>
                    Root Cause Investigation
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                    We analyze full-body biomechanics and posture instead of treating isolated symptom sites in isolation.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: '4px solid var(--logo-orange)',
                    paddingLeft: '1rem',
                    backgroundColor: '#FFFBF9',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--primary-navy)' }}>
                    In-Patient &amp; Outpatient Support
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                    Supervised recovery pathways for patients needing intensive daily motor retraining or post-surgical care.
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: '4px solid var(--logo-gold)',
                    paddingLeft: '1rem',
                    backgroundColor: '#FEFDF8',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--primary-navy)' }}>
                    Active Self-Care Transition
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                    Equipping patients with home exercises, posture correction, and body awareness to prevent recurrent injury.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEET THE PHYSIOTHERAPIST - UNIQUE COLORFUL SHOWCASE
      ========================================================================= */}
      <section
        id="doctor"
        className="section"
        style={{
          backgroundColor: '#FBFDFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Brand Aura Gradients in Background */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(255, 94, 20, 0.03) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 163, 215, 0.08) 0%, rgba(11, 37, 69, 0.03) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeading
            eyebrow="SURYA ADITYA CLINICAL LEADERSHIP"
            title="Sports &amp; Neuro Rehabilitation Specialist"
            description="Meet Dr. D. V. Balaji N — Sports and Neuro Rehabilitation Specialist with 8 years of clinical hospital experience in Rajahmundry, combining advanced Master's training from JNTUK, an MBA in Hospital Administration, and certified neuro-motor modalities."
          />

          {/* Masterpiece Doctor Card with Responsive Desktop Layout */}
          <div className="doctor-master-card">
            {/* Top Brand Spectrum Line */}
            <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px' }} />

            {/* Left Column: Doctor Portrait, Metric Badges & OPD Care Card */}
            <div className="doctor-visual-col">
              {/* Doctor Image Container with Proportional 1:1 Frame */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 12px 30px -8px rgba(11, 37, 69, 0.2)',
                  border: '3px solid #FFFFFF'
                }}
              >
                <img
                  src={CLINIC_INFO.doctor.image || "/images/doctor.jpg"}
                  alt="Dr. D. V. Balaji N - Sports and Neuro Rehabilitation Specialist at Sahasraditya Physiotherapy"
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    maxHeight: '380px',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block'
                  }}
                  loading="lazy"
                />

                {/* Floating Top-Right Qualification Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.4)'
                  }}
                >
                  <Sun size={15} style={{ color: '#D97706' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 750, color: '#B45309' }}>
                    MS Sports Medicine &bull; MBA
                  </span>
                </div>

                {/* Floating Bottom Doctor Identity Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    left: '0.85rem',
                    right: '0.85rem',
                    backgroundColor: 'rgba(11, 37, 69, 0.94)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    color: '#FFFFFF'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', margin: 0, color: '#FFFFFF', fontWeight: 800 }}>
                        Dr. D. V. Balaji N
                      </h4>
                      <p style={{ fontSize: '0.725rem', margin: '0.15rem 0 0', color: 'var(--logo-gold-glow)', fontWeight: 600 }}>
                        Sports &amp; Neuro Rehabilitation Specialist
                      </p>
                    </div>
                    <span
                      style={{
                        backgroundColor: '#10B981',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* 3-Part Metric Counters Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.65rem'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.75rem 0.4rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid rgba(0, 163, 215, 0.35)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--logo-cyan)', lineHeight: 1 }}>
                    8 Years
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-text)', fontWeight: 650, marginTop: '0.25rem' }}>
                    Hospital Experience
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.75rem 0.4rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid rgba(255, 94, 20, 0.35)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--logo-orange)', lineHeight: 1 }}>
                    JNTUK
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-text)', fontWeight: 650, marginTop: '0.25rem' }}>
                    Sports Medicine MS
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.75rem 0.4rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid rgba(245, 158, 11, 0.35)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 850, color: '#D97706', lineHeight: 1 }}>
                    MBA
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--charcoal-text)', fontWeight: 650, marginTop: '0.25rem' }}>
                    Hospital Admin
                  </div>
                </div>
              </div>

              {/* Consultation Timings & Practice Focus Card (Seamlessly Eliminates Empty Space) */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.15rem',
                  border: '1px solid rgba(11, 37, 69, 0.12)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--logo-cyan-light)',
                      color: 'var(--logo-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={16} />
                  </div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>
                    OPD Consultation &amp; In-Patient Care
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--charcoal-text)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--muted-secondary-text)', fontWeight: 600 }}>Consultation Hours:</span>
                    <span style={{ fontWeight: 750, color: 'var(--primary-navy)' }}>Mon – Sat: 9 AM – 8:30 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--muted-secondary-text)', fontWeight: 600 }}>Sundays:</span>
                    <span style={{ fontWeight: 700, color: '#D97706' }}>By Prior Appointment</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted-secondary-text)', fontWeight: 600 }}>In-Patient Rehab:</span>
                    <span style={{ fontWeight: 750, color: '#16A34A' }}>Supervised Daily Care</span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '0.75rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px dashed rgba(11, 37, 69, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.75rem',
                    color: 'var(--muted-secondary-text)'
                  }}
                >
                  <ShieldCheck size={14} style={{ color: 'var(--logo-cyan)', flexShrink: 0 }} />
                  <span>Dedicated 1-on-1 assessment sessions with zero rushed appointments.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Credentials, Degrees, Hospital Background & Modalities */}
            <div className="doctor-content-col">
              {/* Doctor Header & Bio */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.775rem',
                    fontWeight: 750,
                    textTransform: 'uppercase',
                    color: 'var(--logo-orange)',
                    letterSpacing: '0.07em',
                    backgroundColor: 'var(--logo-orange-light)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 94, 20, 0.25)',
                    marginBottom: '0.45rem'
                  }}
                >
                  <Flame size={14} /> SPORTS &amp; NEURO REHABILITATION SPECIALIST
                </span>

                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    color: 'var(--logo-navy)',
                    marginTop: '0.2rem',
                    marginBottom: '0.5rem',
                    fontWeight: 800
                  }}
                >
                  Dr. D. V. Balaji N
                </h3>

                <p style={{ color: 'var(--charcoal-text)', fontSize: '0.925rem', lineHeight: 1.6, margin: 0 }}>
                  {CLINIC_INFO.doctor.bio}
                </p>
              </div>

              {/* Degrees & Hospital Experience Balanced Sub-Grid on Desktop */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.25rem'
                }}
              >
                {/* Left Sub-Column: Verified Degrees */}
                <div>
                  <h4
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--primary-navy)',
                      marginBottom: '0.55rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 750
                    }}
                  >
                    <GraduationCap size={18} style={{ color: '#D97706' }} />
                    <span>Medical &amp; Sports Degrees</span>
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {/* JNTUK Sports Medicine Degree Card (Gold & Amber Theme) */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                        border: '1.5px solid rgba(245, 158, 11, 0.4)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 0.95rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#FDE68A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#B45309',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Award size={16} />
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: '#92400E', display: 'block', lineHeight: 1.3 }}>
                          MS Sports &amp; Health Sciences (Sports Medicine)
                        </strong>
                        <span style={{ fontSize: '0.75rem', color: '#B45309' }}>
                          JNTU Kakinada (JNTUK)
                        </span>
                      </div>
                    </div>

                    {/* MBA Hospital Administration Card (Navy & Indigo Theme) */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%)',
                        border: '1.5px solid rgba(11, 37, 69, 0.25)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 0.95rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary-navy)',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Building2 size={16} />
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--primary-navy)', display: 'block', lineHeight: 1.3 }}>
                          MBA in Hospital Administration
                        </strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>
                          Hospital Management &amp; Clinical Operations
                        </span>
                      </div>
                    </div>

                    {/* NTR University BPT Degree Card (Cyan & Cerulean Theme) */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                        border: '1.5px solid rgba(0, 163, 215, 0.4)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 0.95rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#BAE6FD',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0284C7',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: '#075985', display: 'block', lineHeight: 1.3 }}>
                          Bachelor of Physical Therapy (BPT)
                        </strong>
                        <span style={{ fontSize: '0.75rem', color: '#0284C7' }}>
                          VIMS, Dr. NTR University of Health Sciences
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sub-Column: Hospital Experience */}
                <div>
                  <h4
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--primary-navy)',
                      marginBottom: '0.55rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 750
                    }}
                  >
                    <Building2 size={18} style={{ color: 'var(--logo-cyan)' }} />
                    <span>8 Years Hospital Practice</span>
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {/* Featured Hospital Practice: Rajahmundry */}
                    <div
                      style={{
                        fontSize: '0.825rem',
                        backgroundColor: '#F0FDF4',
                        border: '1.5px solid #22C55E',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        color: '#15803D',
                        fontWeight: 750,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.45rem',
                        boxShadow: '0 2px 6px rgba(34, 197, 94, 0.15)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span>🏥</span>
                        <span>KIMS (Bollineni Hospital), Rajahmundry</span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          backgroundColor: '#22C55E',
                          color: '#FFFFFF',
                          padding: '0.15rem 0.45rem',
                          borderRadius: 'var(--radius-full)',
                          fontWeight: 700,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Rajahmundry
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.8rem',
                        backgroundColor: 'var(--logo-cyan-light)',
                        border: '1px solid rgba(0, 163, 215, 0.3)',
                        padding: '0.55rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        color: '#0369A1',
                        fontWeight: 650,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span>🏥</span>
                      <span>Sarojini Physiotherapy Clinic, Kakinada</span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.8rem',
                        backgroundColor: 'rgba(11, 37, 69, 0.06)',
                        border: '1px solid rgba(11, 37, 69, 0.15)',
                        padding: '0.55rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--logo-navy)',
                        fontWeight: 650,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span>🏥</span>
                      <span>Life Hospital, Anakapalli</span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.725rem',
                        color: 'var(--muted-secondary-text)',
                        padding: '0.35rem 0.5rem',
                        backgroundColor: '#F8FAFC',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px dashed #CBD5E1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <ShieldCheck size={13} style={{ color: '#16A34A', flexShrink: 0 }} />
                      <span>8 Years of Supervised Clinical Hospital &amp; Neuro Care</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certified Techniques Color-Coded by Domain with Prominently Highlighted PNF & NDT */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary-navy)',
                    marginBottom: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontWeight: 750
                  }}
                >
                  <Award size={18} style={{ color: 'var(--logo-orange)' }} />
                  <span>Certified Manual &amp; Specialized Modalities</span>
                </h4>

                {/* Highlighted Core Specialties: PNF & NDT Banner */}
                <div
                  style={{
                    marginBottom: '0.75rem',
                    padding: '0.65rem 0.85rem',
                    background: 'linear-gradient(135deg, rgba(255, 251, 235, 0.95) 0%, rgba(254, 243, 199, 0.85) 100%)',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid rgba(245, 158, 11, 0.5)',
                    boxShadow: '0 2px 8px rgba(245, 158, 11, 0.12)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      color: '#B45309',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.45rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Sparkles size={13} style={{ color: '#D97706' }} />
                    <span>Specialized Core Specialties (Highlighted):</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.825rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: '#FFFFFF',
                        color: '#92400E',
                        border: '2px solid #F59E0B',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 2px 6px rgba(245, 158, 11, 0.2)'
                      }}
                    >
                      ⭐ PNF (Proprioceptive Neuromuscular Facilitation)
                    </span>
                    <span
                      style={{
                        fontSize: '0.825rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: '#FFFFFF',
                        color: '#1E40AF',
                        border: '2px solid #3B82F6',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 2px 6px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      ⭐ NDT (Neurodevelopmental Therapy / Bobath Approach)
                    </span>
                  </div>
                </div>

                {/* Additional Certified Modalities */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {/* Sports & Kinetic - Orange */}
                  <span className="badge-aditya" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    🎯 Neuro Myoskeletal Dry Needling
                  </span>
                  <span className="badge-aditya" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    🩹 Therapeutic &amp; Kinesiology Taping
                  </span>
                  <span className="badge-aditya" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    🔥 Cupping Therapy
                  </span>

                  {/* Spinal & Biomechanics - Cyan */}
                  <span className="badge-cyan" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    🦴 Joint Mobilisation (Maitland / Mulligan)
                  </span>
                  <span className="badge-cyan" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    📐 Biomechanical Assessment
                  </span>

                  {/* Fascial Release - Teal */}
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--teal-light)', color: 'var(--teal-dark)', border: '1px solid rgba(19, 138, 138, 0.25)', fontWeight: 650 }}>
                    💆 Myofascial Release (MFR)
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--teal-light)', color: 'var(--teal-dark)', border: '1px solid rgba(19, 138, 138, 0.25)', fontWeight: 650 }}>
                    ⚡ Muscle Energy Technique (MET)
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--teal-light)', color: 'var(--teal-dark)', border: '1px solid rgba(19, 138, 138, 0.25)', fontWeight: 650 }}>
                    ✨ Positional Release (PRT)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                <button onClick={scrollToContact} className="btn btn-aditya btn-lg" style={{ gap: '0.5rem' }}>
                  <Calendar size={18} />
                  <span>Consult with Dr. Balaji</span>
                </button>

                <a
                  href={getWhatsAppUrl("Hello Dr. Balaji, I would like to consult regarding physiotherapy treatment at Sahasraditya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{
                    gap: '0.5rem',
                    borderColor: '#25D366',
                    color: '#15803D',
                    backgroundColor: '#F0FDF4'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Doctor</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                  className="btn btn-navy btn-lg"
                  style={{ gap: '0.5rem' }}
                >
                  <Phone size={18} />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONDITIONS WE HELP ADDRESS
      ========================================================================= */}
      <section id="conditions" className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="PATIENT CARE CATEGORIES"
            title="Conditions We Help Address"
            description="Explore common musculoskeletal, neurological, and sports conditions treated through our personalized rehabilitation protocols."
          />

          <div className="grid-4">
            {CONDITIONS_DATA.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)' }}>
              Experiencing a specific movement concern not listed above?{' '}
              <button
                onClick={scrollToContact}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--teal)',
                  fontWeight: 650,
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                Speak with Dr. Balaji to arrange a physical assessment.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PHYSIOTHERAPY SERVICES
      ========================================================================= */}
      <section id="services" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="COMPREHENSIVE CLINICAL CATALOGUE"
            title="Physiotherapy and Rehabilitation Services"
            description="Our full spectrum of orthopaedic, sports, neurological, manual therapy, and specialized rehabilitation offerings in Rajamahendravaram."
          />

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2.5rem'
            }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`btn btn-sm ${activeCategory === 'all' ? 'btn-aditya' : 'btn-secondary'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.15rem',
                fontWeight: 700,
                boxShadow: activeCategory === 'all' ? '0 4px 12px rgba(255, 94, 20, 0.25)' : 'none'
              }}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`btn btn-sm ${isActive ? 'btn-aditya' : 'btn-secondary'}`}
                  style={{
                    borderRadius: 'var(--radius-full)',
                    padding: '0.5rem 1.15rem',
                    fontWeight: 700,
                    boxShadow: isActive ? '0 4px 12px rgba(255, 94, 20, 0.25)' : 'none'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TREATMENT JOURNEY (LOGO SPECTRUM PROGRESSION)
      ========================================================================= */}
      <section id="journey" className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="STRUCTURED RECOVERY"
            title="Your Recovery Journey, Step by Step"
            description="A systematic, patient-centred path from initial movement evaluation to sustained physical independence."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
              position: 'relative'
            }}
          >
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                desc: 'Thorough evaluation of your medical history, current symptoms, movement kinematics, posture, and personal recovery goals.',
                color: 'var(--logo-cyan)',
                bg: 'var(--logo-cyan-light)',
                numColor: '#0284C7'
              },
              {
                step: '02',
                title: 'Personalized Treatment Plan',
                desc: 'Formulation of an evidence-informed therapy plan matching specific manual techniques and exercise progressions to your body.',
                color: 'var(--teal)',
                bg: 'var(--teal-light)',
                numColor: 'var(--teal)'
              },
              {
                step: '03',
                title: 'Guided Rehabilitation',
                desc: 'One-on-one sessions performing hands-on manual therapy and targeted therapeutic exercises under professional guidance.',
                color: 'var(--logo-orange)',
                bg: 'var(--logo-orange-light)',
                numColor: 'var(--logo-orange)'
              },
              {
                step: '04',
                title: 'Progress Review & Independence',
                desc: 'Regular objective re-assessment of joint mobility and function, transitioning into sustainable home ergonomic self-care.',
                color: 'var(--logo-gold)',
                bg: 'var(--logo-gold-light)',
                numColor: '#B45309'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--warm-white)',
                  position: 'relative',
                  borderTop: `4px solid ${item.color}`,
                  overflow: 'hidden',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: item.bg,
                    color: item.numColor,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 850,
                    marginBottom: '1rem',
                    border: `1px solid ${item.color}33`,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--primary-navy)',
                    marginBottom: '0.65rem',
                    fontWeight: 750
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0, lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: WHY CHOOSE SAHASRADITYA (LOGO SPECTRUM HIGHLIGHTS)
      ========================================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CLINICAL STANDARDS"
            title="Why Choose Sahasraditya"
            description="Our core commitments to clinical rigor, patient dignity, and long-term musculoskeletal wellness."
          />

          <div className="grid-3">
            {[
              {
                title: 'Individualized Treatment Planning',
                desc: 'No cookie-cutter routines. Every protocol is customized based on your unique tissue constraints and daily lifestyle.',
                icon: 'ShieldCheck',
                bg: 'var(--logo-cyan-light)',
                color: 'var(--logo-cyan)',
                border: 'rgba(0, 163, 215, 0.3)'
              },
              {
                title: 'Advanced Professional Training',
                desc: 'Practitioner trained in postgraduate sports sciences from JNTUK and certified in multimodal manual therapy methods.',
                icon: 'Award',
                bg: 'var(--logo-gold-light)',
                color: '#D97706',
                border: 'rgba(245, 158, 11, 0.35)'
              },
              {
                title: 'Patient-Centred Communication',
                desc: 'Clear, compassionate explanations in simple language without medical jargon or rushed appointments.',
                icon: 'HeartHandshake',
                bg: 'var(--logo-orange-light)',
                color: 'var(--logo-orange)',
                border: 'rgba(255, 94, 20, 0.3)'
              },
              {
                title: 'Functional Movement Focus',
                desc: 'Prioritizing real-world functional milestones: walking comfortably, working pain-free, and moving with ease.',
                icon: 'Target',
                bg: 'var(--teal-light)',
                color: 'var(--teal)',
                border: 'rgba(19, 138, 138, 0.3)'
              },
              {
                title: 'Patient Education & Ergonomics',
                desc: 'We empower you with self-care knowledge, posture habits, and home exercise progressions to prevent recurrence.',
                icon: 'GraduationCap',
                bg: 'var(--logo-cyan-light)',
                color: 'var(--logo-cyan)',
                border: 'rgba(0, 163, 215, 0.3)'
              },
              {
                title: 'Appropriate Progress Monitoring',
                desc: 'Ongoing objective re-evaluation of mobility, strength, and pain levels, adapting care when necessary.',
                icon: 'Clock',
                bg: 'var(--logo-gold-light)',
                color: '#D97706',
                border: 'rgba(245, 158, 11, 0.35)'
              }
            ].map((feat, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  backgroundColor: 'var(--warm-white)',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: feat.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: feat.color,
                    flexShrink: 0,
                    border: `1px solid ${feat.border}`
                  }}
                >
                  <LucideIcon name={feat.icon} size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem', color: 'var(--primary-navy)', fontWeight: 750 }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-secondary-text)', margin: 0, lineHeight: 1.55 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TESTIMONIALS AND REVIEWS (Honest Empty State)
      ========================================================================= */}
      <section id="reviews" className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="PATIENT EXPERIENCES"
            title="Experiences That Matter"
            description="Our commitment to authentic, verifiable patient feedback."
          />

          <div
            className="card"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--warm-white)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top spectrum accent */}
            <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px' }} />

            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--logo-gold-light)',
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                border: '1.5px solid rgba(245, 158, 11, 0.35)'
              }}
            >
              <ShieldCheck size={28} />
            </div>

            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
              Genuine Patient Feedback Is Our Priority
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--muted-secondary-text)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              At Sahasraditya, we strictly adhere to ethical healthcare guidelines. We do not publish fabricated ratings or invented patient quotations. As we continue treating patients across Rajamahendravaram, verified patient testimonials and Google reviews will be shared here with patient consent.
            </p>

            <a
              href={CLINIC_INFO.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ gap: '0.45rem' }}
            >
              <MapPin size={16} style={{ color: 'var(--logo-cyan)' }} />
              <span>View Clinic Location &amp; Google Reviews</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: APPOINTMENT CTA (VIBRANT SPECTRUM THEME)
      ========================================================================= */}
      <section
        style={{
          backgroundColor: 'var(--primary-navy)',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(0, 163, 215, 0.22) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(245, 158, 11, 0.18) 0%, transparent 50%)',
          color: 'var(--warm-white)',
          paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top 4px brand spectrum bar */}
        <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px' }} />

        <div className="container">
          <div
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <span className="eyebrow eyebrow-gold" style={{ marginBottom: '1rem' }}>
              <Sun size={14} />
              TAKE THE NEXT STEP IN RECOVERY
            </span>
            <h2
              style={{
                color: 'var(--warm-white)',
                marginBottom: '1rem',
                fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
                fontWeight: 800
              }}
            >
              Ready to Restore Your Movement?
            </h2>
            <p
              style={{
                color: '#cbd5e1',
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Speak with Dr. Balaji to discuss your specific symptoms, movement limitations, and arrange an individualized physical assessment in Rajamahendravaram.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                className="btn btn-aditya btn-lg"
                style={{ gap: '0.5rem' }}
              >
                <Phone size={18} /> Call {CLINIC_INFO.contact.primaryPhone}
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#FFFFFF', gap: '0.5rem' }}
              >
                <MessageCircle size={18} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: CLINIC CONTACT & INTERACTIVE GOOGLE MAPS
      ========================================================================= */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Clinic Location &amp; Appointment Enquiry"
            description="We welcome consultations and queries by phone, WhatsApp, or through our online enquiry form in Rajamahendravaram."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: 'clamp(2rem, 5vw, 3.5rem)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Clinic Contact Details with Logo Palette */}
            <div>
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--warm-white)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top spectrum decorative bar */}
                <div className="spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px' }} />

                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--primary-navy)',
                    marginBottom: '1.25rem',
                    fontWeight: 800
                  }}
                >
                  Sahasraditya Physiotherapy
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Address - Cyan Theme */}
                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--logo-cyan-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--logo-cyan)',
                        flexShrink: 0,
                        border: '1px solid rgba(0, 163, 215, 0.3)'
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--primary-navy)' }}>Clinic Address</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0, lineHeight: 1.5 }}>
                        {CLINIC_INFO.contact.address.full}
                      </p>
                      <a
                        href={CLINIC_INFO.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--logo-cyan)',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          marginTop: '0.4rem'
                        }}
                      >
                        <span>Open in Google Maps App</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Telephone - Gold Theme */}
                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--logo-gold-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D97706',
                        flexShrink: 0,
                        border: '1px solid rgba(245, 158, 11, 0.35)'
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--primary-navy)' }}>Telephone</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                        Primary: <a href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`} style={{ color: 'var(--primary-navy)', fontWeight: 650 }}>{CLINIC_INFO.contact.primaryPhone}</a>
                      </p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                        Secondary: <a href={`tel:${CLINIC_INFO.contact.secondaryPhoneRaw}`} style={{ color: 'var(--primary-navy)', fontWeight: 650 }}>{CLINIC_INFO.contact.secondaryPhone}</a>
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp - Green Theme */}
                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#DCFCE7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#16A34A',
                        flexShrink: 0,
                        border: '1px solid rgba(22, 163, 74, 0.3)'
                      }}
                    >
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--primary-navy)' }}>WhatsApp Care</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                        Connect directly for appointment enquiries and scheduling assistance.
                      </p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.85rem',
                          color: '#16A34A',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          marginTop: '0.4rem'
                        }}
                      >
                        <span>Open WhatsApp Chat &rarr;</span>
                      </a>
                    </div>
                  </div>

                  {/* Email - Navy Theme */}
                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(11, 37, 69, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--logo-navy)',
                        flexShrink: 0,
                        border: '1px solid rgba(11, 37, 69, 0.25)'
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--primary-navy)' }}>Email</h4>
                      <a href={`mailto:${CLINIC_INFO.contact.email}`} style={{ fontSize: '0.9rem', color: 'var(--primary-navy)', fontWeight: 650 }}>
                        {CLINIC_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Enquiry Form */}
            <div>
              <AppointmentForm />
            </div>
          </div>

          {/* =========================================================================
              INTERACTIVE GOOGLE MAPS SHOWCASE
          ========================================================================= */}
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: 'var(--warm-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--subtle-borders)',
              position: 'relative'
            }}
          >
            {/* Top Brand Spectrum Bar */}
            <div className="spectrum-bar" style={{ height: '5px' }} />

            {/* Header Strip above the map */}
            <div
              style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                borderBottom: '1px solid var(--subtle-borders)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.25rem',
                backgroundColor: '#FAFCFE'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <span className="eyebrow eyebrow-cyan" style={{ margin: 0, padding: '0.25rem 0.65rem', fontSize: '0.75rem' }}>
                    <Navigation size={13} />
                    INTERACTIVE GOOGLE MAPS
                  </span>
                  <span className="eyebrow eyebrow-gold" style={{ margin: 0, padding: '0.25rem 0.65rem', fontSize: '0.75rem' }}>
                    <MapPin size={13} />
                    RAJAMAHENDRAVARAM
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', color: 'var(--primary-navy)', margin: '0 0 0.35rem 0', fontWeight: 800 }}>
                  Find Sahasraditya Physiotherapy &amp; In Patient Rehabilitation Centre
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-secondary-text)', margin: 0 }}>
                  Ground Floor, Suvishesapuram, Opposite Central Jail Road, Bhaskar Nagar, Rajamahendravaram, AP 533106
                </p>
              </div>

              {/* Quick Navigation Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={CLINIC_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aditya"
                  style={{ gap: '0.5rem' }}
                >
                  <Navigation size={17} />
                  <span>Get Turn-by-Turn GPS Directions</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                  className="btn btn-navy"
                  style={{ gap: '0.5rem' }}
                >
                  <Phone size={16} />
                  <span>Call for Route Assistance</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(380px, 48vh, 500px)',
                backgroundColor: '#E2E8F0'
              }}
            >
              <iframe
                title="Sahasraditya Physiotherapy Location Map"
                src="https://maps.google.com/maps?q=Suvishesapuram,+opposite+Central+Jail+Road,+Bhaskar+Nagar,+Rajamahendravaram,+Andhra+Pradesh+533106&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Landmark & Accessibility Badges Strip below Map */}
            <div
              style={{
                padding: '1.25rem clamp(1.25rem, 3vw, 2rem)',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid var(--subtle-borders)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--logo-cyan-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--logo-cyan)', flexShrink: 0, border: '1px solid rgba(0, 163, 215, 0.3)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--primary-navy)' }}>Prominent Landmark</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>Opposite Central Jail Road, Bhaskar Nagar</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--logo-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B45309', flexShrink: 0, border: '1px solid rgba(245, 158, 11, 0.35)' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--primary-navy)' }}>Ground Floor Facility</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>Wheelchair &amp; stretcher accessible entrance</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--logo-orange-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--logo-orange)', flexShrink: 0, border: '1px solid rgba(255, 94, 20, 0.3)' }}>
                  <Building2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--primary-navy)' }}>Dedicated Parking</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>Hassle-free patient parking in front</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', flexShrink: 0, border: '1px solid rgba(19, 138, 138, 0.3)' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--primary-navy)' }}>Consultation Hours</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-secondary-text)' }}>Mon–Sat: 9 AM–8:30 PM • Sun: By Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
