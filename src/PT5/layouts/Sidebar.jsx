import { FaPeopleCarry } from "react-icons/fa"; 
import { FiBox } from "react-icons/fi"; 
import { BsBorderStyle } from "react-icons/bs"; 
import { MdDashboardCustomize } from "react-icons/md"; 
import ListMenu from "../components/listMenu"; 

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900 font-extrabold">
                    Hasbi Alfarisi <b id="logo-dot" className="text-green-500">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Modern Admin Dashboard
                </span> 
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ListMenu />
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-green-500 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        className="w-20 rounded-full"
                        src="https://avatar.iran.liara.run/public/28"
                        alt="Avatar"
                    />
                </div>
                <span id="footer-brand" className=" font-bold text-gray-400 ">
                    Sedap Restaurant Admin Dashboard
                </span>
                <p id="footer-copyright" className="font-light text-gray-400">
                    &copy; 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}
