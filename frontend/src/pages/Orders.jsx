import { useState } from "react";           // add useMemo and remove all comments when connecting to backend

export default function Order() {
    // const [orders, setOrders] = useState([]); // Ready for backend
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    //   const filteredOrders = useMemo(() => {
    //     return orders.filter((order) => {
    //       const matchesSearch =
    //         order.customer?.toLowerCase().includes(search.toLowerCase());

    //       const matchesStatus =
    //         statusFilter === "All" || order.status === statusFilter;

    //       return matchesSearch && matchesStatus;
    //     });
    //   }, [orders, search, statusFilter]);

    // function statusColor(status) {
    //     if (status === "Delivered")
    //         return "bg-green-100 text-green-600";
    //     if (status === "Shipped")
    //         return "bg-blue-100 text-blue-600";
    //     if (status === "Pending")
    //         return "bg-yellow-100 text-yellow-600";
    //     if (status === "Cancelled")
    //         return "bg-red-100 text-red-600";
    //     return "bg-gray-100 text-gray-600";
    // }

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800"><i className="fas fa-shopping-cart mr-2"></i>Orders Management</h1>

                <div className="flex gap-4">
                    <input type="text" placeholder="Search by customer..." className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option>All</option>
                        <option>Pending</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Stats Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Orders" value={orders.length} icon="fa-shopping-bag" />
                <StatCard title="Pending" value={orders.filter(o => o.status === "Pending").length} icon="fa-clock" />
                <StatCard title="Shipped" value={orders.filter(o => o.status === "Shipped").length} icon="fa-truck" />
                <StatCard title="Delivered" value={orders.filter(o => o.status === "Delivered").length} icon="fa-check-circle" />
            </div> */}

            {/* Orders Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* {filteredOrders.length === 0 ? ( */}
                <div className="text-center py-12 text-gray-500">
                    <i className="fas fa-box-open text-4xl mb-4"></i>
                    <p>No orders found</p>
                </div>
                {/* ) : ( */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b text-gray-500">
                            <tr>
                                <th className="py-3">Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {filteredOrders.map((order) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 font-medium">#{order.id}</td>
                                <td>{order.customer}</td>
                                <td>₹{order.total}</td>
                                <td>{order.payment}</td>
                                <td><span className={`px-3 py-1 text-xs rounded-full ${statusColor( order.status)}`}>{order.status}</span></td>
                                <td>{order.date}</td>
                                <td className="flex gap-3">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <i className="fas fa-eye"></i>
                                    </button>
                                    <button className="text-green-600 hover:text-green-800">
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            ))} */}

                            {/* Flaw Data */}
                            <tr className="border-b hover:bg-gray-50">
                                <td className="py-3 font-medium">#12345</td>
                                <td>John Doe</td>
                                <td>$99.99</td>
                                <td>Credit Card</td>
                                <td><span className={`px-3 py-1 text-xs rounded-full bg-green-100 text-green-600`}>Delivered</span></td>
                                <td>2024-06-15</td>
                                <td className="flex gap-3">
                                    <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-eye"></i></button>
                                    <button className="text-green-600 hover:text-green-800"><i className="fas fa-check"></i></button>
                                    <button className="text-red-600 hover:text-red-800"><i className="fas fa-times"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* )} */}
            </div>
        </div>
    );
}

/* Stat Card Component */
function StatCard({ title, value, icon }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
            <div>
                <p className="text-gray-500">{title}</p>
                <h2 className="text-2xl font-bold mt-1">{value}</h2>
            </div>
            <div className="text-blue-500 text-2xl"><i className={`fas ${icon}`}></i></div>
        </div>
    );
}