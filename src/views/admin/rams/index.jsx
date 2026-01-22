import React from "react";
import Widget from "components/widget/Widget";

const RamsMain = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Kelola sistem pelampung dan temuan di kawasan konservasi Raja Ampat
        </p>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Widget
          title={""}
          subtitle={"Temuan Mooring"}
          path={"/admin/rams/temuan"}
        />
        {/* <Widget
          title={""}
          subtitle={"Peta Sebaran"}
          path={"/admin/rams/peta"}
        />
        <Widget
          title={""}
          subtitle={"Validasi Temuan"}
          path={"/admin/rams/validasi"}
        />
        <Widget
          title={""}
          subtitle={"Laporan"}
          path={"/admin/rams/laporan"}
        /> */}
      </div>
    </div>
  );
};

export default RamsMain;
