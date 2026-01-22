import React from "react";
import Widget from "components/widget/Widget";

const EvikaMain = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Kelola kriteria, indikator, pertanyaan, dan penilaian untuk evaluasi kawasan konservasi
        </p>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        <Widget
          title={""}
          subtitle={"Kriteria"}
          path={"/admin/evika/kriteria"}
        />
        <Widget
          title={""}
          subtitle={"Indikator"}
          path={"/admin/evika/indikator"}
        />
        <Widget
          title={""}
          subtitle={"Pertanyaan"}
          path={"/admin/evika/pertanyaan"}
        />
        <Widget
          title={""}
          subtitle={"Penilaian"}
          path={"/admin/evika/penilaian"}
        />
        <Widget
          title={""}
          subtitle={"Laporan Penilaian"}
          path={"/admin/evika/laporan"}
        />
      </div>
    </div>
  );
};

export default EvikaMain;
