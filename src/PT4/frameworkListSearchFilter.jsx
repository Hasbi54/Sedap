import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

  return (
   <div className="p-4">
     <input
      type="text"
      name="searchTerm"
      placeholder="Search framework..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />

    <select
      name="selectedTag"
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    >
      <option value="">All Tags</option>
      {allTags.map((tag, index) => (
      <option key={index} value={tag}>
        {tag}
      </option>
  ))}
    </select>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

    {filteredFrameworks.map((item, index) => (
       <div
       key={item.id}
       className="border p-4 mb-4 rounded-lg shadow-md bg-white"
     >
       <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
       <p className="text-gray-600">{item.description}</p>
       <p className="text-gray-600">
         Developed by: <b>{item.details.developer} </b>(
         {item.details.releaseYear})
       </p>
       <a
         href={item.details.officialWebsite}
         target="_blank"
         rel="noopener noreferrer"
         className="text-blue-500 underline hover:text-blue-700"
       >
         {" "}
         Visit website
       </a>
       <br />
       {item.tags.map((tag, index) => (
         <span
           key={index}
           className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2 mt-2 inline-block"
         >
           {tag}
         </span>
       ))}
     </div>
    ))}
   </div>
   </div>
 
  );
}
