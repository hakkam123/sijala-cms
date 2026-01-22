import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdArrowBack, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PertanyaanManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Data kriteria untuk display purposes
  const [kriteriaList] = useState([
    { id: 1, nama: "Kriteria Ekologi" },
    { id: 2, nama: "Kriteria Sosial Ekonomi" },
    { id: 3, nama: "Kriteria Kelembagaan" },
    { id: 4, nama: "Kriteria Governance" },
  ]);

  // Data indikator untuk dropdown (filter berdasarkan kriteria)
  const [indikatorList] = useState([
    { id: 1, kriteria_id: 1, nama: "Keanekaragaman Hayati" },
    { id: 2, kriteria_id: 1, nama: "Kondisi Habitat" },
    { id: 3, kriteria_id: 2, nama: "Partisipasi Masyarakat" },
    { id: 4, kriteria_id: 2, nama: "Manfaat Ekonomi" },
    { id: 5, kriteria_id: 3, nama: "Struktur Organisasi" },
    { id: 6, kriteria_id: 4, nama: "Transparansi" },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      kriteria_id: 1,
      kriteria_nama: "Kriteria Ekologi",
      indikator_id: 1,
      indikator_nama: "Keanekaragaman Hayati",
      pertanyaan: "Apakah terdapat peningkatan populasi spesies target?",
      bobot: 0.25,
      tipe_jawaban: "Skala 1-5",
      created_at: "2024-01-15",
    },
    {
      id: 2,
      kriteria_id: 1,
      kriteria_nama: "Kriteria Ekologi",
      indikator_id: 1,
      indikator_nama: "Keanekaragaman Hayati",
      pertanyaan: "Apakah ada peningkatan kualitas habitat?",
      bobot: 0.25,
      tipe_jawaban: "Ya/Tidak",
      created_at: "2024-01-15",
    },
    {
      id: 3,
      kriteria_id: 2,
      kriteria_nama: "Kriteria Sosial Ekonomi",
      indikator_id: 3,
      indikator_nama: "Partisipasi Masyarakat",
      pertanyaan: "Berapa persen masyarakat yang aktif berpartisipasi?",
      bobot: 0.30,
      tipe_jawaban: "Persentase",
      created_at: "2024-01-15",
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
      item.pertanyaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kriteria_nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.indikator_nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Manajemen Pertanyaan EVIKA
            </h2>
            <button
              onClick={() => navigate("/admin/evika/pertanyaan/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <MdAdd className="h-5 w-5" />
              Tambah Pertanyaan
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
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
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Kriteria</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Indikator</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Pertanyaan</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Bobot</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Tipe Jawaban</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{index + 1}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.kriteria_nama}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.indikator_nama}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white max-w-md truncate">{item.pertanyaan}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{(item.bobot * 100).toFixed(0)}%</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.tipe_jawaban}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/evika/pertanyaan/edit/${item.id}`)}
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
              Apakah Anda yakin ingin menghapus pertanyaan ini?
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

export default PertanyaanManagement;
