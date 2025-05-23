import { Link } from "react-router-dom";
import products from "../../assets/Data/ordersData.json";

const testimonials = [
  {
    name: "Ahmad",
    review: "Aplikasi ini sangat membantu saya mencari produk terbaik.",
    avatar: "https://avatar-placeholder.iran.liara.run/1"
  },
  {
    name: "Siti",
    review: "Navigasinya mudah, tampilannya menarik!",
    avatar: "https://avatar-placeholder.iran.liara.run/2"
  },
  {
    name: "Budi",
    review: "Proses pemesanan cepat dan responsif.",
    avatar: "https://avatar-placeholder.iran.liara.run/3"
  },
  {
    name: "Dewi",
    review: "Produk-produknya lengkap dan terpercaya.",
    avatar: "https://avatar-placeholder.iran.liara.run/4"
  },
  {
    name: "Joko",
    review: "Saya puas dengan layanan dan tampilannya.",
    avatar: "https://avatar-placeholder.iran.liara.run/5"
  }
];

const GuestHome = () => {
  return (
    <div className="space-y-16">

      {/* Header / Navigation */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <div className="text-2xl font-bold">Sedap.</div>
        <nav className="space-x-4">
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">Belanja Mudah & Praktis di Sedap.</h1>
        <p className="text-lg text-gray-600">Platform terpercaya untuk kebutuhan harian Anda.</p>
        <img src="https://source.unsplash.com/800x300/?shopping" alt="Hero" className="mx-auto mt-8 rounded-lg shadow" />
      </section>

      {/* About Section */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
        <p className="text-gray-700">
          Sedap. adalah platform jual beli barang kebutuhan sehari-hari yang memberikan kemudahan,
          kecepatan, dan jaminan kepuasan pelanggan. Dengan berbagai produk berkualitas dan
          sistem transaksi yang aman, Sedap. menjadi pilihan utama masyarakat modern.
        </p>
      </section>

      {/* Produk Unggulan */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product, index) => (
            <div key={index} className="border p-4 rounded shadow text-center">
              <img src="https://source.unsplash.com/200x150/?product" alt={product.productName} className="mx-auto mb-4 rounded" />
              <h3 className="font-bold">{product.productName}</h3>
              <p className="text-gray-700">Stok: {product.quantity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div key={index} className="border p-4 rounded-lg shadow text-center">
              <img src={testi.avatar} alt={testi.name} className="w-16 h-16 mx-auto rounded-full mb-2" />
              <h4 className="font-semibold">{testi.name}</h4>
              <p className="text-gray-600 text-sm mt-1">"{testi.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Kontak</h3>
            <p>Email: support@sedap.com</p>
            <p>Telepon: +62 812 3456 7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Sosial Media</h3>
            <p>Instagram: @sedap.id</p>
            <p>Facebook: Sedap Official</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Partner</h3>
            <img src="https://source.unsplash.com/100x50/?brand" alt="Partner" className="rounded" />
          </div>
        </div>
        <p className="text-center text-sm mt-6">&copy; 2025 Sedap. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default GuestHome;
