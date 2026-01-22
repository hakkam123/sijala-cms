import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";

const PenilaianEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    tahun: "",
    nilai_akhir_evika: "",
    status_eklp3k: "",
  });

  useEffect(() => {
    const existingData = {
      id: id,
      tahun: 2024,
      nilai_akhir_evika: 78.5,
      status_eklp3k: "Baik",
    };
    setFormData(existingData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Penilaian berhasil diupdate!");
    navigate("/admin/evika/penilaian");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/evika/penilaian")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Penilaian EVIKA
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Tahun"
            placeholder="Tahun penilaian"
            id="tahun"
            type="number"
            min="2020"
            max="2100"
            value={formData.tahun}
            onChange={(e) => setFormData({ ...formData, tahun: e.target.value })}
            required
          />

          <InputField
            label="Nilai Akhir EVIKA (0-100)"
            placeholder="Masukkan nilai akhir"
            id="nilai_akhir_evika"
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={formData.nilai_akhir_evika}
            onChange={(e) => setFormData({ ...formData, nilai_akhir_evika: e.target.value })}
            required
          />

          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Status E-KLP3K
            </label>
            <select
              value={formData.status_eklp3k}
              onChange={(e) => setFormData({ ...formData, status_eklp3k: e.target.value })}
              className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
              required
            >
              <option value="Baik">Baik</option>
              <option value="Cukup">Cukup</option>
              <option value="Kurang">Kurang</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/evika/penilaian")}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-brand-500 text-white px-6 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              Update
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PenilaianEdit;
