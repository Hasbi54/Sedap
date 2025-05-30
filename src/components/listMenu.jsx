import { FaPeopleCarry } from "react-icons/fa"; 
import { FiBox } from "react-icons/fi"; 
import { MdDashboardCustomize } from "react-icons/md"; 
import { NavLink } from "react-router-dom"; // Pastikan NavLink diimpor
import { MdFastfood } from 'react-icons/md';


export default function ListMenu() {
    return (
        <ul id="menu-list" className="space-y-3">
            <li>
                <NavLink 
                    to="/" 
                    id="menu-1" 
                    className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                >
                    <MdDashboardCustomize className="mr-4 text-xl" /> Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/orders" 
                    id="menu-2" 
                    className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                >
                    <FiBox className="mr-4 text-xl"/> Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/customers" 
                    id="menu-3" 
                    className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                >
                    <FaPeopleCarry className="mr-4 text-xl"/> Customers
                </NavLink>
            </li>
            {/* Menambahkan NavLink untuk menu Users */}
            <li>
                <NavLink 
                    to="/users" 
                    id="menu-4" 
                    className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                >
                    <MdDashboardCustomize className="mr-4 text-xl" /> Users
                </NavLink>
            </li>
            <li>
    <NavLink
            id="menu-4"
            to="/products"
            className={menuClass}
        >
            <MdFastfood className="mr-4 text-xl" />
            Products
    </NavLink>
</li>
            
        </ul>
    );
}
