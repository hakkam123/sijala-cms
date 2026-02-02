import React, { useState } from "react";
import { MdSearch, MdEdit, MdKeyboardArrowDown, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

const Dashboard = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for the table
  const tableData = [
    {
      id: 1,
      namaSection: "Hero Section",
      tipe: "Header",
      konten: "Raja Ampat",
      terakhirDiubah: "12:24 oleh Hakkam",
    },
    {
      id: 2,
      namaSection: "Hero Section",
      tipe: "Subheader",
      konten: "Kawasan Konservasi di...",
      terakhirDiubah: "27 Agustus 2025 oleh Tegar",
    },
    {
      id: 3,
      namaSection: "Hero Section",
      tipe: "Background",
      konten: "Video.mov",
      terakhirDiubah: "27 Agustus 2025 oleh Tegar",
    },
  ];

  const totalItems = 200;
  const totalPages = 44;

  return (
    <div className="mt-3">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-5">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
              <IoStatsChart className="h-5 w-5 text-green-500" />
            </div>
            <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
              This Week
              <MdKeyboardArrowDown className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Jumlah kunjungan</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800">12.000</span>
              <span className="text-sm font-medium text-green-500">+0.2%</span>
            </div>
          </div>
        </div>

        {/* Click Rate CTA Card */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
              <IoStatsChart className="h-5 w-5 text-green-500" />
            </div>
            <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
              This Week
              <MdKeyboardArrowDown className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Click rate CTA</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800">12.000</span>
              <span className="text-sm font-medium text-green-500">+0.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        {/* Table Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Konten Landing Page</h2>
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-48 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none focus:border-brand-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-3 text-left">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    Nama Section
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="pb-3 text-left">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    Tipe
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="pb-3 text-left">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    Konten
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="pb-3 text-left">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    Terakhir diubah
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="pb-3 text-right">
                  <div className="flex items-center justify-end gap-1 text-sm font-medium text-gray-500">
                    Action
                    <MdKeyboardArrowDown className="h-4 w-4" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-b border-gray-50">
                  <td className="py-4 text-sm text-gray-600">{row.namaSection}</td>
                  <td className="py-4 text-sm text-gray-600">{row.tipe}</td>
                  <td className="py-4 text-sm text-gray-600">{row.konten}</td>
                  <td className="py-4 text-sm text-gray-600">{row.terakhirDiubah}</td>
                  <td className="py-4 text-right">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-white hover:bg-amber-500">
                      <MdEdit className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="h-8 rounded border border-gray-200 bg-white px-2 text-sm text-gray-600 outline-none"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-500">Items per page</span>
            </div>
            <span className="text-sm text-gray-500">1-10 of {totalItems} items</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="h-8 rounded border border-gray-200 bg-white px-2 text-sm text-gray-600 outline-none"
              >
                {[...Array(totalPages)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-500">of {totalPages} pages</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50"
              >
                <MdChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50"
              >
                <MdChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
