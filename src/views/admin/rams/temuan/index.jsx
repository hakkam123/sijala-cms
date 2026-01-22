import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdArrowBack, MdAdd, MdCheckCircle, MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TemuanManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  const [data, setData] = useState([
    {
      id: 111,
      nomor_temuan: "111",
      kawasan_temuan: "Teluk Mayalibit",
      pos_temuan: "Pos Warsowes",
      tanggal: "2024-05-01T07:51:00",
      latitude: "-0.5333",
      longitude: "130.5167",
      tindakan: "Perbaikan pelampung",
      validasi_temuan: "Diterima",
      tanggal_validasi: "2024-05-01T07:51:00",
      created_at: "2024-05-01",
    },
    {
      id: 112,
      nomor_temuan: "112",
      kawasan_temuan: "Kepulauan Wayag",
      pos_temuan: "Pos Wayag",
      tanggal: "2024-05-02T10:30:00",
      latitude: "0.2167",
      longitude: "130.1833",
      tindakan: "Instalasi baru",
      validasi_temuan: "Diterima",
      tanggal_validasi: "2024-05-02T11:00:00",
      created_at: "2024-05-02",
    },
    {
      id: 113,
      nomor_temuan: "113",
      kawasan_temuan: "Pulau Misool",
      pos_temuan: "Pos Misool",
      tanggal: "2024-05-03T14:20:00",
      latitude: "-1.8500",
      longitude: "130.1000",
      tindakan: "Pengecekan rutin",
      validasi_temuan: "Pending",
      tanggal_validasi: null,
      created_at: "2024-05-03",
    },
  ]);

  const getValidasiColor = (status) => {
    switch (status) {
      case "Diterima":
        return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
      case "Ditolak":
        return "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  const getValidasiIcon = (status) => {
    switch (status) {
      case "Diterima":
        return <MdCheckCircle className="h-5 w-5" />;
      case "Ditolak":
        return <MdCancel className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const handleDeleteConfirm = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  const filteredData = data.filter((item) =>
    item.nomor_temuan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kawasan_temuan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.pos_temuan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDateTime = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleString("id-ID", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        {/* Header */}
        <div className="mb-5">
          <button
            onClick={() => navigate("/admin/rams")}
            className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
          >
            <MdArrowBack className="h-5 w-5 mr-2" />
            Kembali
          </button>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
              Manajemen Temuan Mooring
            </h2>
            <button
              onClick={() => navigate("/admin/rams/temuan/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <MdAdd className="h-5 w-5" />
              Tambah Temuan
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Cari temuan, kawasan, atau pos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2 w-96"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  No. Temuan
                </th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  Kawasan
                </th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  Pos Temuan
                </th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  Tanggal
                </th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  Koordinat
                </th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">
                  Validasi
                </th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 dark:border-navy-600 hover:bg-gray-50 dark:hover:bg-navy-800"
                >
                  <td className="py-3 px-4 text-navy-700 dark:text-white font-semibold">
                    {item.nomor_temuan}
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">
                    {item.kawasan_temuan}
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">
                    {item.pos_temuan}
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">
                    {formatDateTime(item.tanggal)}
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white text-sm">
                    {item.latitude}, {item.longitude}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium w-fit ${getValidasiColor(
                        item.validasi_temuan
                      )}`}
                    >
                      {getValidasiIcon(item.validasi_temuan)}
                      {item.validasi_temuan}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/admin/rams/temuan/edit/${item.id}`)
                        }
                        className="text-green-500 hover:text-green-600"
                      >
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteConfirm(item.id)}
                        className="text-red-500 hover:text-red-600"
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
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Apakah Anda yakin ingin menghapus temuan ini?
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

export default TemuanManagement;
