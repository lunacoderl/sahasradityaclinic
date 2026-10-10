import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import LucideIcon from './LucideIcon';

// Color themes inspired by the Sahasraditya logo spectrum
const CONDITION_PALETTES = [
  { border: 'var(--logo-cyan)', bg: 'var(--logo-cyan-light)', color: '#0284C7' },
  { border: 'var(--logo-gold)', bg: 'var(--logo-gold-light)', color: '#B45309' },
  { border: 'var(--logo-orange)', bg: 'var(--logo-orange-light)', color: 'var(--logo-orange)' },
  { border: 'var(--teal)', bg: 'var(--teal-light)', color: 'var(--teal)' },
];

export default function ConditionCard({ condition, index = 0 }) {
  if (!condition) return null;

  // Pick color based on id hash or provided index
  const paletteIndex = Math.abs(condition.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % CONDITION_PALETTES.length;
  const theme = CONDITION_PALETTES[paletteIndex];

  return (
    <div
      className="card condition-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'var(--warm-white)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--subtle-borders)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
      }}
    >
      {/* Top 3.5px decorative accent strip */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3.5px',
          backgroundColor: theme.border
        }}
      />

      <div style={{ paddingTop: '0.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: theme.bg,
            color: theme.color,
            marginBottom: '1rem',
            border: `1px solid ${theme.border}33`
          }}
        >
          <LucideIcon name={condition.icon} size={22} aria-hidden="true" />
        </div>

        <h3
          style={{
            fontSize: '1.15rem',
            marginBottom: '0.5rem',
            color: 'var(--primary-navy)',
            fontWeight: 750
          }}
        >
          {condition.title}
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--muted-secondary-text)',
            lineHeight: 1.55,
            marginBottom: '1.25rem'
          }}
        >
          {condition.description}
        </p>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
        <Link
          to={`/services/${condition.primaryServiceSlug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: theme.color,
            textDecoration: 'none'
          }}
        >
          <span>See {condition.serviceName}</span>
          <ChevronRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
