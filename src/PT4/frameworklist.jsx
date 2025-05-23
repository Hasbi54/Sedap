import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  // State untuk menyimpan input search dan filter tag
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Fungsi untuk menangani perubahan pada input search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk menangani perubahan pada select filter tag
  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  // Filter data berdasarkan searchTerm dan selectedTag
  const filteredFrameworks = frameworkData.filter((item) => {
    // Filter berdasarkan searchTerm (case insensitive)
    const isSearchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter berdasarkan selectedTag, jika ada
    const isTagMatch = selectedTag ? item.tags.includes(selectedTag) : true;

    return isSearchMatch && isTagMatch;
  });

  // Ambil semua tag yang ada untuk opsi select
  const allTags = Array.from(new Set(frameworkData.flatMap(item => item.tags)));

  return (
    <div className="p-8">
      {/* Input search */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Pencarian"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Select untuk filter tag */}
      <select
        name="selectedTag"
        value={selectedTag}
        onChange={handleTagChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Render Frameworks yang sudah difilter */}
      {filteredFrameworks.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>

          {/* Menampilkan Official Website dan Developer */}
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              <strong>Official Website:</strong>
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {item.details.officialWebsite}
              </a>
            </p>
            <p className="text-sm text-gray-500">
              <strong>Developer:</strong> {item.details.developer}
            </p>
          </div>

          {/* Menampilkan Tags */}
          <div className="mt-2">
            <strong>Tags:</strong>
            <div className="flex flex-wrap mt-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index} // Menambahkan key unik untuk setiap tag
                  className="bg-blue-200 text-blue-700 px-3 py-1 text-xs rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
