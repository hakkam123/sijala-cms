import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdArrowBack, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  const [data, setData] = useState([
    {
      id: 1,
      video: "/path/to/video1.mp4",
      title: "Kawasan Konservasi di Perairan Kepulauan Raja Ampat",
      subtitle: "RAJA AMPAT",
      description: "Jelajahi keindahan bawah laut Raja Ampat",
    },
  ]);

  const handleDeleteConfirm = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <div className="mb-5">
          <button onClick={() => navigate(-1)} className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors">
            <MdArrowBack className="h-5 w-5 mr-2" />
            Kembali
          </button>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white">Manajemen Hero Section</h2>
            <button onClick={() => navigate("/admin/default/hero-section/create")} className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors">
              <MdAdd className="h-5 w-5" />
              Tambah Hero
            </button>
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <input type="text" placeholder="Cari hero..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2 w-64" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Video</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Judul</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Subtitle</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Deskripsi</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600 hover:bg-gray-50 dark:hover:bg-navy-800">
                  <td className="py-3 px-4">
                    <video src={item.video} className="w-32 h-20 object-cover rounded" />
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.title}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.subtitle}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.description.substring(0, 50)}...</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => navigate(`/admin/default/hero-section/edit/${item.id}`)} className="text-green-500 hover:text-green-600">
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button onClick={() => handleDeleteConfirm(item.id)} className="text-red-500 hover:text-red-600">
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-navy-700 rounded-lg p-6 w-full max-w-md animate-modal-fade-in">
            <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Apakah Anda yakin ingin menghapus item ini?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;