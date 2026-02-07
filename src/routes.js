import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Landing Section Imports
import HeroSection from "views/admin/default/hero-section";
import HeroSectionCreate from "views/admin/default/hero-section/create";
import HeroSectionEdit from "views/admin/default/hero-section/edit";
import SecondarySection from "views/admin/default/secondary-section";
import SecondarySectionCreate from "views/admin/default/secondary-section/create";
import SecondarySectionEdit from "views/admin/default/secondary-section/edit";
import CapaianKami from "views/admin/default/capaian-kami";
import CapaianKamiCreate from "views/admin/default/capaian-kami/create";
import CapaianKamiEdit from "views/admin/default/capaian-kami/edit";
import ImpactBanner from "views/admin/default/impact-banner";
import ImpactBannerCreate from "views/admin/default/impact-banner/create";
import ImpactBannerEdit from "views/admin/default/impact-banner/edit";
import PetaKawasan from "views/admin/default/peta-kawasan";
import PetaKawasanCreate from "views/admin/default/peta-kawasan/create";
import PetaKawasanEdit from "views/admin/default/peta-kawasan/edit";
import FinalHero from "views/admin/default/final-hero";
import FinalHeroCreate from "views/admin/default/final-hero/create";
import FinalHeroEdit from "views/admin/default/final-hero/edit";

// EVIKA Imports
import EvikaMain from "views/admin/evika";
import KriteriaManagement from "views/admin/evika/kriteria";
import KriteriaCreate from "views/admin/evika/kriteria/create";
import KriteriaEdit from "views/admin/evika/kriteria/edit";
import IndikatorManagement from "views/admin/evika/indikator";
import IndikatorCreate from "views/admin/evika/indikator/create";
import IndikatorEdit from "views/admin/evika/indikator/edit";
import PertanyaanManagement from "views/admin/evika/pertanyaan";
import PertanyaanCreate from "views/admin/evika/pertanyaan/create";
import PertanyaanEdit from "views/admin/evika/pertanyaan/edit";
import PenilaianManagement from "views/admin/evika/penilaian";
import PenilaianCreate from "views/admin/evika/penilaian/create";
import PenilaianEdit from "views/admin/evika/penilaian/edit";
import PenilaianDetail from "views/admin/evika/penilaian/detail";
import LaporanPenilaian from "views/admin/evika/laporan";

// Artikel Imports
import ArtikelManagement from "views/admin/artikel";
import ArtikelCreate from "views/admin/artikel/create";

// RAMS Imports
import RamsMain from "views/admin/rams";
import TemuanManagement from "views/admin/rams/temuan";
import TemuanCreate from "views/admin/rams/temuan/create";
import TemuanEdit from "views/admin/rams/temuan/edit";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdInfo,
  MdMap,
  MdMiscellaneousServices,
  MdLock,
  MdAssessment,
  MdArticle,
  MdAnchor,
} from "react-icons/md";

const routes = [
  {
    name: "Landing Page",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "EVIKA",
    layout: "/admin",
    path: "evika",
    icon: <MdAssessment className="h-6 w-6" />,
    component: <EvikaMain />,
    hidden: true,
  },
  {
    name: "Berita",
    layout: "/admin",
    path: "artikel",
    icon: <MdArticle className="h-6 w-6" />,
    component: <ArtikelManagement />,
  },
  {
    name: "RAMS",
    layout: "/admin",
    path: "rams",
    icon: <MdAnchor className="h-6 w-6" />,
    component: <RamsMain />,
    hidden: true,
  },
  {
    name: "Tentang Kami",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdInfo className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
    hidden: true,
  },
  {
    name: "Kawasan Konservasi",
    layout: "/admin",
    icon: <MdMap className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
    hidden: true,
  },
  {
    name: "Layanan Kami",
    layout: "/admin",
    path: "profile",
    icon: <MdMiscellaneousServices className="h-6 w-6" />,
    component: <Profile />,
    hidden: true,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    hidden: true,
  },
  // EVIKA Routes
  {
    name: "EVIKA Kriteria",
    layout: "/admin",
    path: "evika/kriteria",
    component: <KriteriaManagement />,
    hidden: true,
  },
  {
    name: "EVIKA Kriteria Create",
    layout: "/admin",
    path: "evika/kriteria/create",
    component: <KriteriaCreate />,
    hidden: true,
  },
  {
    name: "EVIKA Kriteria Edit",
    layout: "/admin",
    path: "evika/kriteria/edit/:id",
    component: <KriteriaEdit />,
    hidden: true,
  },
  {
    name: "EVIKA Indikator",
    layout: "/admin",
    path: "evika/indikator",
    component: <IndikatorManagement />,
    hidden: true,
  },
  {
    name: "EVIKA Indikator Create",
    layout: "/admin",
    path: "evika/indikator/create",
    component: <IndikatorCreate />,
    hidden: true,
  },
  {
    name: "EVIKA Indikator Edit",
    layout: "/admin",
    path: "evika/indikator/edit/:id",
    component: <IndikatorEdit />,
    hidden: true,
  },
  {
    name: "EVIKA Pertanyaan",
    layout: "/admin",
    path: "evika/pertanyaan",
    component: <PertanyaanManagement />,
    hidden: true,
  },
  {
    name: "EVIKA Pertanyaan Create",
    layout: "/admin",
    path: "evika/pertanyaan/create",
    component: <PertanyaanCreate />,
    hidden: true,
  },
  {
    name: "EVIKA Pertanyaan Edit",
    layout: "/admin",
    path: "evika/pertanyaan/edit/:id",
    component: <PertanyaanEdit />,
    hidden: true,
  },
  {
    name: "EVIKA Penilaian",
    layout: "/admin",
    path: "evika/penilaian",
    component: <PenilaianManagement />,
    hidden: true,
  },
  {
    name: "EVIKA Penilaian Create",
    layout: "/admin",
    path: "evika/penilaian/create",
    component: <PenilaianCreate />,
    hidden: true,
  },
  {
    name: "EVIKA Penilaian Edit",
    layout: "/admin",
    path: "evika/penilaian/edit/:id",
    component: <PenilaianEdit />,
    hidden: true,
  },
  {
    name: "EVIKA Penilaian Detail",
    layout: "/admin",
    path: "evika/penilaian/:id",
    component: <PenilaianDetail />,
    hidden: true,
  },
  {
    name: "EVIKA Laporan",
    layout: "/admin",
    path: "evika/laporan",
    component: <LaporanPenilaian />,
    hidden: true,
  },
  // Artikel Routes
  {
    name: "Tambah Artikel",
    layout: "/admin",
    path: "artikel/create",
    component: <ArtikelCreate />,
    hidden: true,
  },
  {
    name: "RAMS Temuan",
    layout: "/admin",
    path: "rams/temuan",
    component: <TemuanManagement />,
    hidden: true,
  },
  {
    name: "RAMS Temuan Create",
    layout: "/admin",
    path: "rams/temuan/create",
    component: <TemuanCreate />,
    hidden: true,
  },
  {
    name: "RAMS Temuan Edit",
    layout: "/admin",
    path: "rams/temuan/edit/:id",
    component: <TemuanEdit />,
    hidden: true,
  },
  {
    name: "Edit Artikel",
    layout: "/admin",
    path: "artikel/edit/:id",
    component: <ArtikelCreate />,
    hidden: true,
  },
  // Landing Page Section Routes
  {
    name: "Hero Section",
    layout: "/admin",
    path: "default/hero-section",
    component: <HeroSection />,
    hidden: true,
  },
  {
    name: "Hero Section Create",
    layout: "/admin",
    path: "default/hero-section/create",
    component: <HeroSectionCreate />,
    hidden: true,
  },
  {
    name: "Hero Section Edit",
    layout: "/admin",
    path: "default/hero-section/edit/:id",
    component: <HeroSectionEdit />,
    hidden: true,
  },
  {
    name: "Secondary Section",
    layout: "/admin",
    path: "default/secondary-section",
    component: <SecondarySection />,
    hidden: true,
  },
  {
    name: "Secondary Section Create",
    layout: "/admin",
    path: "default/secondary-section/create",
    component: <SecondarySectionCreate />,
    hidden: true,
  },
  {
    name: "Secondary Section Edit",
    layout: "/admin",
    path: "default/secondary-section/edit/:id",
    component: <SecondarySectionEdit />,
    hidden: true,
  },
  {
    name: "Capaian Kami",
    layout: "/admin",
    path: "default/capaian-kami",
    component: <CapaianKami />,
    hidden: true,
  },
  {
    name: "Capaian Kami Create",
    layout: "/admin",
    path: "default/capaian-kami/create",
    component: <CapaianKamiCreate />,
    hidden: true,
  },
  {
    name: "Capaian Kami Edit",
    layout: "/admin",
    path: "default/capaian-kami/edit/:id",
    component: <CapaianKamiEdit />,
    hidden: true,
  },
  {
    name: "Impact Banner",
    layout: "/admin",
    path: "default/impact-banner",
    component: <ImpactBanner />,
    hidden: true,
  },
  {
    name: "Impact Banner Create",
    layout: "/admin",
    path: "default/impact-banner/create",
    component: <ImpactBannerCreate />,
    hidden: true,
  },
  {
    name: "Impact Banner Edit",
    layout: "/admin",
    path: "default/impact-banner/edit/:id",
    component: <ImpactBannerEdit />,
    hidden: true,
  },
  {
    name: "Peta Kawasan",
    layout: "/admin",
    path: "default/peta-kawasan",
    component: <PetaKawasan />,
    hidden: true,
  },
  {
    name: "Peta Kawasan Create",
    layout: "/admin",
    path: "default/peta-kawasan/create",
    component: <PetaKawasanCreate />,
    hidden: true,
  },
  {
    name: "Peta Kawasan Edit",
    layout: "/admin",
    path: "default/peta-kawasan/edit/:id",
    component: <PetaKawasanEdit />,
    hidden: true,
  },
  {
    name: "Final Hero",
    layout: "/admin",
    path: "default/final-hero",
    component: <FinalHero />,
    hidden: true,
  },
  {
    name: "Final Hero Create",
    layout: "/admin",
    path: "default/final-hero/create",
    component: <FinalHeroCreate />,
    hidden: true,
  },
  {
    name: "Final Hero Edit",
    layout: "/admin",
    path: "default/final-hero/edit/:id",
    component: <FinalHeroEdit />,
    hidden: true,
  },
];
export default routes;