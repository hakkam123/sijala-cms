import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack, MdImage } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const CapaianKamiEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [iconPreview, setIconPreview] = useState(null);
  
  const [formData, setFormData] = useState({
    icon: null,
    title: "",
    value: "",
    description: "",
  });

  useEffect(() => {
    const existingData = {
      id: id,
      icon: "/path/to/icon1.png",
      title: "Kawasan Konservasi",
      value: "50+",
      description: "Kawasan konservasi yang berhasil dikelola",
    };
    setFormData(existingData);
    setIconPreview(existingData.icon);
  }, [id]);

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, icon: file });
      const reader = new FileReader();
      reader.onloadend = () => setIconPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, ...formData });
    alert("Capaian berhasil diupdate!");
    navigate("/admin/default/capaian-kami");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/default/capaian-kami")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Capaian Kami
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Icon/Gambar
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-navy-600 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIconChange}
                  className="hidden"
                  id="icon-upload"
                />
                <label
                  htmlFor="icon-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {iconPreview ? (
                    <img src={iconPreview} alt="Preview" className="w-24 h-24 rounded-lg object-cover" />
                  ) : (
                    <div className="text-center">
                      <MdImage className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Klik untuk upload icon baru
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <InputField
              label="Judul"
              placeholder="Masukkan judul capaian"
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />

            <InputField
              label="Nilai"
              placeholder="Contoh: 50+ atau 1000 Ha"
              id="value"
              type="text"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              required
            />

            <TextField
              label="Deskripsi"
              placeholder="Masukkan deskripsi capaian"
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/default/capaian-kami")}
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

export default CapaianKamiEdit;
