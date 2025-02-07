import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Hero() {
  return (
    <main>
      <div className="row my-5">
      <div className="col-12 d-sm-block d-md-none d-lg-none text-center">
          <Image
            alt="Pranita Dewi"
            width={150}
            height={150}
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


          {/* <p>Pranita Dewi adalah seorang penulis Indonesia yang menulis puisi, prosa lirik, dan cerpen. Kumpulan puisinya yang berjudul Pelacur Para Dewa diterbitkan oleh Komunitas Bambu pada tahun 2006, dan tajuk lainnya, Nyawa Tinggallah Sejenak Lebih Lama diterbitkan oleh Penerbit JBS pada tahun 2024.</p>
          <p className="pran_desktoponly">Beberapa puisinya pernah dimuat di Kompas, Koran Tempo, Media Indonesia, Bali Post, Majalah Sastra Horison, Jurnal BlockNot Poetry, Jurnal Sundih, Jurnal Sajak, Basa Basi.co, Buruan.co dan berbagai media lainnya.</p>
          <p className="pran_desktoponly">Beberapa puisinya juga diterjemahkan ke dalam Bahasa Prancis, bahasa Inggris, dan bahasa Thailand, dan masuk dalam sejumlah antologi, yakni Antologi Couleur Femme yang diterbitkan sebagai salah satu tema acara sastra Prancis Le Printemps des Poètes, Antologi Puisi Penyair Singapore – Indonesia oleh Majelis Sastra Asia Tenggara, dan Antologi Wanna Malai sastra Thailand – Indonesia oleh Dewan Kesenian Jakarta.</p>                
          <p className="pran_desktoponly">Saat ini menggeluti dunia literasi dan industri kreatif. Kini tinggal dan bekerja di Bali, Indonesia</p> */}
          <div className="mt-4 d-sm-block d-md-none d-lg-none">
          <div className="d-grid gap-2 text-center">
          <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;Lihat Profil Lengkap
            </Link>
            {/* <Link href="/">Read my blog</Link> */}
              {/* <button class="btn btn-primary" type="button">Button</button> */}
            </div>
            {/* <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Download Resume
            </Link><br />
            or <Link href="/blog">Browse my writings</Link> */}
          </div>
          <div className="mt-4 mb-3 pb-5 d-none d-md-block">
            <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;Lihat Profil Lengkap
            </Link>
            {/* or <Link href="/">Read my blog</Link> */}
          </div>          

          {/* <p>
            Strong multidisipliner background and highly skilled in content
            creation, UI/UX design, CMS development, search engine optimization,
            digital campaign, data visualization, etc by developing a wide range
            of technologies across multiple frameworks, software, operating
            systems & programming language.
          </p>
          <p>
            At the moment, I work at Leverate Group as a Web
            Development Director.
          </p> */}
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
      {/* 
      <div className="mt-4 mb-3 pb-5">
        <Link href="/about" className="btn btn-dark btn-lg px-4 me-2 thm_cta">
          <FontAwesomeIcon icon={faFilePdf} /> Download Resume
        </Link>
        or <Link href="/blog">Browse my writings</Link>
      </div> */}
    </main>
  );
}

export default Hero;
