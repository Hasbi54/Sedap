import { createRoot } from "react-dom/client";
import './assets/tailwind.css';

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div className="flex-1 p-4">
    <Header />
    
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
    </Routes>
</div>
);
