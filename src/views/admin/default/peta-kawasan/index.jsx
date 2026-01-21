import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdVisibility, MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PetaKawasan = () => {
  const navigate = useNavigate();
  const [data] = useState([
    {
      id: 1,
      image: "hero1.jpg",
      title: "Kawasan Konservasi di Perairan Kepulauan Raja Ampat",
      subtitle: "RAJA AMPAT",
    },
    // Tambahkan data dummy lainnya
  ]);

  return (
    <div className="mt-5">
      <Card extra="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">

          <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
            <button 
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
            >
                <MdArrowBack className="h-5 w-5" />
            </button>
            Peta Kawasan Section List
          </h2>
          <button className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600">
            + Add New
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Video</th>
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Subtitle</th>
                <th className="text-center py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <img src={item.image} alt={item.title} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">{item.subtitle}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors">
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <MdVisibility className="h-5 w-5" />
                      </button>
                      <button className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
                        <MdDelete className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PetaKawasan;