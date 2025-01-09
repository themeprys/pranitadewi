import React from "react";
import Image from "next/image";

function Porto() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-5 pb-5 border-bottom">
      <div className="col-md-4">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/amed.jpg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>
      <div className="col-md-8">
        <div className="card h-100 border-0">
        <p>Pranita Dewi adalah seorang penulis Indonesia yang menulis puisi, prosa lirik, dan cerpen. Kumpulan puisinya yang berjudul Pelacur Para Dewa diterbitkan oleh Komunitas Bambu pada tahun 2006, dan tajuk lainnya, Nyawa Tinggallah Sejenak Lebih Lama diterbitkan oleh Penerbit JBS pada tahun 2024.</p>
          <p>Beberapa puisinya pernah dimuat di Kompas, Koran Tempo, Media Indonesia, Bali Post, Majalah Sastra Horison, Jurnal BlockNot Poetry, Jurnal Sundih, Jurnal Sajak, Basa Basi.co, Buruan.co dan berbagai media lainnya.</p>
          <p>Beberapa puisinya juga diterjemahkan ke dalam Bahasa Prancis, bahasa Inggris, dan bahasa Thailand, dan masuk dalam sejumlah antologi, yakni Antologi Couleur Femme yang diterbitkan sebagai salah satu tema acara sastra Prancis Le Printemps des Poètes, Antologi Puisi Penyair Singapore – Indonesia oleh Majelis Sastra Asia Tenggara, dan Antologi Wanna Malai sastra Thailand – Indonesia oleh Dewan Kesenian Jakarta.</p>                
          <p>Saat ini menggeluti dunia literasi, kreatif dan penerbitan. Kini tinggal dan bekerja di Bali, Indonesia</p>          
          {/* <Image
            width="600"
            height="400"
            src="/img/porto/02.jpg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          /> */}
          {/* <h5>peoplereunite.id</h5>           */}
        </div>
      </div>
      {/* <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/srmbands_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>srmbands.id</h5>                    
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/mondiblanc_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>mondiblanc.org</h5>          
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/rupasuara_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>rupasuara.com</h5>                    
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/thetales_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>thetalesoftheurbanmisfits.com</h5>          
        </div>
      </div> */}
      {/* <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>             */}
    </div>
  );
}

export default Porto;
