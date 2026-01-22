import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdDelete, MdVisibility, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ArtikelManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  const [data, setData] = useState([
    {
      id: 1,
      title: "Pelestarian Kawasan Konservasi Raja Ampat",
      description: "Program pelestarian terumbu karang di Raja Ampat menunjukkan hasil positif...",
      image: "/path/to/image1.jpg",
      date: "2024-01-15",
      status: "published",
      author: "Admin",
    },
    {
      id: 2,
      title: "Partisipasi Masyarakat dalam Konservasi Laut",
      description: "Masyarakat lokal berperan aktif dalam menjaga kelestarian kawasan...",
      image: "/path/to/image2.jpg",
      date: "2024-01-10",
      status: "draft",
      author: "Admin",
    },
    {
      id: 3,
      title: "Keanekaragaman Hayati Laut Indonesia",
      description: "Indonesia memiliki keanekaragaman hayati laut terkaya di dunia...",
      image: "/path/to/image3.jpg",
      date: "2024-01-05",
      status: "published",
      author: "Editor",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    return status === "published" ? (
      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
        Published
      </span>
    ) : (
      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
        Draft
      </span>
    );
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
              Manajemen Berita
            </h2>
            <button
              onClick={() => navigate("/admin/artikel/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <MdAdd className="h-5 w-5" />
              Tambah Artikel
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4 flex flex-col md:flex-row gap-3 justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === "all"
                  ? "bg-brand-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-navy-700 dark:text-white"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilterStatus("published")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === "published"
                  ? "bg-brand-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-navy-700 dark:text-white"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setFilterStatus("draft")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === "draft"
                  ? "bg-brand-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-navy-700 dark:text-white"
              }`}
            >
              Draft
            </button>
          </div>
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2 w-full md:w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Gambar</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Judul</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Tanggal</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Author</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Status</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4">
                    <div className="h-16 w-24 bg-gray-200 dark:bg-navy-700 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="max-w-xs">
                      <p className="font-semibold text-navy-700 dark:text-white truncate">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {item.description}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.date}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.author}</td>
                  <td className="py-3 px-4 text-center">{getStatusBadge(item.status)}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/artikel/${item.id}`)}
                        className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                        title="Lihat"
                      >
                        <MdVisibility className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/artikel/edit/${item.id}`)}
                        className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                        title="Edit"
                      >
                        <MdEdit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                        title="Hapus"
                      >
                        <MdDelete className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Tidak ada artikel yang ditemukan
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ArtikelManagement;
