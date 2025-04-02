"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BookOrder() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideshowRef = useRef(null);
  
  const slides = [
    "https://cdn.cosmicjs.com/b30d9010-101a-11f0-91ec-af6adca2ead2-Pranita_Dewi.webp",
    "https://cdn.cosmicjs.com/3e0b08b0-101a-11f0-91ec-af6adca2ead2-Pelacur_Para_Dewa.webp",
    "https://cdn.cosmicjs.com/6d9ff900-101a-11f0-91ec-af6adca2ead2-Nyawa_Tinggallah_Sejenak_Lebih_Lama.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Increased to 8 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="thm_feature mt-5 mb-3">
      <div className="row g-4">
        {/* Left Column - Slideshow */}
        <div className="col-md-5">
          <div 
            className="slideshow-container position-relative mb-4"
            ref={slideshowRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slideshow-wrapper" style={{ aspectRatio: "3/4" }}>
              <Image
                src={slides[currentSlide]}
                alt="Slideshow Image"
                fill
                className="object-fit-cover"
              />
            </div>
            <button 
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2"
              onClick={prevSlide}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button 
              className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={nextSlide}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`mx-1 d-inline-block rounded-circle ${
                    index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                  }`}
                  style={{ width: "10px", height: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Existing Content */}
        <div className="col-md-7">
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
      </div>
    </section>
  );
}

export default BookOrder;
