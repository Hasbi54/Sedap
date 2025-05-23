import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailWindCSS"; // Pastikan ini adalah komponen React yang valid
import "./tailwind.css"; // Import CSS untuk Tailwind
import HitungGajiForm from "./HitungGajiForm"; 
import UserForm from "./UserForm";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <HitungGajiForm/>
            <UserForm/>
           {/* <TailwindCSS/>*/}
        </div>
       
    )