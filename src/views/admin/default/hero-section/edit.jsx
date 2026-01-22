import React, { useState, useEffect } from "react";
import Card from "components/card";
import { MdArrowBack, MdVideoLibrary } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

const HeroSectionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoPreview, setVideoPreview] = useState(null);
  
  const [formData, setFormData] = useState({
    video: null,
    title: "",
    subtitle: "",
    description: "",
  });

  // Load existing data
  useEffect(() => {
    // Here you would typically fetch the data from your backend using the id
    // For now, using dummy data
    const existingData = {
      id: id,
      video: "/path/to/video1.mp4",
      title: "Kawasan Konservasi di Perairan Kepulauan Raja Ampat",
      subtitle: "RAJA AMPAT",
      description: "Jelajahi keindahan bawah laut Raja Ampat",
    };
    setFormData(existingData);
    setVideoPreview(existingData.video);
  }, [id]);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, video: file });
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ id, ...formData });
    alert("Hero Section berhasil diupdate!");
    navigate("/admin/default/hero-section");
  };

  return (
    <div className="mt-5 animate-fade-in">
      <Card extra="p-5">
        <button
          onClick={() => navigate("/admin/default/hero-section")}
          className="mb-4 flex items-center text-gray-600 hover:text-brand-500 transition-colors"
        >
          <MdArrowBack className="h-5 w-5 mr-2" />
          Kembali
        </button>

        <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
          Edit Hero Section
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Video Upload */}
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Video Background
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-navy-600 rounded-lg p-4">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                  id="video-upload"
                />
                <label
                  htmlFor="video-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {videoPreview ? (
                    <video
                      src={videoPreview}
                      className="w-full max-h-64 rounded-lg"
                      controls
                    />
                  ) : (
                    <div className="text-center">
                      <MdVideoLibrary className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Klik untuk upload video baru
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Title */}
            <InputField
              label="Judul"
              placeholder="Masukkan judul hero section"
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />

            {/* Subtitle */}
            <InputField
              label="Subtitle"
              placeholder="Masukkan subtitle"
              id="subtitle"
              type="text"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
              required
            />

            {/* Description */}
            <TextField
              label="Deskripsi"
              placeholder="Masukkan deskripsi hero section"
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/default/hero-section")}
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

export default HeroSectionEdit;
