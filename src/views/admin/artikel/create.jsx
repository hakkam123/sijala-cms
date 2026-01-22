import React, { useState } from "react";
import Card from "components/card";
import { MdArrowBack, MdImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const ArtikelCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
    date: new Date().toISOString().split("T")[0],
    status: "draft",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e, status) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ ...formData, status });
    alert(`Artikel berhasil ${status === "published" ? "dipublikasikan" : "disimpan sebagai draft"}!`);
    navigate("/admin/artikel");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Tambah Artikel Baru
        </h2>

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4">
              <InputField
                label="Judul Artikel"
                placeholder="Masukkan judul artikel"
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />

              <TextField
                label="Deskripsi Singkat"
                placeholder="Masukkan deskripsi singkat artikel (maks 200 karakter)"
                id="description"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />

              <div>
                <label className="text-sm text-navy-700 dark:text-white font-bold mb-2 block">
                  Konten Artikel
                </label>
                <textarea
                  rows={15}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="mt-2 flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:border-navy-600 dark:bg-navy-700 dark:text-white resize-y"
                  placeholder="Tulis konten artikel di sini...&#10;&#10;Anda bisa menggunakan formatting sederhana atau integrasi dengan rich text editor seperti:&#10;- TinyMCE&#10;- Quill&#10;- Draft.js&#10;- React-Draft-Wysiwyg"
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Tip: Untuk editor yang lebih canggih, pertimbangkan menggunakan plugin seperti react-quill atau tinymce-react
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card extra="p-4">
                <h3 className="text-lg font-bold text-navy-700 dark:text-white mb-4">
                  Gambar Artikel
                </h3>
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-gray-300 dark:border-navy-600 rounded-lg p-4 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData({ ...formData, image: null });
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div className="py-8">
                        <MdImage className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Upload gambar artikel
                        </p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-500 file:text-white hover:file:bg-brand-600 file:cursor-pointer"
                  />
                </div>
              </Card>

              <Card extra="p-4">
                <h3 className="text-lg font-bold text-navy-700 dark:text-white mb-4">
                  Pengaturan
                </h3>
                <div className="space-y-3">
                  <InputField
                    label="Tanggal Publikasi"
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
              </Card>

              <Card extra="p-4">
                <h3 className="text-lg font-bold text-navy-700 dark:text-white mb-4">
                  Aksi
                </h3>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "draft")}
                    className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Simpan sebagai Draft
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "published")}
                    className="w-full bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
                  >
                    Publikasikan
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ArtikelCreate;
