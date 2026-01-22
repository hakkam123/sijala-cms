import React, { useState } from "react";
import Card from "components/card";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LineChart from "components/charts/LineChart";

const LaporanPenilaian = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("all");
  
  const years = [2020, 2021, 2022, 2023, 2024];
  const reportData = [
    {
      tahun: 2024,
      nilai_akhir: 85.5,
      status: "Baik",
      kriteria: [
        { nama: "Ekologi", nilai: 90 },
        { nama: "Sosial Ekonomi", nilai: 85 },
        { nama: "Kelembagaan", nilai: 82 },
        { nama: "Governance", nilai: 80 },
      ],
    },
    {
      tahun: 2023,
      nilai_akhir: 78.3,
      status: "Cukup",
      kriteria: [
        { nama: "Ekologi", nilai: 82 },
        { nama: "Sosial Ekonomi", nilai: 78 },
        { nama: "Kelembagaan", nilai: 76 },
        { nama: "Governance", nilai: 75 },
      ],
    },
    {
      tahun: 2022,
      nilai_akhir: 72.1,
      status: "Cukup",
      kriteria: [
        { nama: "Ekologi", nilai: 75 },
        { nama: "Sosial Ekonomi", nilai: 72 },
        { nama: "Kelembagaan", nilai: 70 },
        { nama: "Governance", nilai: 68 },
      ],
    },
    {
      tahun: 2021,
      nilai_akhir: 68.5,
      status: "Cukup",
      kriteria: [
        { nama: "Ekologi", nilai: 70 },
        { nama: "Sosial Ekonomi", nilai: 68 },
        { nama: "Kelembagaan", nilai: 67 },
        { nama: "Governance", nilai: 65 },
      ],
    },
    {
      tahun: 2020,
      nilai_akhir: 65.0,
      status: "Kurang",
      kriteria: [
        { nama: "Ekologi", nilai: 67 },
        { nama: "Sosial Ekonomi", nilai: 65 },
        { nama: "Kelembagaan", nilai: 64 },
        { nama: "Governance", nilai: 62 },
      ],
    },
  ];

  const lineChartDataConfig = {
    series: [
      {
        name: "Nilai EVIKA",
        data: reportData.map((d) => d.nilai_akhir).reverse(),
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: reportData.map((d) => d.tahun.toString()).reverse(),
        labels: {
          style: {
            colors: "#A3AED0",
            fontSize: "12px",
            fontWeight: "500",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 10,
        labels: {
          style: {
            colors: "#A3AED0",
            fontSize: "12px",
            fontWeight: "500",
          },
        },
      },
      legend: {
        show: true,
        position: "top",
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: "#E2E8F0",
      },
      colors: ["#4318FF"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0.1,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  const filteredData =
    selectedYear === "all"
      ? reportData
      : reportData.filter((d) => d.tahun === parseInt(selectedYear));

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5 mb-5">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white">
              Laporan Penilaian EVIKA
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Ringkasan dan tren penilaian efektivitas pengelolaan kawasan konservasi
            </p>
          </div>
          <div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
            >
              <option value="all">Semua Tahun</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Chart Card */}
      <Card extra="p-5 mb-5">
        <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
          Tren Nilai EVIKA
        </h3>
        <div className="h-[400px]">
          <LineChart series={lineChartDataConfig.series} options={lineChartDataConfig.options} />
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <Card extra="p-5">
          <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Nilai Tertinggi</h4>
          <div className="text-3xl font-bold text-green-500">
            {Math.max(...reportData.map((d) => d.nilai_akhir)).toFixed(1)}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tahun 2024</p>
        </Card>
        <Card extra="p-5">
          <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Nilai Terendah</h4>
          <div className="text-3xl font-bold text-red-500">
            {Math.min(...reportData.map((d) => d.nilai_akhir)).toFixed(1)}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tahun 2020</p>
        </Card>
        <Card extra="p-5">
          <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Rata-rata</h4>
          <div className="text-3xl font-bold text-brand-500">
            {(
              reportData.reduce((sum, d) => sum + d.nilai_akhir, 0) / reportData.length
            ).toFixed(1)}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">5 Tahun Terakhir</p>
        </Card>
      </div>

      {/* Detail Table */}
      <Card extra="p-5">
        <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
          Rincian Penilaian per Tahun
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Tahun</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Nilai Akhir</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Status</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Ekologi</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Sosial Ekonomi</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Kelembagaan</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Governance</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.tahun} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4 font-semibold text-navy-700 dark:text-white">{item.tahun}</td>
                  <td className="py-3 px-4 text-center font-bold text-brand-500">{item.nilai_akhir.toFixed(1)}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Baik"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : item.status === "Cukup"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                          : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  {item.kriteria.map((k, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-navy-700 dark:text-white">
                      {k.nilai}%
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LaporanPenilaian;