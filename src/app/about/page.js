import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <main>
      <div className="row">
        <div className="col-12 d-sm-block d-md-none d-lg-none">
          <Image
            alt="Pranita Dewi"
            width={500}
            height={500}
            src="/pranitadewi.png"
            className="img-fluid mb-5 shadow thm_profilepic"
          />
        </div>
        <div className="col-12 col-md-8">
          <h1 className="pb-3 mb-3">Tentang Pranita</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          {/* <h1 className="mb-3 pran_heading">
              Penulis Puisi, Prosais dan Cerpenis asal Bali, Indonesia
          </h1> */}

          <p>
            Pranita Dewi, lahir di Denpasar pada 19 Juni 1987, adalah seorang
            penulis puisi, prosa liris, dan cerita pendek. Karyanya telah
            diterbitkan di berbagai media seperti <strong>Kompas</strong>,{" "}
            <strong>Koran Tempo</strong>, <strong>Media Indonesia</strong>,{" "}
            <strong>Bali Post</strong>, <strong>Majalah Sastra Horison</strong>,{" "}
            <strong>Jurnal BlockNot Poetry</strong>,{" "}
            <strong>Jurnal Sundih</strong>, dan <strong>Jurnal Sajak</strong>.
          </p>
          <p>Pranita telah menerbitkan dua buku:</p>
          <ul>
            <li>
              <strong>Pelacur Para Dewa</strong> (Penerbit Komunitas Bambu,
              2006)
            </li>
            <li>
              <strong>Nyawa Tinggallah Sejenak Lebih Lama</strong> (Penerbit
              JBS, 2024)
            </li>
          </ul>
          <p>
            Saat ini menggeluti dunia literasi dan industri kreatif. Kini
            tinggal dan bekerja di Bali, Indonesia.
          </p>
          <hr/>
          <h3 className="mb-3">Penghargaan dan Prestasi</h3>
          <p>
            <strong>2025</strong>
          </p>
          <ul>
            <li>Panelis Diskusi di Samsara Literary Festival, Karangasem, Bali</li>
            <li>Membawakan Monolog di March March March Komunitas Mahima, Singaraja, Bali</li>            
          </ul>
          <p>
            <strong>2024</strong>
          </p>
          <ul>
            <li>Pembicara di Ubud Writers & Readers, Bali</li>
            <li>Pemateri Workshop dan Dewan Juri Unspoken Poetry Slam di Singaraja Literary Festival, Bali</li>
            <li>Pembicara di APWT Asia Pacific Writers and Translator yang diselenggarakan di Chiang Mai, Thailand</li>
            <li>Dewan Juri Penulisan Cerita Pendek Se-Indonesia oleh Kementerian Pendidikan Nasional di Jakarta</li>
            <li>⁠Puisinya yang berbahasa inggris dimuat di Porch Literary Magazine #SoutheastAsianVoices</li>
            <li>⁠Puisinya dimuat di Kompas.id</li>
            <li>⁠Buku Puisinya “Nyawa Tinggallah Sejenak Lebih Lama” menjadi Nomine Buku Sastra Pilihan Tempo 2024</li>
            <li>Cerpennya berjudul “Cerita Kembang Gula“ diterbitkan dalam antologi cerpen “Manusia Manusia“</li>
            </ul>
          <p>
            <strong>2023</strong> Antologi Sepayung (Festival Sepayung)
          </p>
          <p>
            <strong>2021</strong> Antologi Puisi Jazirah 8 (Festival Sastra Internasional Gunung
              Bintan)
          </p>
          <p>
            <strong>2019</strong>
          </p>
          <ul>
            <li>Undangan Seminar Internasional Sastra Indonesia (Bali)</li>
            <li>Antologi Puisi &quot;Bandara dan Laba-laba&quot;</li>
          </ul>
          <p>
            <strong>2018</strong> Antologi Puisi &quot;Saron&quot;
          </p>
          <p>
            <strong>2017</strong> Puisinya dimuat di basabasi.co
          </p>
          <p>
            <strong>2016</strong>
          </p>
          <ul>
            <li>
              Seratus Puisi Terbaik, Antologi &quot;Gelombang Puisi
              Maritim&quot; (Dewan Kesenian Banten)
            </li>
            <li>
              Antologi Puisi &quot;Klungkung: Tanah Tua, Tanah Cinta&quot;
              (Yayasan Museum Nyoman Gunarsa)
            </li>
          </ul>
          <p>
            <strong>2015</strong> Antologi Puisi &quot;Tonggak Tegak Toleransi&quot; (Mitra Praja
              Utama MPU X, Kupang, NTT)
          </p>

          <p>
            <strong>2014</strong> Antologi Puisi Wanna Malai (Thailand)
          </p>
          <p>
            <strong>2012</strong>
          </p>
          <ul>
            <li>Undangan pertemuan Majelis Sastra Asia Tenggara (MASTERA)</li>
            <li>Undangan Pertemuan Penyair Indonesia (Pekanbaru, Riau)</li>
          </ul>
          <p>
            <strong>2008</strong>
          </p>
          <ul>
            <li>
              Undangan pertemuan Mitra Praja Utama MPU III (Lembang, Jawa Barat)
            </li>
            <li>
              Cerpen dalam Antologi Cerita Kerakyatan &quot;Titian&quot;
              (Kokoesan)
            </li>
            <li>Juara II Singa Ambara Reja Award</li>
          </ul>
          <p>
            <strong>2007</strong>
          </p>
          <ul>
            <li>Undangan pertemuan penyair muda 4 kota (Yogyakarta)</li>
            <li>
              Undangan delapan penyair muda baca puisi (Teater Utan Kayu
              Jakarta)
            </li>
          </ul>



          <p>
            <strong>2006</strong> Undangan pertemuan Mitra Praja Utama MPU ke-2 (Sindhu Beach Hotel)
          </p>


          <p>
            <strong>2004</strong>
          </p>
          <ul>
            <li>
              Juara I Lomba Baca Puisi se-Denpasar (Pesta Seni Remaja Kota
              Denpasar)
            </li>
            <li>
              Nominasi &quot;Krakatau Award&quot; Lomba Menulis Puisi Nasional
              (Dewan Kesenian Lampung)
            </li>
            <li>
              Juara I Lomba Deklamasi Puisi se-Bali dan Juara II serta III Lomba
              Cipta Puisi Pelajar se-Bali (Teater Angin SMU 1 Denpasar)
            </li>
            <li>
              Juara I Sayembara Penulisan Puisi se-Bali dan Juara Harapan III
              Sayembara Penulisan Cerpen se-Bali (Balai Bahasa Denpasar)
            </li>
          </ul>

          <p>
            <strong>2003</strong>
          </p>
          <ul>
            <li>
              Juara I Lomba Deklamasi Puisi dan Juara I Lomba Cipta Puisi
              Pelajar se-Bali (Teater Angin SMU 1 Denpasar)
            </li>
            <li>
              Beasiswa &quot;A Weekend Creative Workshop: Sound Poetry from
              Different Faiths&quot; (Pesta Sastra Internasional Utan Kayu)
            </li>
            <li>
              Juara Harapan I Lomba Menulis Cerpen Remaja se-Bali, NTB, NTT
              (Balai Bahasa Denpasar)
            </li>
            <li>
              &quot;Sepuluh Resensi Terbaik&quot; Lomba Menulis Resensi Cerpen
              Remaja se-Bali (Balai Bahasa Denpasar)
            </li>
            <li>
              &quot;Lima Puisi Terbaik&quot; Lomba Cipta Puisi Pelajar se-Bali
              (Komunitas Jurnalis Buleleng), antologi &quot;Jendela&quot;
            </li>
          </ul>
          <hr/>
          <h3 className="mb-3">Publikasi dan Terjemahan</h3>
          <ul>
            <li>
              Puisinya diterjemahkan ke dalam Bahasa Prancis, dimuat dalam
              Antologi &quot;Couleur Femme&quot; (le Printemps des Poetes)
            </li>
            <li>
              Antologi Puisi Penyair Singapore - Indonesia (Majelis Sastra Asia
              Tenggara), diterjemahkan ke Bahasa Inggris
            </li>
            <li>
              Antologi Puisi Wanna Malai (Dewan Kesenian Jakarta), diterjemahkan
              ke Bahasa Thailand dan Inggris
            </li>
          </ul>
          <hr/>
          <h3 className="mb-3">Bahasa</h3>
          <ul>
            <li>Indonesia (Fluent)</li>
            <li>Inggris (Intermediate)</li>
            <li>Prancis (Basic)</li>
          </ul>
          <hr/>
          <h3 className="mb-3">Narahubung:</h3>
          <ul>
            <li aria-level="1">Surel: duniapranita@gmail.com</li>
            <li aria-level="1">Contact Person: +6288812345678</li>
            {/* <li aria-level="1">
              Media Sosial:{" "}
              <a target="_blank" href="https://www.instagram.com/pranitadewi/">
                LinkedIn
              </a>
            </li> */}
          </ul>
          {/* <p>
            <strong>
              <br />
            </strong>
            <strong>TECHNICAL SKILLS</strong>
          </p>
          <ul>
            <li aria-level="1">Operating System: Mac, Linux, Windows&nbsp;</li>
            <li aria-level="1">Web Server: Nginx, Centos, Apache</li>
            <li aria-level="1">
              Cloud: Google Cloud Platform, Amazon Web Services, Digital Ocean
            </li>
            <li aria-level="1">Serverless: Vercel, Netlify</li>
            <li aria-level="1">Database: SQL, MongoDb</li>
            <li aria-level="1">
              Programming: PHP, Vanilla Javascript, NodeJS, ReactJS, VueJs,
              Python, Java, R Language
            </li>
            <li aria-level="1">
              Frameworks: Laravel, Codeigniter, NuxtJs, NextJs,&nbsp;
            </li>
            <li aria-level="1">Traditional CMS: WordPress, Magento, Drupal</li>
            <li aria-level="1">Headless CMS: Strapi, Directus, CrafterCMS</li>
            <li aria-level="1">
              Version Control System: Gitlab, Github, Bitbucket
            </li>
            <li aria-level="1">
              Google/ SEO: GA4, Search Console, Google Tag Manager, Semrush,
              Ahrefs
            </li>
            <li aria-level="1">
              Social Media: Fanpage Karma, Falcon, Buffer, Hootsuite, IFTTT
            </li>
            <li aria-level="1">
              Data Visualization/ Science: Google Data Studio, PowerBI, Tableau,
              R Studio
            </li>
            <li aria-level="1">
              Multimedia Editing: Adobe Premier, Kdenlive, Audacity
            </li>
            <li aria-level="1">
              Graphic Design: Adobe Photoshop, Illustrator, GIMP, Inkscape
            </li>
            <li aria-level="1">Agile/ Scrum: Trello, Pivotal Tracker, Slack</li>
          </ul> */}

          {/* <div className="mt-4 mb-3 pb-5 d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-2 text-center">
              <a
                href="#"
                className="btn btn-dark btn-lg px-4 me-2 thm_cta"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFilePdf} /> Unduh Resume
              </a> */}
          {/* <Link href="/">Browse my writings</Link> */}
          {/* <button class="btn btn-primary" type="button">Button</button> */}
          {/* </div> */}
          {/* <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Download Resume
            </Link><br />
            or <Link href="/blog">Browse my writings</Link> */}
          {/* </div> */}
          {/* <div className="mt-4 mb-3 pb-5 d-none d-md-block">
            <a
              href="#"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Unduh Resume
            </a> */}
          {/* or <Link href="/">Browse my writings</Link> */}
          {/* </div> */}
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
