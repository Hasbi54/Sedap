import { useEffect, useState } from "react";
import Slider from "react-slick";
import products from "../assets/Data/produk.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/TopProducts.css";

export default function TopProducts() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      id="top-products"
      className="top-products-section"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff8e1" /* cream lembut, kuning muda */
      }}
    >
      {/* Grid Motion Background */}
      <div
        className="grid-motion-background"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "200%",
          backgroundSize: "40px 40px",
          // Garis grid warna coklat muda transparan supaya gak mencolok tapi terlihat:
          backgroundImage:
            "linear-gradient(to right, rgba(139, 69, 19, 0.15) 2px, transparent 2px), linear-gradient(to bottom, rgba(139, 69, 19, 0.15) 2px, transparent 2px)",
          animation: "moveGrid 12s linear infinite",
          zIndex: 0,
          pointerEvents: "none",
          mixBlendMode: "multiply", // supaya grid menyatu alami ke background cream
        }}
      />

      <h2
        className="top-products-title"
        style={{ position: "relative", zIndex: 1, color: "#6d4c41" /* coklat tua */ }}
      >
        Produk Unggulan Kami
      </h2>

      <div className="slider-wrapper" style={{ position: "relative", zIndex: 1 }}>
        {products.length === 0 ? (
          <p className="no-products-text" style={{ color: "#8d6e63" /* coklat medium */ }}>
            Produk belum tersedia.
          </p>
        ) : (
          <Slider {...settings}>
            {products.map((p) => (
              <div
                key={p.kode_produk}
                className={`product-card-wrapper ${animate ? "animate" : ""}`}
              >
                <div
                  className="product-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove("hover");
                  }}
                >
                  <img src={p.image} alt={p.nama_produk} className="product-image" />
                  <div>
                    <h4 className="product-name" style={{ color: "#5d4037" }}>
                      {p.nama_produk}
                    </h4>
                    <p className="product-price" style={{ color: "#8d6e63" }}>
                      Rp {p.harga.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <button type="button" className="buy-button" disabled={p.stok <= 0}>
                    {p.stok > 0 ? "Beli Sekarang" : "Stok Habis"}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <style>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 40px 40px, 40px 40px;
          }
        }
        .product-card-wrapper.animate {
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
