import Hero from '../components/Hero';
import About from '../components/About';
import TopProducts from '../components/TopProducts';
import Testimonials from '../components/Testimonials';
import CekStok from '../pages/guest/CekStok';
import HeroSection from '../components/HeroSection';

export default function GuestPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333', lineHeight: 1.6 }}>
      <section style={{ padding: '60px 20px', backgroundColor: '#f9fafb', borderBottom: '1px solid #ddd' }}>
        <Hero />
      </section>

      <section style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <About />
      </section>
      
      <section style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <HeroSection />
      </section>

      <section style={{ padding: '50px 20px', backgroundColor: '#f1f5f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#1e40af' }}></h2>
        <TopProducts />
      </section>

      <section style={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <Testimonials />
      </section>

      <section style={{ padding: '50px 20px', backgroundColor: '#f9fafb', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        <CekStok />
      </section>
      
    </div>
  );
}
