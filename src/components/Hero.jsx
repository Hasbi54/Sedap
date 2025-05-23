import { useEffect, useState } from 'react';

export default function Hero() {
  const images = [
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80',
    'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?semt=ais_hybrid&w=1470',
    'https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=1470',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Background Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hero"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 1,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem',
          animation: 'fadeInUp 1.5s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            animation: 'fadeInUp 1.2s ease-out',
          }}
        >
          Selamat Datang di SedapTu!
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            animation: 'fadeInUp 1.5s ease-out',
          }}
        >
          Sajian lezat, rasa mantap, dan pengalaman makan yang tak terlupakan.  
          SedapTu hadir untuk memanjakan lidahmu dengan pilihan menu terbaik khas nusantara dan internasional.
        </p>
        <button
          style={{
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#bc6c25',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#a35a1f')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#bc6c25')}
        >
          Lihat Menu
        </button>
      </div>

      {/* Keyframes for animation */}
      <style>
        {`
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
        `}
      </style>
    </div>
  );
}
