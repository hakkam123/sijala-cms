import React, { useState } from "react";
import Card from "components/card";
import { MdArrowBack, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const TemuanCreate = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nomor_temuan: "",
    kawasan_temuan: "",
    pos_temuan: "",
    tanggal: "",
    latitude: "",
    longitude: "",
    tindakan: "",
    validasi_temuan: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Temuan berhasil ditambahkan!");
    navigate("/admin/rams/temuan");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/rams/temuan")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Tambah Temuan Mooring
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Nomor Temuan"
              placeholder="Contoh: 111"
              id="nomor_temuan"
              type="text"
              value={formData.nomor_temuan}
              onChange={(e) =>
                setFormData({ ...formData, nomor_temuan: e.target.value })
              }
              required
            />

            <InputField
              label="Kawasan Temuan"
              placeholder="Contoh: Teluk Mayalibit"
              id="kawasan_temuan"
              type="text"
              value={formData.kawasan_temuan}
              onChange={(e) =>
                setFormData({ ...formData, kawasan_temuan: e.target.value })
              }
              required
            />

            <InputField
              label="Pos Temuan"
              placeholder="Contoh: Pos Warsowes"
              id="pos_temuan"
              type="text"
              value={formData.pos_temuan}
              onChange={(e) =>
                setFormData({ ...formData, pos_temuan: e.target.value })
              }
              required
            />

            <InputField
              label="Tanggal & Jam"
              placeholder=""
              id="tanggal"
              type="datetime-local"
              value={formData.tanggal}
              onChange={(e) =>
                setFormData({ ...formData, tanggal: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Latitude"
              placeholder="Contoh: -0.5333"
              id="latitude"
              type="text"
              value={formData.latitude}
              onChange={(e) =>
                setFormData({ ...formData, latitude: e.target.value })
              }
              required
            />

            <InputField
              label="Longitude"
              placeholder="Contoh: 130.5167"
              id="longitude"
              type="text"
              value={formData.longitude}
              onChange={(e) =>
                setFormData({ ...formData, longitude: e.target.value })
              }
              required
            />
          </div>

          <TextField
            label="Tindakan"
            placeholder="Deskripsi tindakan yang dilakukan"
            id="tindakan"
            rows={4}
            value={formData.tindakan}
            onChange={(e) =>
              setFormData({ ...formData, tindakan: e.target.value })
            }
            required
          />

          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
              Status Validasi
            </label>
            <select
              value={formData.validasi_temuan}
              onChange={(e) =>
                setFormData({ ...formData, validasi_temuan: e.target.value })
              }
              className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
            >
              <option value="Pending">Pending</option>
              <option value="Diterima">Diterima</option>
              <option value="Ditolak">Ditolak</option>
            </select>
          </div>

          <div className="bg-blue-50 dark:bg-navy-800 border border-blue-200 dark:border-navy-600 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <MdLocationOn className="h-5 w-5 text-blue-500 mt-0.5" />
              <div className="text-sm text-navy-700 dark:text-white">
                <p className="font-semibold mb-1">Tips Koordinat:</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Latitude: -6.0 sampai 0.5 (Selatan ke Utara)
                  <br />
                  Longitude: 130.0 sampai 131.5 (Barat ke Timur)
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/rams/temuan")}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-brand-500 text-white px-6 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default TemuanCreate;
