// =========================================
// 📁 routes/config.tsx
// =========================================

import React from "react";

// =========================================
// 🧩 ICON IMPORTS
// =========================================

// 🟦 DASHBOARD ICONS
// import DashboardPIC from "@/assets/icon/menuDrawer/dashboard/dashboard.png";

// import IOTPIC from "@/assets/icon/menuDrawer/dashboard/iot.png";
// import SMTPIC from "@/assets/icon/menuDrawer/dashboard/smt-dashboard.png";
// import FPCPIC from "@/assets/icon/menuDrawer/dashboard/fpc-dashboard.png";
// import AutoLockPIC from "@/assets/icon/menuDrawer/dashboard/auto-lock-system.png";
// import AIPIC from "@/assets/icon/menuDrawer/dashboard/ai.png";

// 🟩 GENERAL ICONS
import WorkEfficiencyPIC from "@/assets/icon/menuDrawer/general/work-efficiency.png";
import HRKandaPIC from "@/assets/icon/menuDrawer/general/hr-kanda.png";
import FoxConnPIC from "@/assets/icon/menuDrawer/general/foxconn.png";
import MiniStorePIC from "@/assets/icon/menuDrawer/general/store.png";
import MachineIcon from "@/assets/icon/menuDrawer/production/machine.png";
import CpkIcon from "@/assets/icon/menuDrawer/production/cpk_icon.png";
// 🟧 PRODUCTION ICONS
import EWorkingPIC from "@/assets/icon/menuDrawer/production/fpc-eworking.png";
import FpcPrdPIC from "@/assets/icon/menuDrawer/production/fpc-production.png";
import SmtPrdPIC from "@/assets/icon/menuDrawer/production/smt-production.png";
import PtePIC from "@/assets/icon/menuDrawer/production/pte-aut.png";
import QaPIC from "@/assets/icon/menuDrawer/production/qa.png";
import HistoryIcon from "@/assets/icon/menuDrawer/production/history_icon.png";

// 🟧 Internal ICONS
import instruction from "@/assets/icon/menuDrawer/instruction/instruction.png";

// =========================================
// 🧭 PAGE IMPORTS (Lazy Loading)
// =========================================
const Home = React.lazy(() => import("@/pages/"));
const MCStatus = React.lazy(() => import("@/pages/MCStatus/main/MCStatus"));
const CpkMonitoring = React.lazy(
  () => import("@/pages/CpkMonitoring/main/main")
);
const HistoryMcStatus = React.lazy(
  () => import("@/pages/HistoryMcStatus/main/HistoryMcStatus")
);

// =========================================
// ⚙️ BASE CONFIG
// =========================================
export const BASE = "/smart-fai-mc-accuracy";

export type AppRoute = {
  path: string; // เส้นทางสำหรับหน้าที่จะไป
  element: React.ReactNode; // code หลักของหน้า
  label?: string; // สำหรับไว้สร้าง label
  Title?: string; // สำหรับไว้สร้าง Title
  isDefault?: boolean; // true กรณีต้องการให้เป็น page หลัก
  icon: any; // ไม่ต้องการแสดงส่ง null
};

// =========================================
// 🟦 DASHBOARD ROUTES
// =========================================
export const routes: AppRoute[] = [];

// =========================================
// 🟩 GENERAL ROUTES
// =========================================
export const routes_general: AppRoute[] = [
  {
    path: `${BASE}/general/work-efficiency`,
    element: <Home />,
    label: "Work Efficiency",
    Title: "Work Efficiency",
    icon: WorkEfficiencyPIC,
  },
  {
    path: `${BASE}/general/hr-kanda`,
    element: <Home />,
    label: "HR Kanda 4.0",
    Title: "HR Kanda 4.0",
    icon: HRKandaPIC,
  },
  {
    path: `${BASE}/general/fox-conn`,
    element: <Home />,
    label: "Fox Conn",
    Title: "Fox Conn",
    icon: FoxConnPIC,
  },
  {
    path: `${BASE}/general/mini-store`,
    element: <Home />,
    label: "Mini Store Sucha 4.0",
    Title: "Mini Store Sucha 4.0",
    icon: MiniStorePIC,
  },
];

// =========================================
// 🟧 PRODUCTION ROUTES
// =========================================
export const routes_prd: AppRoute[] = [
  {
    path: `${BASE}/prd/e-working`,
    element: <Home />,
    label: "e-Working",
    Title: "e-Working",
    icon: EWorkingPIC,
  },
  {
    path: `${BASE}/prd/fpc-prd`,
    element: <Home />,
    label: "FPC Production",
    Title: "FPC Production",
    icon: FpcPrdPIC,
  },
  {
    path: `${BASE}/prd/smt-prd`,
    element: <Home />,
    label: "SMT Production",
    Title: "SMT Production",
    icon: SmtPrdPIC,
  },
  {
    path: `${BASE}/prd/pte`,
    element: <Home />,
    label: "PTE",
    Title: "PTE",
    icon: PtePIC,
  },
  {
    path: `${BASE}/prd/qa`,
    element: <Home />,
    label: "QA",
    Title: "QA",
    icon: QaPIC,
  },
];

export const routes_flat: AppRoute[] = [
  {
    path: `${BASE}/mc-status`,
    element: <MCStatus />,
    label: "Machine Status",
    Title: "Machine Status",
    icon: MachineIcon,
  },
  {
    path: `${BASE}/cpk-monitoring`,
    element: <CpkMonitoring />,
    label: "Cpk Monitoring",
    Title: "Cpk Monitoring",
    icon: CpkIcon,
  },
  {
    path: `${BASE}/history-mc-status`,
    element: <HistoryMcStatus />,
    label: "History Machine Status",
    Title: "History Machine Status",
    icon: HistoryIcon,
  },
];

export const routes_External: AppRoute[] = [
  {
    path: `http://10.17.66.242/Smart-Upload/dashboardhub`,
    element: <Home />,
    label: "Instruction",
    Title: "Instruction",
    icon: instruction,
  },
];

export const allRoutes: AppRoute[] = [
  ...routes,
  ...routes_general,
  ...routes_prd,
  ...routes_flat,
];
