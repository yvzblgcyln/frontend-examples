import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import React, { useMemo, useState } from "react";

function DashboardLayout() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return { name: "mehmet" };
  }, [number]);

  return (
    <div>
      <div id="content">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default React.memo(DashboardLayout);
