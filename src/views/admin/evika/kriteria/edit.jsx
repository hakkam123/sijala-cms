import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";

const KriteriaEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    nama: "",
    bobot: "",
  });

  useEffect(() => {
    const existingData = {
      id: id,
      nama: "Kriteria Ekologi",
      bobot: 0.35,
    };
    setFormData(existingData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Kriteria berhasil diupdate!");
    navigate("/admin/evika/kriteria");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/evika/kriteria")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Kriteria EVIKA
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Nama Kriteria"
            placeholder="Masukkan nama kriteria"
            id="nama"
            type="text"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            required
          />

          <InputField
            label="Bobot (0.0 - 1.0)"
            placeholder="Contoh: 0.25"
            id="bobot"
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={formData.bobot}
            onChange={(e) => setFormData({ ...formData, bobot: e.target.value })}
            required
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/evika/kriteria")}
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

export default KriteriaEdit;
