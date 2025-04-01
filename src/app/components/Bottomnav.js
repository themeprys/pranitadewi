import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Bottomnav() {
  return (
    <nav className="navbar fixed-bottom bg-black text-white d-md-none">
      <div className="container">
        <div className="row w-100">
          <div className="col text-center">
            <Link href="/" className="nav-link text-white">
              <FontAwesomeIcon icon={faHome} className="fs-4" />
              <div className="small">Beranda</div>
            </Link>
          </div>
          <div className="col text-center">
            <Link href="/about" className="nav-link text-white">
              <FontAwesomeIcon icon={faUser} className="fs-4" />
              <div className="small">Tentang</div>
            </Link>
          </div>
          <div className="col text-center">
            <Link href="/blog" className="nav-link text-white">
              <FontAwesomeIcon icon={faBook} className="fs-4" />
              <div className="small">Blog</div>
            </Link>
          </div>
          <div className="col text-center">
            <a 
              href="https://cdn.cosmicjs.com/c9260e30-0ed6-11f0-91ec-af6adca2ead2-Curriculum-Vitae-Pranita-Dewi-Updated-April-2025.pdf"
              className="nav-link text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
              <div className="small">CV</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Bottomnav;
