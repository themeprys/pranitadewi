import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';

// Lazy load icons
const HomeIcon = dynamic(() => import('./icons/HomeIcon'), { ssr: false });
const PersonIcon = dynamic(() => import('./icons/PersonIcon'), { ssr: false });
const SearchIcon = dynamic(() => import('./icons/SearchIcon'), { ssr: false });

function Bottomnav() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none shadow-sm">
      <ul className="navbar-nav nav-justified w-100">
        <li className="nav-item">
          <Link href="/" className="nav-link text-center">
            <HomeIcon />
            <span className="small">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link text-center">
            <PersonIcon />
            <span className="small">About</span>
          </Link>
        </li>               
        <li className="nav-item">
          <Link href="/blog" className="nav-link text-center">
            <PersonIcon />
            <span className="small">Blog</span>
          </Link>
        </li>        
        <li className="nav-item">
          <Link href="/search" className="nav-link text-center">
            <SearchIcon />
            <span className="small">Search</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Bottomnav;
