import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

function Hero() {
  return (
    <main className={lato.className}>
      <div className="row my-5">
        <div className="col-12 d-sm-block d-md-none d-lg-none text-center">
          <Image
            alt="Pranita Dewi"
            width={350}
            height={350}
            src="/pranitadewi.webp"
            className="img-fluid mb-5 shadow thm_profilepic"
          />
        </div>        
        <div className="col-12 col-md-8 pran_hero">
          <h1 className="mb-3 pran_heading">
            Penulis Puisi, Prosais dan Cerpenis asal Bali, Indonesia
          </h1>
          <p>Pranita Dewi, lahir di Denpasar pada 19 Juni 1987, adalah seorang penulis puisi, prosa liris, dan cerita pendek. Karyanya telah diterbitkan di berbagai media seperti <strong>Kompas</strong>, <strong>Koran Tempo</strong>, <strong>Media Indonesia</strong>, <strong>Bali Post</strong>, <strong>Majalah Sastra Horison</strong>, <strong>Jurnal BlockNot Poetry</strong>, <strong>Jurnal Sundih</strong>, dan <strong>Jurnal Sajak</strong>.</p>
          <p>Pranita telah menerbitkan dua buku:</p>
          <ul>
            <li><strong>Pelacur Para Dewa</strong> (Penerbit Komunitas Bambu, 2006)</li>
            <li><strong>Nyawa Tinggallah Sejenak Lebih Lama</strong> (Penerbit JBS, 2024)</li>
          </ul>
          <p>Saat ini menggeluti dunia literasi dan industri kreatif. Kini tinggal dan bekerja di Bali, Indonesia.</p>

          <div className="mt-4 d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-2 text-center">
              <Link
                href="/about"
                className="btn btn-dark btn-lg px-4 me-2 thm_cta"
              >
                <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;Lihat Profil Lengkap
              </Link>
            </div>
          </div>
          <div className="mt-4 mb-3 pb-5 d-none d-md-block">
            <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;Lihat Profil Lengkap
            </Link>
          </div>          
        </div>
        <div className="col d-none d-md-block">
          <Image
            alt="Pranita Dewi"
            width={500}
            height={500}
            src="/pranitadewi.webp"
            className="img-fluid mb-5 shadow thm_profilepic"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
