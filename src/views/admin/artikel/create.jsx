import React, { useState, useRef } from "react";
import Card from "components/card";
import { useNavigate, Link } from "react-router-dom";
import { MdArticle } from "react-icons/md";
import { Editor } from "@tinymce/tinymce-react";

const ArtikelCreate = () => {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [formData, setFormData] = useState({
    judul: "",
    slug: "",
    konten: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get content from TinyMCE editor
    const content = editorRef.current ? editorRef.current.getContent() : "";
    const dataToSubmit = { ...formData, konten: content };
    console.log("Submitting:", dataToSubmit);
    alert("Berita berhasil disimpan!");
    navigate("/admin/artikel");
  };

  // Auto-generate slug from judul
  const handleJudulChange = (e) => {
    const judul = e.target.value;
    const slug = judul
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    setFormData({ ...formData, judul, slug });
  };

  return (
    <div className="mt-5 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <Link to="/admin/artikel" className="flex items-center gap-1 hover:text-brand-500">
          <MdArticle className="h-4 w-4" />
        </Link>
        <span>/</span>
        <span className="text-navy-700 dark:text-white">Tambah Berita</span>
      </div>

      <Card extra="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">
            Tambah Berita
          </h2>
          <button
            onClick={handleSubmit}
            className="bg-brand-500 text-white px-6 py-2 rounded-lg hover:bg-brand-600 transition-colors text-sm font-medium"
          >
            Kirim
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Judul and Slug in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Judul Field */}
            <div>
              <input
                type="text"
                placeholder="Judul"
                value={formData.judul}
                onChange={handleJudulChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-navy-600 dark:bg-navy-800 dark:text-white rounded-xl text-sm focus:outline-none focus:border-brand-500 bg-gray-50"
                required
              />
            </div>
            {/* Slug Field */}
            <div>
              <input
                type="text"
                placeholder="Slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 dark:border-navy-600 dark:bg-navy-800 dark:text-white rounded-xl text-sm focus:outline-none focus:border-brand-500 bg-gray-50"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-navy-700 dark:text-white font-medium mb-2 block">
              Konten
            </label>
            <Editor
              apiKey="3h584ksspat2sh1hzndwpbvv2cxr8lc9lp5csh13fu5rejzb"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "fontfamily fontsize | " +
                  "bold underline italic | alignleft aligncenter " +
                  "alignright alignjustify | link",
                font_family_formats:
                  "Roboto=Roboto, sans-serif; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Georgia=georgia,palatino; Helvetica=helvetica; Times New Roman=times new roman,times; Verdana=verdana,geneva",
                fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",
                content_style:
                  "body { font-family: Roboto, sans-serif; font-size: 14px; }",
                placeholder: "Ketik disini...",
                skin: "oxide",
                content_css: "default",
                branding: false,
                statusbar: false,
                resize: true,
                toolbar_mode: "sliding",
              }}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ArtikelCreate;
