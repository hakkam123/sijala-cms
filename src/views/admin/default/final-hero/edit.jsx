import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack, MdImage } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const FinalHeroEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  });

  useEffect(() => {
    const existingData = {
      id: id,
      image: "/path/to/final1.jpg",
      title: "Waktunya Bertindak untuk Laut Kita",
      subtitle: "Mari Berkontribusi",
      description: "Setiap aksi kecil membuat perbedaan besar",
      buttonText: "Bergabung Sekarang",
      buttonLink: "/gabung",
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
    alert("Final Hero berhasil diupdate!");
    navigate("/admin/default/final-hero");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/default/final-hero")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Final Hero
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Hero Image
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
                        Klik untuk upload hero image baru
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
              label="Text Button"
              placeholder="Contoh: Mulai Sekarang"
              id="buttonText"
              type="text"
              value={formData.buttonText}
              onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
              required
            />

            <InputField
              label="Link Button"
              placeholder="Contoh: /daftar"
              id="buttonLink"
              type="text"
              value={formData.buttonLink}
              onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/default/final-hero")}
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

export default FinalHeroEdit;
