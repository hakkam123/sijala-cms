import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const PertanyaanEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    kriteria_id: "",
    indikator_id: "",
    pertanyaan: "",
    bobot: "",
    tipe_jawaban: "",
  });

  const [kriteriaList] = useState([
    { id: 1, nama: "Kriteria Ekologi" },
    { id: 2, nama: "Kriteria Sosial-Ekonomi" },
    { id: 3, nama: "Kriteria Kelembagaan" },
    { id: 4, nama: "Kriteria Governance" },
  ]);

  const [allIndikator] = useState([
    { id: 1, kriteria_id: 1, nama: "Keanekaragaman Hayati" },
    { id: 2, kriteria_id: 1, nama: "Kesehatan Ekosistem" },
    { id: 3, kriteria_id: 2, nama: "Kesejahteraan Masyarakat" },
    { id: 4, kriteria_id: 2, nama: "Partisipasi Lokal" },
  ]);

  const indikatorList = formData.kriteria_id
    ? allIndikator.filter((ind) => ind.kriteria_id === parseInt(formData.kriteria_id))
    : [];

  useEffect(() => {
    const existingData = {
      id: id,
      kriteria_id: 1,
      indikator_id: 1,
      pertanyaan: "Apakah terdapat program pemantauan keanekaragaman hayati?",
      bobot: 0.2,
      tipe_jawaban: "Ya/Tidak",
    };
    setFormData(existingData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Pertanyaan berhasil diupdate!");
    navigate("/admin/evika/pertanyaan");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/evika/pertanyaan")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Pertanyaan EVIKA
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Kriteria
            </label>
            <select
              value={formData.kriteria_id}
              onChange={(e) => setFormData({ ...formData, kriteria_id: e.target.value, indikator_id: "" })}
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

          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Indikator
            </label>
            <select
              value={formData.indikator_id}
              onChange={(e) => setFormData({ ...formData, indikator_id: e.target.value })}
              className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
              required
              disabled={!formData.kriteria_id}
            >
              <option value="">Pilih Indikator</option>
              {indikatorList.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.nama}
                </option>
              ))}
            </select>
          </div>

          <TextField
            label="Pertanyaan"
            placeholder="Masukkan pertanyaan evaluasi"
            id="pertanyaan"
            rows={3}
            value={formData.pertanyaan}
            onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
            required
          />

          <InputField
            label="Bobot (0.0 - 1.0)"
            placeholder="Contoh: 0.2"
            id="bobot"
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={formData.bobot}
            onChange={(e) => setFormData({ ...formData, bobot: e.target.value })}
            required
          />

          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Tipe Jawaban
            </label>
            <select
              value={formData.tipe_jawaban}
              onChange={(e) => setFormData({ ...formData, tipe_jawaban: e.target.value })}
              className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
            >
              <option value="Ya/Tidak">Ya/Tidak</option>
              <option value="Skala 1-5">Skala 1-5</option>
              <option value="Persentase">Persentase</option>
              <option value="Angka">Angka</option>
              <option value="Teks">Teks</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/evika/pertanyaan")}
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

export default PertanyaanEdit;
