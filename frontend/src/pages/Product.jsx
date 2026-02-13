import { useState } from "react";               // add useMemo and remove comment for backend connection
import { Link } from "react-router-dom";

export default function Product() {
    //   const [products, setProducts] = useState([]); // connect backend later
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    //   const filteredProducts = useMemo(() => {
    //     return products.filter((product) => {
    //       const matchesSearch = product.name
    //         ?.toLowerCase()
    //         .includes(search.toLowerCase());

    //       const matchesStatus =
    //         statusFilter === "All" ||
    //         (statusFilter === "Active" && product.status) ||
    //         (statusFilter === "Inactive" && !product.status);

    //       return matchesSearch && matchesStatus;
    //     });
    //   }, [products, search, statusFilter]);

    //   function statusBadge(status) {
    //     return status
    //       ? "bg-green-100 text-green-600"
    //       : "bg-red-100 text-red-600";
    //   }

  return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
                        <i className="fas fa-box text-xl"></i>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
                        <p className="text-sm text-gray-500">Manage all electronic products</p>
                    </div>
                </div>
                <Link to="/add-product" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"><i className="fas fa-plus mr-2"></i>Add Product</Link>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search product..."
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 w-64"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* {filteredProducts.length === 0 ? ( */}
                <div className="text-center py-12 text-gray-500">
                    <i className="fas fa-box-open text-4xl mb-4"></i>
                    <p>No products found</p>
                </div>
                {/* ) : ( */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b text-gray-500">
                            <tr>
                            <th className="py-3">Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* {filteredProducts.map((product) => (
                            <tr key={product._id} className="border-b hover:bg-gray-50">
                                <td className="py-3 font-medium">{product.name}</td>
                                <td>{product.category}</td>
                                <td>₹{product.price}</td>
                                <td>{product.stock}</td>

                                <td>
                                <span
                                    className={`px-3 py-1 text-xs rounded-full ${statusBadge(product.status)}`}
                                >
                                    {product.status ? "Active" : "Inactive"}
                                </span>
                                </td>

                                <td className="flex gap-3">
                                <button className="text-blue-600 hover:text-blue-800">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                    <i className="fas fa-trash"></i>
                                </button>
                                </td>
                            </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
                {/* )} */}
            </div>
        </div>
    );
}