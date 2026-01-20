import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Title mappings for paths
const titleMap = {
  "/Smart-manpower-temporary-transfer/send-manpower":
    "Send Manpower (ส่งคนออกช่วยงาน)",
  "/Smart-manpower-temporary-transfer/receive-manpower":
    "Receive Manpower (รับคนช่วยงาน)",
  "/Smart-manpower-temporary-transfer/summary-manpower": "Summary Manpower",
  "/Smart-manpower-temporary-transfer/summary-mh-by-cc":
    "Summary Man Hour by CC",
};

function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Update title based on the current path
    setTitle(titleMap[location.pathname]);
  }, [location]);

  return <a className=" font-semibold text-3xl mx-4">{title}</a>;
}

export default Title;
