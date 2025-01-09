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
          <h1 className="mb-3 pran_heading">
              Penulis Puisi, Prosais dan Cerpenis asal Bali, Indonesia
          </h1>
          <p>Pranita Dewi adalah seorang penulis Indonesia yang menulis puisi, prosa lirik, dan cerpen. Kumpulan puisinya yang berjudul Pelacur Para Dewa diterbitkan oleh Komunitas Bambu pada tahun 2006, dan tajuk lainnya, Nyawa Tinggallah Sejenak Lebih Lama diterbitkan oleh Penerbit JBS pada tahun 2024.</p>
          <p>Beberapa puisinya pernah dimuat di Kompas, Koran Tempo, Media Indonesia, Bali Post, Majalah Sastra Horison, Jurnal BlockNot Poetry, Jurnal Sundih, Jurnal Sajak, Basa Basi.co, Buruan.co dan berbagai media lainnya.</p>
          <p>Beberapa puisinya juga diterjemahkan ke dalam Bahasa Prancis, bahasa Inggris, dan bahasa Thailand, dan masuk dalam sejumlah antologi, yakni Antologi Couleur Femme yang diterbitkan sebagai salah satu tema acara sastra Prancis Le Printemps des Poètes, Antologi Puisi Penyair Singapore – Indonesia oleh Majelis Sastra Asia Tenggara, dan Antologi Wanna Malai sastra Thailand – Indonesia oleh Dewan Kesenian Jakarta.</p>                
          <p>Saat ini menggeluti dunia literasi, kreatif dan penerbitan. Kini tinggal dan bekerja di Bali, Indonesia</p>
          <h3 className="mb-3">
            Narahubung:
          </h3>
          <ul>
            <li aria-level="1">Surel: duniapranita@gmail.com</li>
            <li aria-level="1">No Telp: +6288812345678</li>
            <li aria-level="1">Media Sosial: <a target="_blank" href="https://linkedin.com/in/pranitadewi">LinkedIn</a></li>
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

          <div className="mt-4 mb-3 pb-5 d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-2 text-center">
              <a
                href="#"
                className="btn btn-dark btn-lg px-4 me-2 thm_cta"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFilePdf} /> Unduh Resume
              </a>
              {/* <Link href="/">Browse my writings</Link> */}
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
            <a
              href="#"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Unduh Resume
            </a>
            {/* or <Link href="/">Browse my writings</Link> */}
          </div>
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
            alt="Priyono Santosa"
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
