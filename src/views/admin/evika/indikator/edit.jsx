import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";

const IndikatorEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    kriteria_id: "",
    nama: "",
  });

  const [kriteriaList] = useState([
    { id: 1, nama: "Kriteria Ekologi" },
    { id: 2, nama: "Kriteria Sosial-Ekonomi" },
    { id: 3, nama: "Kriteria Kelembagaan" },
    { id: 4, nama: "Kriteria Governance" },
  ]);

  useEffect(() => {
    const existingData = {
      id: id,
      kriteria_id: 1,
      nama: "Keanekaragaman Hayati",
    };
    setFormData(existingData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Indikator berhasil diupdate!");
    navigate("/admin/evika/indikator");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/evika/indikator")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Indikator EVIKA
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Kriteria
            </label>
            <select
              value={formData.kriteria_id}
              onChange={(e) => setFormData({ ...formData, kriteria_id: e.target.value })}
              className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
              required
            >
              <option value="">Pilih Kriteria</option>
              {kriteriaList.map((k) => (
                <option key={k.id} value={k.id}>
                  {k.nama}
                </option>
              ))}
            </select>
          </div>

          <InputField
            label="Nama Indikator"
            placeholder="Masukkan nama indikator"
            id="nama"
            type="text"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            required
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/evika/indikator")}
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

export default IndikatorEdit;
