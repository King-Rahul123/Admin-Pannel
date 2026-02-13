import { useState } from "react";            //add useMemo and remove comment for backend use and also remove sample data
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function Payment() {

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const payments = [
        { id: 1, orderId: "#ORD1001", customer: "Rahul Adak", amount: 25000, method: "UPI", status: "Completed", date: "2025-02-01" },
        { id: 2, orderId: "#ORD1002", customer: "Amit Kumar", amount: 12000, method: "Card", status: "Pending", date: "2025-02-02" },
        { id: 3, orderId: "#ORD1003", customer: "Neha Sharma", amount: 18000, method: "Net Banking", status: "Failed", date: "2025-02-03" },
        { id: 4, orderId: "#ORD1004", customer: "Riya Sen", amount: 30000, method: "UPI", status: "Refunded", date: "2025-02-04" },
        { id: 5, orderId: "#ORD1005", customer: "Kunal Das", amount: 40000, method: "Card", status: "Completed", date: "2025-02-05" },
    ];

    // ======================
    // FILTER + SEARCH
    // ======================

    // const filteredPayments = useMemo(() => {
    //     return payments.filter(p =>
    //         (statusFilter === "All" || p.status === statusFilter) &&
    //         (p.customer.toLowerCase().includes(search.toLowerCase()) ||
    //          p.orderId.toLowerCase().includes(search.toLowerCase()))
    //     );
    // }, [search, statusFilter]);

    // ======================
    // CALCULATIONS
    // ======================

    const totalRevenue = payments
        .filter(p => p.status === "Completed")
        .reduce((acc, curr) => acc + curr.amount, 0);

    const pendingAmount = payments
        .filter(p => p.status === "Pending")
        .reduce((acc, curr) => acc + curr.amount, 0);

    const failedCount = payments.filter(p => p.status === "Failed").length;

    const refundCount = payments.filter(p => p.status === "Refunded").length;

    // ======================
    // CHART DATA
    // ======================

    const revenueTrend = [
        { month: "Jan", revenue: 80000 },
        { month: "Feb", revenue: 120000 },
        { month: "Mar", revenue: 150000 },
        { month: "Apr", revenue: 180000 },
    ];

    const methodBreakdown = [
        { name: "UPI", value: payments.filter(p => p.method === "UPI").length },
        { name: "Card", value: payments.filter(p => p.method === "Card").length },
        { name: "COD", value: payments.filter(p => p.method === "COD").length },
        { name: "Net Banking", value: payments.filter(p => p.method === "Net Banking").length },
    ];

    // const getStatusColor = (status) => {
    //     switch (status) {
    //         case "Completed": return "bg-green-100 text-green-700";
    //         case "Pending": return "bg-yellow-100 text-yellow-700";
    //         case "Failed": return "bg-red-100 text-red-700";
    //         case "Refunded": return "bg-blue-100 text-blue-700";
    //         default: return "";
    //     }
    // };

    return (
        <div className="p-6 space-y-8">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h1 className="text-3xl font-bold">Payment Analytics</h1>

                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Search Order / Customer"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-4 py-2 rounded-lg"
                    />

                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border px-4 py-2 rounded-lg">
                        <option>All</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Failed</option>
                        <option>Refunded</option>
                    </select>
                </div>
            </div>

            {/* KPI CARDS */}
            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-green-600 text-white p-6 rounded-xl shadow">
                    <p className="text-sm font-bold opacity-90">Total Revenue</p>
                    <h2 className="text-2xl font-bold mt-2">₹ {totalRevenue}</h2>
                </div>

                <div className="bg-yellow-500 text-white p-6 rounded-xl shadow">
                    <p className="text-sm font-bold opacity-90">Pending Amount</p>
                    <h2 className="text-2xl font-bold mt-2">₹ {pendingAmount}</h2>
                </div>

                <div className="bg-red-500 text-white p-6 rounded-xl shadow">
                    <p className="text-sm font-bold opacity-90">Failed Payments</p>
                    <h2 className="text-2xl font-bold mt-2">{failedCount}</h2>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
                    <p className="text-sm font-bold opacity-90">Refunded</p>
                    <h2 className="text-2xl font-bold mt-2">{refundCount}</h2>
                </div>

            </div>

            {/* CHART SECTION */}
            <div className="grid lg:grid-cols-2 gap-6">

                {/* Revenue Trend */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Revenue Trend</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueTrend}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Payment Method Breakdown */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Payment Methods</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={methodBreakdown} dataKey="value" outerRadius={90}>
                                    {methodBreakdown.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* TRANSACTION TABLE */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <h1 className="p-4 font-semibold border-b">Recent Transactions</h1>
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Method</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {filteredPayments.map((payment) => (
                            <tr key={payment.id} className="border-t hover:bg-gray-50">
                                <td className="p-4 font-medium">{payment.orderId}</td>
                                <td className="p-4">{payment.customer}</td>
                                <td className="p-4">{payment.date}</td>
                                <td className="p-4">{payment.method}</td>
                                <td className="p-4 font-semibold">₹ {payment.amount}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(payment.status)}`}>
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}