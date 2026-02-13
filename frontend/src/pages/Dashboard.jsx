import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const sampleProducts = [
    { id: 1, name: "Classic Tee", price: 29.99, stock: 42 },
    { id: 2, name: "Sneakers", price: 79.99, stock: 18 },
    { id: 3, name: "Jeans", price: 59.99, stock: 25 },
];

const sampleOrders = [
    { id: 1001, customer: "Alice", total: 89.98, status: "Shipped", date: "2026-02-08" },
    { id: 1002, customer: "Bob", total: 29.99, status: "Processing", date: "2026-02-09" },
    { id: 1003, customer: "Carol", total: 139.98, status: "Delivered", date: "2026-02-10" },
];

export default function Dashboard() {
    const [products, setProducts] = useState(sampleProducts);
    const [orders] = useState(sampleOrders);
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: "", price: "", stock: "" });

    const totalRevenue = useMemo(
        () => orders.reduce((s, o) => s + o.total, 0),
        [orders]
    );

    function handleAddSubmit(e) {
        e.preventDefault();
        const id = Date.now();
        const newProduct = {
            id,
            name: form.name || "Untitled",
            price: parseFloat(form.price) || 0,
            stock: parseInt(form.stock, 10) || 0,
        };
        setProducts((prev) => [newProduct, ...prev]);
        setForm({ name: "", price: "", stock: "" });
        setShowAdd(false);
    }

    function statusColor(status) {
        if (status === "Delivered") return "bg-green-100 text-green-600";
        if (status === "Processing") return "bg-yellow-100 text-yellow-600";
        if (status === "Shipped") return "bg-blue-100 text-blue-600";
        return "bg-gray-100 text-gray-600";
    }

    return (
        <main className="p-8 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <p className="text-gray-500">Products</p>
                    <h2 className="text-3xl font-bold mt-2">{products.length}</h2>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <p className="text-gray-500">Orders</p>
                    <h2 className="text-3xl font-bold mt-2">{orders.length}</h2>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <p className="text-gray-500">Revenue</p>
                    <h2 className="text-3xl font-bold mt-2 text-green-600">${totalRevenue.toFixed(2)}</h2>
                </div>
            </section>

            {/* Tables */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Orders */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Orders</h3>
                        <button onClick={() => setShowAdd(true)} className="bg-blue-600 text-white px-2 py-2 md:text-normal text-sm rounded-lg hover:bg-blue-700 transition"><i className="fas fa-plus"></i> Order</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left md:text-normal text-sm">
                            <thead className="text-gray-500 border-b">
                                <tr>
                                    <th className="py-2">Order</th>
                                    <th>Customer</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o) => (
                                <tr key={o.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3">#{o.id}</td>
                                    <td>{o.customer}</td>
                                    <td>${o.total.toFixed(2)}</td>
                                    <td><span className={`px-3 py-1 text-xs rounded-full ${statusColor( o.status)}`}>{o.status}</span></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Products */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg md:text-xl font-semibold">Products</h3>
                        <Link to="/add-product" className="bg-blue-600 text-sm md:text-normal text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"><i className="fas fa-plus"></i> Add</Link>
                    </div>

                    <table className="w-full text-left">
                        <thead className="text-gray-500 border-b">
                            <tr>
                                <th className="py-2">Product</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3">{p.name}</td>
                                    <td>${p.price.toFixed(2)}</td>
                                    <td>{p.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        {/* Modal */}
        {showAdd && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-96 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Add Product</h3>

                <form onSubmit={handleAddSubmit} className="space-y-4">
                <input
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                    }
                />
                <input
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                    }
                />
                <input
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Stock"
                    value={form.stock}
                    onChange={(e) =>
                    setForm({ ...form, stock: e.target.value })
                    }
                />

                <div className="flex justify-end gap-3">
                    <button
                    type="button"
                    onClick={() => setShowAdd(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                    Save
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </main>
    );
}