import React from "react";
import Link from "next/link";
import { Inter, Lato } from 'next/font/google'

const lato = Lato({ subsets: ["latin"], weight: ["700"],display: "swap" });
const inter = Inter({ subsets: ['latin'], weight: ["500"],display: "swap" })

function Header() {
  return (
    <header className="pb-3 mb-5 border-bottom">
      <div className="row">
        <div className="col">
          <Link
            href="/"
            className="text-body-emphasis text-decoration-none"
          >
            <h1 className={`${lato.className} fs-4`}>
              Pranita Dewi</h1>
              <span className={`${inter.className} h6 text-body-secondary`}> 
                Penulis Puisi | Prosais | Cerpenis
              </span>
          </Link>
        </div>
        <div className="col col-md-6 text-md-end thm_headerlinks pt-2 d-none d-md-block">
        <p><a target="_blank" href="https://linkedin.com/in/pranitadewi">https://linkedin.com/in/pranitadewi</a><br/>
        <a href="mailto:duniapranita@gmail.com">duniapranita@gmail.com</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
