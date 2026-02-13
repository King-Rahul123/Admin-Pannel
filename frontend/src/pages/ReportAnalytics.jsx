import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const Card = ({ id, title, value, color, icon, activeChart, setActive }) => (
    <div onClick={() => setActive(id)} className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:scale-105 ${color}${activeChart === id ? "ring-2 ring-white scale-105" : ""}`}>
        <div className="flex items-center justify-between text-white">
            <div>
                <h2 className="text-sm font-medium opacity-90">{title}</h2>
                <p className="text-2xl font-bold mt-2">{value}</p>
            </div>

            <div className="text-3xl opacity-80">
                <i className={icon}></i>
            </div>
        </div>
    </div>
);

export default function ReportsAnalytics() {

    const [selectedReport, setSelectedReport] = useState("all");
    const [activeChart, setActiveChart] = useState("growth");

    // Sample Data
    const salesData = [
        { month: "Jan", value: 400 },
        { month: "Feb", value: 600 },
        { month: "Mar", value: 800 },
        { month: "Apr", value: 700 },
    ];

    const revenueData = [
        { month: "Jan", value: 4000 },
        { month: "Feb", value: 6000 },
        { month: "Mar", value: 8000 },
        { month: "Apr", value: 7000 },
    ];

    const productData = [
        { name: "Laptop", value: 400 },
        { name: "Mobile", value: 300 },
        { name: "Tablet", value: 200 },
    ];

    const inventoryData = [
        { name: "In Stock", value: 120 },
        { name: "Low Stock", value: 18 },
    ];

    const returnData = [
        { name: "Returns", value: 20 },
        { name: "Warranty", value: 12 },
    ];

    const marketingData = [
        { month: "Jan", value: 2.1 },
        { month: "Feb", value: 3.5 },
        { month: "Mar", value: 4.2 },
        { month: "Apr", value: 3.8 },
    ];

    const growthData = [
        { month: "Jan", value: 5 },
        { month: "Feb", value: 10 },
        { month: "Mar", value: 15 },
        { month: "Apr", value: 18 },
    ];

    const renderChart = () => {
        switch (activeChart) {

            case "product":
                return (
                    <PieChart>
                        <Pie data={productData} dataKey="value" outerRadius={100}>
                            {productData.map((_, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                );

            case "inventory":
                return (
                    <BarChart data={inventoryData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#f59e0b" />
                    </BarChart>
                );

            case "returns":
                return (
                    <PieChart>
                        <Pie data={returnData} dataKey="value" outerRadius={100}>
                            {returnData.map((_, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                );

            case "marketing":
                return (
                    <LineChart data={marketingData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#ec4899" />
                    </LineChart>
                );

            case "sales":
                return (
                    <LineChart data={salesData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                    </LineChart>
                );

            case "revenue":
                return (
                    <LineChart data={revenueData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#10b981" />
                    </LineChart>
                );

            default:
                return (
                    <LineChart data={growthData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#6366f1" />
                    </LineChart>
                );
        }
    };

    return (
        <div className="p-6 space-y-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="block space-y-1">
                    <h1 className="text-3xl font-bold">Reports & Analytics</h1>
                    <p className="text-gray-500 text-2sm">Clicking on a card will display the corresponding chart below.</p>
                </div>

                <select value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)} className="mt-4 md:mt-0 border px-4 py-2 rounded">
                    <option value="all">All Reports</option>
                    <option value="sales">Sells Report</option>
                    <option value="revenue">Revenue Analytics</option>
                    <option value="product">Product Performance</option>
                    <option value="inventory">Inventory Report</option>
                    <option value="returns">Return & Warranty</option>
                    <option value="marketing">Marketing Performance</option>
                    <option value="growth">Overall Growth</option>
                </select>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {(selectedReport === "all" || selectedReport === "sales") &&
                    <Card id="sales" icon="fas fa-chart-line" title="Total Sales" value="12,540 Orders" color="bg-blue-600" setActive={setActiveChart} />
                }

                {(selectedReport === "all" || selectedReport === "revenue") &&
                    <Card id="revenue" icon="fas fa-coins" title="Total Revenue" value="₹ 245,800" color="bg-green-600" setActive={setActiveChart} />
                }

                {(selectedReport === "all" || selectedReport === "product") &&
                    <Card id="product" icon="fas fa-box-open" title="Top Product" value="Gaming Laptop" color="bg-purple-600" setActive={setActiveChart} />
                }

                {(selectedReport === "all" || selectedReport === "inventory") &&
                    <Card id="inventory" icon="fas fa-warehouse" title="Low Stock Items" value="18 Products" color="bg-orange-500" setActive={setActiveChart} />
                }

                {(selectedReport === "all" || selectedReport === "returns") &&
                    <Card id="returns" icon="fas fa-undo" title="Returns & Warranty" value="32 Cases" color="bg-red-500" setActive={setActiveChart} />
                }

                {(selectedReport === "all" || selectedReport === "marketing") &&
                    <Card id="marketing" icon="fas fa-bullhorn" title="Marketing Conversion" value="4.2%" color="bg-pink-500" setActive={setActiveChart} />
                }

                {(selectedReport === "growth") &&
                    <Card id="growth" icon="fas fa-arrow-trend-up" title="Overall Growth" value="+18% This Month" color="bg-indigo-600" setActive={setActiveChart} />
                }
            </div>

            {/* Chart Section */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 uppercase">{activeChart}</h2>

                <div className="h-80 -ml-10 md:-ml-5 md:mr-10">
                    <ResponsiveContainer width="100%" height="100%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
}