import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.style.opacity = '1';
          sectionRef.current.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '4rem 2rem',
        background: '#a8dadc',
        color: '#1d3557',
        textAlign: 'center',
        opacity: 0,
        transform: 'translateY(50px)',
        transition: 'all 0.8s ease',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046750.png"
          alt="Tentang Sedap"
          style={{
            width: '80px',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
          }}
        />
        <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Kenapa Memilih Sedap?</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
          <strong>Sedap</strong> adalah sahabat kuliner Anda. Kami hadir untuk menyajikan makanan lezat, 
          sehat, dan berkualitas dengan layanan cepat dan teknologi modern. Mulai dari dapur hingga meja makan, 
          kami pastikan pengalaman Anda selalu hangat dan berkesan.
        </p>
      </div>
    </section>
  );
}
