import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LucideIcon from './LucideIcon';

// Helper to assign vibrant logo palette colors based on service category
const getCategoryColorTheme = (category = '') => {
  const cat = category.toLowerCase();
  if (cat.includes('sports')) {
    return {
      badgeBg: 'var(--logo-orange)',
      badgeColor: '#FFFFFF',
      iconBg: 'var(--logo-orange-light)',
      iconColor: 'var(--logo-orange)',
      accentColor: 'var(--logo-orange)',
      borderColor: 'rgba(255, 94, 20, 0.35)'
    };
  }
  if (cat.includes('neuro') || cat.includes('stroke') || cat.includes('paralysis')) {
    return {
      badgeBg: 'var(--logo-navy)',
      badgeColor: '#FFFFFF',
      iconBg: 'rgba(11, 37, 69, 0.08)',
      iconColor: 'var(--logo-navy)',
      accentColor: 'var(--logo-navy)',
      borderColor: 'rgba(11, 37, 69, 0.35)'
    };
  }
  if (cat.includes('manual') || cat.includes('technique') || cat.includes('needling')) {
    return {
      badgeBg: '#D97706',
      badgeColor: '#FFFFFF',
      iconBg: 'var(--logo-gold-light)',
      iconColor: '#B45309',
      accentColor: '#D97706',
      borderColor: 'rgba(245, 158, 11, 0.4)'
    };
  }
  if (cat.includes('in-patient') || cat.includes('rehab')) {
    return {
      badgeBg: 'var(--teal-dark)',
      badgeColor: '#FFFFFF',
      iconBg: 'var(--teal-light)',
      iconColor: 'var(--teal)',
      accentColor: 'var(--teal)',
      borderColor: 'rgba(19, 138, 138, 0.35)'
    };
  }
  // Default to Electric Cyan (Spine, Orthopaedic, General)
  return {
    badgeBg: 'var(--logo-cyan)',
    badgeColor: '#FFFFFF',
    iconBg: 'var(--logo-cyan-light)',
    iconColor: '#0284C7',
    accentColor: 'var(--logo-cyan)',
    borderColor: 'rgba(0, 163, 215, 0.35)'
  };
};

export default function ServiceCard({ service }) {
  if (!service) return null;

  const theme = getCategoryColorTheme(service.category);

  return (
    <div
      className="card service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 0,
        overflow: 'hidden',
        backgroundColor: 'var(--warm-white)',
        border: '1px solid var(--subtle-borders)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      {/* Top 3px category accent strip */}
      <div style={{ height: '3.5px', backgroundColor: theme.accentColor, width: '100%' }} />

      <div>
        {/* Real Service Image with Hover Zoom Container */}
        {service.image && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '190px',
              overflow: 'hidden',
              backgroundColor: 'var(--soft-ivory)'
            }}
          >
            <img
              src={service.image}
              alt={service.imageAlt || service.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              className="service-card-img"
              loading="lazy"
            />

            {/* Colorful Category Tag Badge on Image */}
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                backgroundColor: theme.badgeBg,
                color: theme.badgeColor,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
                padding: '0.28rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 750,
                letterSpacing: '0.03em',
                textTransform: 'uppercase'
              }}
            >
              {service.category.split('&')[0].trim()}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div style={{ padding: '1.35rem 1.35rem 1rem 1.35rem' }}>
          {/* Service Icon & Title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.65rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: theme.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.iconColor,
                flexShrink: 0,
                border: `1px solid ${theme.borderColor}`
              }}
            >
              <LucideIcon name={service.icon} size={20} aria-hidden="true" />
            </div>

            <h3
              style={{
                fontSize: '1.2rem',
                color: 'var(--primary-navy)',
                lineHeight: 1.3,
                margin: 0,
                fontWeight: 750
              }}
            >
              {service.name}
            </h3>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--muted-secondary-text)',
              lineHeight: 1.55,
              marginBottom: '1rem'
            }}
          >
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Action Link Footer */}
      <div
        style={{
          padding: '0.85rem 1.35rem 1.15rem 1.35rem',
          borderTop: '1px solid var(--subtle-borders)',
          marginTop: 'auto'
        }}
      >
        <Link
          to={`/services/${service.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: theme.accentColor,
            textDecoration: 'none'
          }}
          className="service-card-link"
        >
          <span>Explore Details</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <style>{`
        .service-card:hover {
          border-color: ${theme.borderColor};
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }
        .service-card:hover .service-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
