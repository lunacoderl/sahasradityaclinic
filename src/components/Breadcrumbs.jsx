import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  // items: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: 'Dry Needling' }]
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        padding: '0.85rem 0',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--subtle-borders)'
      }}
    >
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          gap: '0.4rem',
          fontSize: '0.875rem'
        }}
      >
        <li style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              color: 'var(--muted-secondary-text)',
              fontWeight: 500
            }}
          >
            <Home size={15} aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <ChevronRight
                size={14}
                style={{ color: 'var(--muted-secondary-text)' }}
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  style={{
                    color: 'var(--primary-navy)',
                    fontWeight: 650
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  style={{
                    color: 'var(--muted-secondary-text)',
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
