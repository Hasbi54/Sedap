export default function Footer() {
  return (
    <footer style={{background: '#1d3557', color: 'white', padding: '2rem'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <div>
          <h4>Kontak Kami</h4>
          <p>Email: support@sedap.com</p>
          <p>Telp: +62 812 3456 7890</p>
          <p>Alamat: Jl. Kuliner No.1, Jakarta</p>
        </div>
        <div>
          <h4>Sosial Media</h4>
          <p>Instagram | Facebook | Twitter</p>
        </div>
        <div>
          <h4>Partner</h4>
          <img src="https://via.placeholder.com/150x50?text=Partner+Logo" alt="Partner" />
        </div>
      </div>
      <p style={{textAlign: 'center', marginTop: '1rem'}}>© 2025 Sedap. All rights reserved.</p>
    </footer>
  );
}
