import React, { useState } from "react";
import Card from "components/card";
import { MdEdit, MdAdd, MdFilterList, MdSearch, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ArtikelManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Sample data matching the reference image style
  const [data] = useState([
    {
      id: 1,
      judul: "Raih Prestasi Gemilang BLUD UPTD KKP...",
      slug: "Prestasi",
      konten: "Badan Layanan Umum Daerah Unit Pelaksana Teknis Daerah Konservasi...",
      terakhirDiubah: "12:24 oleh Hakkam",
    },
    {
      id: 2,
      judul: "Raih Prestasi Gemilang BLUD UPTD KKP...",
      slug: "Prestasi",
      konten: "Badan Layanan Umum Daerah Unit Pelaksana Teknis Daerah Konservasi...",
      terakhirDiubah: "12:24 oleh Hakkam",
    },
    {
      id: 3,
      judul: "Raih Prestasi Gemilang BLUD UPTD KKP...",
      slug: "Prestasi",
      konten: "Badan Layanan Umum Daerah Unit Pelaksana Teknis Daerah Konservasi...",
      terakhirDiubah: "12:24 oleh Hakkam",
    },
  ]);

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.konten.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination calculations
  const totalItems = 200; // Total items from API
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-6">
        {/* Header with Title, Search, and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">
            Berita
          </h2>
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg w-48 text-sm focus:outline-none focus:border-brand-500"
              />
            </div>
            {/* Add Button */}
            <button
              onClick={() => navigate("/admin/artikel/create")}
              className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors text-sm font-medium"
            >
              <MdAdd className="h-5 w-5" />
              Berita
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-white">
                    Judul
                    <MdFilterList className="h-4 w-4 text-gray-400 cursor-pointer hover:text-brand-500" />
                  </div>
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-white">
                    Slug
                    <MdFilterList className="h-4 w-4 text-gray-400 cursor-pointer hover:text-brand-500" />
                  </div>
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-white">
                    Konten
                    <MdFilterList className="h-4 w-4 text-gray-400 cursor-pointer hover:text-brand-500" />
                  </div>
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-white">
                    Terakhir diubah
                    <MdFilterList className="h-4 w-4 text-gray-400 cursor-pointer hover:text-brand-500" />
                  </div>
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-white">
                    Action
                    <MdFilterList className="h-4 w-4 text-gray-400 cursor-pointer hover:text-brand-500" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 dark:border-navy-600 hover:bg-gray-50 dark:hover:bg-navy-700">
                  <td className="py-4 px-4">
                    <p className="text-sm text-navy-700 dark:text-white max-w-[250px] truncate">
                      {item.judul}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-navy-700 dark:text-white">
                      {item.slug}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-navy-700 dark:text-white max-w-[250px] truncate">
                      {item.konten}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-navy-700 dark:text-white">
                      {item.terakhirDiubah}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => navigate(`/admin/artikel/edit/${item.id}`)}
                      className="flex items-center justify-center bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors"
                      title="Edit"
                    >
                      <MdEdit className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Tidak ada berita yang ditemukan
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-navy-600">
          {/* Items per page */}
          <div className="flex items-center gap-2">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Items per page
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              {startItem}-{endItem} of {totalItems} items
            </span>
          </div>

          {/* Page navigation */}
          <div className="flex items-center gap-2">
            <select
              value={currentPage}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-500"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 10).map((page) => (
                <option key={page} value={page}>{page}</option>
              ))}
            </select>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              of {totalPages} pages
            </span>
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-navy-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MdChevronLeft className="h-5 w-5 text-gray-600 dark:text-white" />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-navy-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MdChevronRight className="h-5 w-5 text-gray-600 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ArtikelManagement;
