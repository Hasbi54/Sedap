import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    {
      title: "VOUCHER DISKON 50%",
      subtitle: "Nikmati makanan favorit dengan harga hemat",
      price: "Mulai dari Rp 20.000",
      image:
        "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
    },
    {
      title: "DISKON SPESIAL BAKSO",
      subtitle: "Bakso urat pedas mantap jiwa",
      price: "Hanya Rp 15.000",
      image:
        "https://i.pinimg.com/736x/38/32/5a/38325af55622ca43955ade320b1daea2.jpg",
    },
    {
      title: "PAKET NASI GORENG HEMAT",
      subtitle: "Diskon 30% untuk pembelian via aplikasi",
      price: "Rp 18.000",
      image:
        "https://i.pinimg.com/736x/b0/74/5e/b0745e2cd0f214523ccaae2c2a4d8691.jpg",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/food.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        padding: "3rem 0",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px", // batasi max lebar container isi kartu
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff3e0",
              padding: "1.5rem",
              borderRadius: "12px",
              flex: "1 1 calc(33.333% - 1rem)",
              minWidth: "280px",
              maxWidth: "380px", // maksimal lebar kartu supaya gak terlalu besar di layar lebar
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                fontWeight: "900",
                fontSize: "1.2rem",
                marginBottom: "0.3rem",
                color: "#d84315",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {card.subtitle}
            </p>
            <p style={{ color: "#ff5722", fontWeight: "600" }}>{card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
