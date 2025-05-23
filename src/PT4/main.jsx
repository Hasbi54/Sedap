import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./frameworklist";
import frameworkListSearchFilter from "./frameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import Tugas1 from "./Tugas1"
createRoot (document.getElementById("root"))
    .render(
        <div>
         {/* <FrameworkList/> */}     
         <Tugas1 />
         {/*<ResponsiveDesign/>*/}    
        </div>
    )