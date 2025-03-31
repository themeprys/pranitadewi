import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BookOrder() {
  return (
    <section className="thm_feature mt-5 mb-3 row">
        <div className="col-md-4">
            <Image src="/img/amed.jpg"
            width="500"
            height="500"
            className="img-fluid mb-3"
            alt="Pranita Dewi"
          />
        </div>
        <div className="col">
        <h2 className="thm_introheading">
          <FontAwesomeIcon icon={faShoppingCart} /> <span className="text-body-secondary">Pemesanan Buku</span>
        </h2>
        <p><strong>Judul Buku:</strong> Nyawa Tinggallah Sejenak Lebih Lama, Kumpulan Puisi<br /><strong>Penulis:</strong> Pranita Dewi<br /><strong>Penerbit:</strong> JBS (Yogyakarta)<br /><strong>Tahun:</strong> 2024<br /><strong>Jumlah Hal:</strong> 88 hal<br /><strong>Dimensi:</strong> 13 x 19 cm<br /><strong>No ISBN:</strong> 9786237904885</p>
<p><strong>STOCK:</strong> TERSEDIA</p>
<Link href="https://wa.me/+6281802717528?text=Hi,%20saya%20ingin%20memesan%20buku%20puisi%20Pranita%20Dewi%0AJudul%20Buku:%0AJumlah%20Pesanan:%0ANama%20Pemesan:%0ADikirim%20ke%20alamat:">
<Image src="/orderwa.webp"
            width="378"
            height="80"
            className="img-fluid mb-3"
            alt="Pranita Dewi"
          />
</Link>          
        </div>

    </section>
  );
}

export default BookOrder;
