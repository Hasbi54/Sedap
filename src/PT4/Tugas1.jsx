import React, { useState } from "react";
import data from "./Tugas.json";

const Tugas1 = () => {
  const [brandFilter, setBrandFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const brands = [...new Set(data.map((item) => item.brand))];

  const filteredData = data.filter((item) => {
    const matchBrand = brandFilter === "" || item.brand === brandFilter;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBrand && matchSearch;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Daftar Produk Teknologi
      </h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        {/* Filter Brand */}
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter Brand
          </label>
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Semua Brand</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-2/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cari Produk
          </label>
          <input
            type="text"
            placeholder="Cari berdasarkan judul/deskripsi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="mb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500">{item.brand}</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">
              {item.description}
            </p>
            <div className="text-sm text-gray-500 mb-2">
              <p>Kategori: {item.category}</p>
              <p>Rating: ⭐ {item.rating}</p>
              <p>Stok: {item.stock}</p>
            </div>
            <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
              <div>
                <span className="text-lg font-bold text-green-600">
                  ${item.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-red-500">
                  -{item.discountPercentage}%
                </span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                {item.tags.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          Tidak ada produk ditemukan.
        </p>
      )}
    </div>
  );
};

export default Tugas1;
