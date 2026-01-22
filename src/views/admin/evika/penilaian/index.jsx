import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdArrowBack, MdAdd, MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PenilaianManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      tahun: 2024,
      nilai_akhir_evika: 85.5,
      status_eklp3k: "Baik",
      created_by: "Admin",
      created_at: "2024-01-15",
      updated_at: "2024-01-20",
    },
    {
      id: 2,
      tahun: 2023,
      nilai_akhir_evika: 78.3,
      status_eklp3k: "Cukup",
      created_by: "Admin",
      created_at: "2023-01-15",
      updated_at: "2023-12-20",
    },
    {
      id: 3,
      tahun: 2022,
      nilai_akhir_evika: 72.1,
      status_eklp3k: "Cukup",
      created_by: "Admin",
      created_at: "2022-01-15",
      updated_at: "2022-12-20",
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

  const filteredData = data.filter(
    (item) =>
      item.tahun.toString().includes(searchTerm) ||
      item.status_eklp3k.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "baik":
        return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
      case "cukup":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
      case "kurang":
        return "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        {/* Header */}
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
              Manajemen Penilaian EVIKA
            </h2>
            <button
              onClick={() => navigate("/admin/evika/penilaian/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <MdAdd className="h-5 w-5" />
              Tambah Penilaian
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Cari penilaian..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2 w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">No</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Tahun</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Nilai Akhir</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Status</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Dibuat Oleh</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{index + 1}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.tahun}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.nilai_akhir_evika.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(item.status_eklp3k)}`}>
                      {item.status_eklp3k}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.created_by}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/evika/penilaian/${item.id}`)}
                        className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                        title="Lihat Detail"
                      >
                        <MdVisibility className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/evika/penilaian/edit/${item.id}`)}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-navy-700 rounded-lg p-6 w-full max-w-md animate-modal-fade-in">
            <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
              Konfirmasi Hapus
            </h3>
            <p className="text-navy-700 dark:text-white mb-6">
              Apakah Anda yakin ingin menghapus penilaian ini?
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

export default PenilaianManagement;
