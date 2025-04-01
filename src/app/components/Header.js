import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="pb-3 mb-5 border-bottom">
      <div className="row align-items-center">
        <div className="col-md-4">
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
        <div className="col-md-4 d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link fw-bold fs-5" prefetch={true}>Beranda</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link fw-bold fs-5" prefetch={true}>Tentang</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog" className="nav-link fw-bold fs-5" prefetch={true}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-4 text-md-end">
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
