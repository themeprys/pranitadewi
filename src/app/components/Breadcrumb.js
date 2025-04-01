'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on home page
  if (pathname === '/') return null;

  // Get path segments and capitalize them
  const segments = pathname.split('/').filter(Boolean);
  
  // Map of path segments to their display names
  const segmentNames = {
    'about': 'Tentang',
    'blog': 'Blog'
  };
  
  return (
    <nav aria-label="breadcrumb" className="mb-0 pt-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/" className="text-decoration-none">Beranda</Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const path = `/${segments.slice(0, index + 1).join('/')}`;
          const label = segmentNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={path} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                label
              ) : (
                <Link href={path} className="text-decoration-none">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb; 