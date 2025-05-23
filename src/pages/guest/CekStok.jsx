import { useState } from 'react';
import produkData from '../../assets/Data/produk.json';

export default function CheckProductStock() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter produk yang cocok dengan input (case insensitive)
  const filteredProducts = query.length > 0
    ? produkData.filter(p =>
        p.nama_produk.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function handleSelect(produk) {
    setSelected(produk);
    setQuery(produk.nama_produk);
    setShowDropdown(false);
  }

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Cek Stok Produk</h2>
      <input
        type="text"
        placeholder="Cari produk..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setShowDropdown(true);
          setSelected(null); // reset jika ketik ulang
        }}
        onFocus={() => setShowDropdown(true)}
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', boxSizing: 'border-box' }}
        autoComplete="off"
      />
      {showDropdown && filteredProducts.length > 0 && (
        <ul style={{
          border: '1px solid #ccc',
          maxHeight: 150,
          overflowY: 'auto',
          marginTop: 0,
          paddingLeft: 0,
          listStyle: 'none',
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          zIndex: 1000,
          boxSizing: 'border-box',
          borderRadius: '0 0 4px 4px',
        }}>
          {filteredProducts.map(produk => (
            <li
              key={produk.kode_produk}
              onClick={() => handleSelect(produk)}
              style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #eee' }}
              onMouseDown={e => e.preventDefault()} // cegah blur saat klik
            >
              {produk.nama_produk}
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          border: '1px solid',
          borderColor: selected.stok > 0 ? 'green' : 'orange',
          backgroundColor: selected.stok > 0 ? '#d4edda' : '#fff3cd',
          color: selected.stok > 0 ? '#155724' : '#856404',
          borderRadius: '8px',
        }}>
          <p><strong>{selected.nama_produk}</strong></p>
          <p>Stok: {selected.stok}</p>
          {selected.stok > 0 ? (
            <p>Produk tersedia ✅</p>
          ) : (
            <p>Produk sedang habis ⚠️</p>
          )}
        </div>
      )}
    </div>
  );
}
