import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdArrowBack, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PetaKawasan = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      image: "/path/to/map1.jpg",
      name: "Taman Nasional Komodo",
      location: "Nusa Tenggara Timur",
      area: "1,733 km²",
      latitude: "-8.5531",
      longitude: "119.4894",
      description: "Habitat alami komodo dan ekosistem laut yang kaya",
      status: "Aktif",
    },
    {
      id: 2,
      image: "/path/to/map2.jpg",
      name: "Taman Nasional Raja Ampat",
      location: "Papua Barat",
      area: "4,600 km²",
      latitude: "-0.5667",
      longitude: "130.5000",
      description: "Keanekaragaman hayati laut tertinggi di dunia",
      status: "Aktif",
    },
  ]);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <div className="mb-5">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
          >
            <MdArrowBack className="h-5 w-5 mr-2" />
            Kembali
          </button>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
              Manajemen Peta Kawasan Konservasi
            </h2>
            <button
              onClick={() => navigate("/admin/default/peta-kawasan/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <MdAdd className="h-5 w-5" />
              Tambah Kawasan
            </button>
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Cari kawasan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2 w-64"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Gambar</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Nama Kawasan</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Lokasi</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Luas</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Status</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4">
                    <img src={item.image} alt={item.name} className="h-16 w-24 object-cover rounded" onError={(e) => e.target.src = "https://via.placeholder.com/150"} />
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white font-semibold">{item.name}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.location}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.area}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === "Aktif"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/default/peta-kawasan/edit/${item.id}`)}
                        className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
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
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-navy-700 rounded-lg p-6 w-full max-w-md animate-modal-fade-in">
            <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Apakah Anda yakin ingin menghapus kawasan ini?
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Hapus
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetaKawasan;
