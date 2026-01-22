import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack, MdImage } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const PetaKawasanEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    location: "",
    area: "",
    latitude: "",
    longitude: "",
    description: "",
    status: "Aktif",
  });

  useEffect(() => {
    const existingData = {
      id: id,
      image: "/path/to/peta1.jpg",
      name: "Taman Nasional Komodo",
      location: "Nusa Tenggara Timur",
      area: "1,733 km²",
      latitude: "-8.5333",
      longitude: "119.5167",
      description: "Kawasan konservasi komodo dan ekosistem lautnya",
      status: "Aktif",
    };
    setFormData(existingData);
    setImagePreview(existingData.image);
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Peta Kawasan berhasil diupdate!");
    navigate("/admin/default/peta-kawasan");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/default/peta-kawasan")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Peta Kawasan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Gambar Peta
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-navy-600 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full max-h-64 rounded-lg object-cover" />
                  ) : (
                    <div className="text-center">
                      <MdImage className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Klik untuk upload peta baru
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <InputField
              label="Nama Kawasan"
              placeholder="Masukkan nama kawasan"
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <InputField
              label="Lokasi"
              placeholder="Masukkan lokasi"
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />

            <InputField
              label="Luas Area"
              placeholder="Contoh: 5000 Ha"
              id="area"
              type="text"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Latitude"
                placeholder="-6.200000"
                id="latitude"
                type="text"
                value={formData.latitude}
                onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                required
              />

              <InputField
                label="Longitude"
                placeholder="106.816666"
                id="longitude"
                type="text"
                value={formData.longitude}
                onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                required
              />
            </div>

            <TextField
              label="Deskripsi"
              placeholder="Masukkan deskripsi kawasan"
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />

            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full border border-gray-300 dark:border-navy-600 dark:bg-navy-700 dark:text-white rounded-lg px-4 py-2"
              >
                <option value="Aktif">Aktif</option>
                <option value="Dalam Pengembangan">Dalam Pengembangan</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/default/peta-kawasan")}
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

export default PetaKawasanEdit;
