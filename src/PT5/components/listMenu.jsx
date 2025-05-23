import { FaPeopleCarry } from "react-icons/fa"; 
import { FiBox } from "react-icons/fi"; 
import { MdDashboardCustomize } from "react-icons/md"; 

export default function ListMenu() {
    return (
        <ul id="menu-list" className="space-y-3">
            <li>
                <div id="menu-1" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <MdDashboardCustomize className="mr-4 text-xl" /> Dashboard
                </div>
            </li>
            <li>
                <div id="menu-2" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <FiBox className="mr-4 text-xl"/> Orders
                </div>
            </li>
            <li>
                <div id="menu-3" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                    <FaPeopleCarry className="mr-4 text-xl"/> Customers
                </div>
            </li>
        </ul>
    );
}
