'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

function Header() {
  const pathname = usePathname();

  return (
    <header className="border-bottom">
      <div className="row align-items-center">
        <div className="col-md-3">
          <Link
            href="/"
            className="text-body-emphasis text-decoration-none"
            prefetch={true}
          >
            <h1 className="fs-4 mb-0 fw-bold">
              Pranita Dewi</h1>
              <span className="h6 text-body-secondary"> 
                Penulis Puisi | Prosais | Cerpenis
              </span>
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item me-4">
                    <Link 
                      href="/" 
                      className={`nav-link fw-bold fs-5 ${styles.hoverBrown} ${pathname === '/' ? styles.active : ''}`} 
                      prefetch={true}
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link 
                      href="/about" 
                      className={`nav-link fw-bold fs-5 ${styles.hoverBrown} ${pathname === '/about' ? styles.active : ''}`} 
                      prefetch={true}
                    >
                      Tentang
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link 
                      href="/blog" 
                      className={`nav-link fw-bold fs-5 ${styles.hoverBrown} ${pathname === '/blog' ? styles.active : ''}`} 
                      prefetch={true}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      href="https://cdn.cosmicjs.com/c9260e30-0ed6-11f0-91ec-af6adca2ead2-Curriculum-Vitae-Pranita-Dewi-Updated-April-2025.pdf" 
                      className={`nav-link fw-bold fs-5 ${styles.hoverBrown}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Unduh CV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-3 text-md-end">
          <div className="thm_headerlinks">
            {/* <p className="mb-0"><a target="_blank" href="https://linkedin.com/in/pranitadewi">https://linkedin.com/in/pranitadewi</a><br/> */}
            <p>Email: <a href="mailto:duniapranita@gmail.com">duniapranita@gmail.com</a></p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
