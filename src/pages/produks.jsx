import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom"; // ✅ Ditambahkan

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        setProducts(response.data.products);
        setFiltered(response.data.products);
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      });
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      const result = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
    }, 500);

    return () => clearTimeout(delay);
  }, [query, products]);

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div className="container mx-auto px-4 py-6">
      {errorInfo}
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk..."
        className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg"
      />

      <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-hidden">
        <thead className="bg-emerald-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Brand</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {filtered.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">
                <Link to={`/products/${item.id}`} className="text-emerald-500 hover:text-emerald-600">
                  {item.title}
                </Link>
              </td>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">Rp {item.price * 1000}</td>
              <td className="px-4 py-3">{item.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
