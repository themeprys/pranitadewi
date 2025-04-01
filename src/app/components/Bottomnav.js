import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook } from "@fortawesome/free-solid-svg-icons";

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
        </div>
      </div>
    </nav>
  );
}

export default Bottomnav;
