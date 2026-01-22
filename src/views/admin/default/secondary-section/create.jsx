import React, { useState } from "react";
import Card from "components/card";
import { MdArrowBack, MdImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const SecondarySectionCreate = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    subtitle: "",
    description: "",
    features: "",
  });

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
    console.log(formData);
    alert("Secondary Section berhasil ditambahkan!");
    navigate("/admin/default/secondary-section");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/default/secondary-section")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Tambah Secondary Section
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Gambar
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
                        Klik untuk upload gambar
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <InputField
              label="Judul"
              placeholder="Masukkan judul"
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />

            <InputField
              label="Subtitle"
              placeholder="Masukkan subtitle"
              id="subtitle"
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              required
            />

            <TextField
              label="Deskripsi"
              placeholder="Masukkan deskripsi"
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />

            <InputField
              label="Fitur (pisahkan dengan koma)"
              placeholder="Fitur 1, Fitur 2, Fitur 3"
              id="features"
              type="text"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/default/secondary-section")}
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

export default SecondarySectionCreate;
