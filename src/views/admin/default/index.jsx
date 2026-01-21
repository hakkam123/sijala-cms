import Widget from "components/widget/Widget";


const Dashboard = () => {
  return (
    <div>
      {/* Menu widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          title={""}
          subtitle={"Hero Section"}
          path={"/admin/default/hero-section"}
        />
        <Widget
          title={""}
          subtitle={"Secondary Section"}
          path={"/admin/default/secondary-section"}
        />
        <Widget
          title={""}
          subtitle={"Capaian Kami Section"}
          path={"/admin/default/capaian-kami"}
        />
        <Widget
          title={""}
          subtitle={"Impact Banner Section"}
          path={"/admin/default/impact-banner"}
        />
        <Widget
          title={""}
          subtitle={"Peta Kawasan Section"}
          path={"/admin/default/peta-kawasan"}
        />
        <Widget
          title={""}
          subtitle={"Final Hero Banner Section"}
          path={"/admin/default/final-hero"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
