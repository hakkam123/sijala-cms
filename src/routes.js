import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import HeroSection from "views/admin/default/hero-section";
import SecondarySection from "views/admin/default/secondary-section";
import CapaianKami from "views/admin/default/capaian-kami";
import ImpactBanner from "views/admin/default/impact-banner";
import PetaKawasan from "views/admin/default/peta-kawasan";
import FinalHero from "views/admin/default/final-hero";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdInfo,
  MdMap,
  MdMiscellaneousServices,
  MdLock,
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
    name: "Tentang Kami",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdInfo className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Kawasan Konservasi",
    layout: "/admin",
    icon: <MdMap className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Layanan Kami",
    layout: "/admin",
    path: "profile",
    icon: <MdMiscellaneousServices className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    hidden: true,
  },
  {
    name: "Hero Section",
    layout: "/admin",
    path: "default/hero-section",
    component: <HeroSection />,
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
    name: "Capaian Kami",
    layout: "/admin",
    path: "default/capaian-kami",
    component: <CapaianKami />,
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
    name: "Peta Kawasan",
    layout: "/admin",
    path: "default/peta-kawasan",
    component: <PetaKawasan />,
    hidden: true,
  },
  {
    name: "Final Hero",
    layout: "/admin",
    path: "default/final-hero",
    component: <FinalHero />,
    hidden: true,
  },
];
export default routes;