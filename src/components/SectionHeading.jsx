import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        maxWidth: '780px',
        margin: centered ? '0 auto 2.75rem auto' : '0 0 2.25rem 0',
        textAlign: centered ? 'center' : 'left',
        width: '100%'
      }}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${isDark ? 'eyebrow-navy' : ''}`}
          style={{ marginBottom: '0.85rem' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: isDark ? 'var(--warm-white)' : 'var(--primary-navy)',
          marginBottom: description ? '1rem' : 0,
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="lead"
          style={{
            color: isDark ? '#cbd5e1' : 'var(--muted-secondary-text)',
            margin: '0 auto',
            maxWidth: '680px'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
