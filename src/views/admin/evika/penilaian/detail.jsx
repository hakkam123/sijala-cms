import React from "react";
import Card from "components/card";
import { MdArrowBack, MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PieChart from "components/charts/PieChart";

const PenilaianDetail = () => {
  const navigate = useNavigate();


  // Data penilaian (dalam real app, fetch berdasarkan id)
  const penilaian = {
    id: 1,
    tahun: 2024,
    nilai_akhir_evika: 85.5,
    status_eklp3k: "Baik",
    created_by: "Admin",
    created_at: "2024-01-15",
  };

  const kriteriaSkor = [
    {
      id: 1,
      kriteria: "Kriteria Ekologi",
      total_nilai: 90,
      total_skor: 27,
      nilai_persen: 30,
      bobot: 0.30,
    },
    {
      id: 2,
      kriteria: "Kriteria Sosial Ekonomi",
      total_nilai: 85,
      total_skor: 21.25,
      nilai_persen: 25,
      bobot: 0.25,
    },
    {
      id: 3,
      kriteria: "Kriteria Kelembagaan",
      total_nilai: 82,
      total_skor: 20.5,
      nilai_persen: 25,
      bobot: 0.25,
    },
    {
      id: 4,
      kriteria: "Kriteria Governance",
      total_nilai: 80,
      total_skor: 16,
      nilai_persen: 20,
      bobot: 0.20,
    },
  ];

  const indikatorSkor = [
    {
      id: 1,
      kriteria: "Kriteria Ekologi",
      indikator: "Keanekaragaman Hayati",
      total_nilai: 92,
      total_skor: 13.8,
    },
    {
      id: 2,
      kriteria: "Kriteria Ekologi",
      indikator: "Kondisi Habitat",
      total_nilai: 88,
      total_skor: 13.2,
    },
    {
      id: 3,
      kriteria: "Kriteria Sosial Ekonomi",
      indikator: "Partisipasi Masyarakat",
      total_nilai: 87,
      total_skor: 10.875,
    },
    {
      id: 4,
      kriteria: "Kriteria Sosial Ekonomi",
      indikator: "Manfaat Ekonomi",
      total_nilai: 83,
      total_skor: 10.375,
    },
  ];

  const pieChartData = {
    labels: kriteriaSkor.map((k) => k.kriteria),
    datasets: [
      {
        data: kriteriaSkor.map((k) => k.total_skor),
        backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB", "#FFB547"],
      },
    ],
  };

  const pieChartOptions = {
    labels: kriteriaSkor.map((k) => k.kriteria),
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB", "#FFB547"],
    chart: {
      width: "100%",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
  };

  return (
    <div className="mt-5 animate-fade-in">
      {/* Header Card */}
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
              Detail Penilaian EVIKA Tahun {penilaian.tahun}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Dibuat oleh: {penilaian.created_by} | Tanggal: {penilaian.created_at}
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-brand-500">
              {penilaian.nilai_akhir_evika.toFixed(2)}
            </div>
            <div className="flex items-center justify-end gap-2 mt-2">
              <MdCheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-green-500 font-semibold">{penilaian.status_eklp3k}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Chart Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <Card extra="p-5">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
            Distribusi Skor per Kriteria
          </h3>
          <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
        </Card>

        <Card extra="p-5">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
            Ringkasan Penilaian
          </h3>
          <div className="space-y-4">
            {kriteriaSkor.map((item) => (
              <div key={item.id} className="border-b border-gray-200 dark:border-navy-600 pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-navy-700 dark:text-white">{item.kriteria}</span>
                  <span className="text-brand-500 font-bold">{item.total_nilai}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-navy-600 rounded-full h-2">
                  <div
                    className="bg-brand-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.total_nilai}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span>Bobot: {(item.bobot * 100).toFixed(0)}%</span>
                  <span>Skor: {item.total_skor.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Kriteria Score Table */}
      <Card extra="p-5 mb-5">
        <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
          Skor per Kriteria
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">No</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Kriteria</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Bobot</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Nilai</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Skor</th>
              </tr>
            </thead>
            <tbody>
              {kriteriaSkor.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{index + 1}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.kriteria}</td>
                  <td className="py-3 px-4 text-center text-navy-700 dark:text-white">{(item.bobot * 100).toFixed(0)}%</td>
                  <td className="py-3 px-4 text-center text-navy-700 dark:text-white">{item.total_nilai}%</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-500">{item.total_skor.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 dark:bg-navy-800 font-bold">
                <td colSpan="4" className="py-3 px-4 text-right text-navy-700 dark:text-white">Total Nilai Akhir:</td>
                <td className="py-3 px-4 text-center text-brand-500 text-lg">{penilaian.nilai_akhir_evika.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Indikator Score Table */}
      <Card extra="p-5">
        <h3 className="text-xl font-bold text-navy-700 dark:text-white mb-4">
          Skor per Indikator
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-600">
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">No</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Kriteria</th>
                <th className="text-left py-3 px-4 text-navy-700 dark:text-white">Indikator</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Nilai</th>
                <th className="text-center py-3 px-4 text-navy-700 dark:text-white">Skor</th>
              </tr>
            </thead>
            <tbody>
              {indikatorSkor.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-navy-600">
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{index + 1}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.kriteria}</td>
                  <td className="py-3 px-4 text-navy-700 dark:text-white">{item.indikator}</td>
                  <td className="py-3 px-4 text-center text-navy-700 dark:text-white">{item.total_nilai}%</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-500">{item.total_skor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PenilaianDetail;
