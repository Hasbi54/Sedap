import PageHeader from "../components/PageHeader";
import { FaArrowDown, FaArrowUp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-page" className="space-y-5">
            {/* PageHeader dengan props */}
            <PageHeader
                title="Dashboard"
                breadcrumb={["Home", "Dashboard"]}
            >
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Export Data</button>
            </PageHeader>

            {/* Count Section */}
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Orders */}
                <div id="count-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4">
                        <FaArrowUp className="text-3xl text-white" />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold">120</span>
                        <span id="orders-text" className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                {/* Delivered */}
                <div id="count-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-blue-500 rounded-full p-4">
                        <FaCheckCircle className="text-3xl text-white" />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold">95</span>
                        <span id="delivered-text" className="text-gray-400">Delivered</span>
                    </div>
                </div>

                {/* Canceled */}
                <div id="count-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-red-500 rounded-full p-4">
                        <FaTimesCircle className="text-3xl text-white" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold">10</span>
                        <span id="canceled-text" className="text-gray-400">Canceled</span>
                    </div>
                </div>

                {/* Revenue */}
                <div id="count-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-yellow-500 rounded-full p-4">
                        <FaArrowDown className="text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-count" className="text-2xl font-bold">$8,200</span>
                        <span id="revenue-text" className="text-gray-400">Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
