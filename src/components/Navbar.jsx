import Logo from './Logo';

export default function Navbar() {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', borderBottom: '1px solid #ddd'}}>
      <Logo />
      <ul style={{display: 'flex', gap: '1rem', listStyle: 'none'}}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#top-products">Produk Unggulan</a></li>
        <li><a href="#testimonials">Testimoni</a></li>
      </ul>
      <div>
        <button onClick={() => window.location.href = '/login'} style={{marginRight: '0.5rem'}}>Login</button>
        <button onClick={() => window.location.href = '/register'}>Register</button>
      </div>
    </nav>
  );
}
