import { useState } from "react";              // add useMemo and remove commant for backend connection
import { Link } from "react-router-dom";

export default function Brand() {

    //   const [brands, setBrands] = useState([]);        // 🔥 Connect backend later

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // ✅ Filtering logic (Backend Ready)
    //   const filteredBrands = useMemo(() => {
    //     return brands.filter((brand) => {
    //       const matchesSearch = brand.name
    //         ?.toLowerCase()
    //         .includes(search.toLowerCase());

    //       const matchesStatus =
    //         statusFilter === "All" ||
    //         (statusFilter === "Active" && brand.status) ||
    //         (statusFilter === "Inactive" && !brand.status);

    //       return matchesSearch && matchesStatus;
    //     });
    //   }, [brands, search, statusFilter]);

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
                    <p className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl"><i className="fas fa-tags text-xl"></i></p>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Brand Management</h1>
                        <p className="text-sm text-gray-500">Manage all product brands</p>
                    </div>
                </div>

                <Link to="/add-brand" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                    <i className="fas fa-plus mr-2"></i>
                    Add Brand
                </Link>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search brand..."
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 w-64"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* {filteredBrands.length === 0 ? ( */}
                    <div className="text-center py-12 text-gray-500">
                        <i className="fas fa-tags text-4xl mb-4"></i>
                        <p>No brands found</p>
                    </div>
                {/* ) : ( */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-center">
                            <thead className="border-b text-gray-500">
                                <tr>
                                    <th className="text-left px-10">Brand Logo</th>
                                    <th className="text-center">Brand Name</th>
                                    <th className="text-right px-10">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* {filteredBrands.map((brand) => (
                                <tr key={brand._id} className="border-b hover:bg-gray-100">
                                    <td className="text-left px-10">
                                        <img src={brand.logoUrl} alt={brand.name} className="w-20 h-12 p-2 object-contain" />
                                    </td>
                                    <td className="font-medium">{brand.name}</td>
                                    <td className="align-middle px-10">
                                        <div className="flex gap-3 justify-end">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))} */}

                                {/* Flaw Data */}
                                <tr className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="text-left px-10">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpVPIjC-qOZFP_89CG54cst0totAstbd3uw&s" alt="Brand Logo" className="w-20 h-12 p-2 object-contain" />
                                    </td>
                                    <td className="font-medium">Example Brand</td>
                                    <td className="align-middle px-10">
                                        <div className="flex gap-3 justify-end">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="text-left px-10">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YYeSBx3cdQlT0dIx23P9jb-wit-JuaGEqw&s" alt="Brand Logo" className="w-20 h-12 p-2 object-contain" />
                                    </td>
                                    <td className="font-medium">Another Brand</td>
                                    <td className="align-middle px-10">
                                        <div className="flex gap-3 justify-end">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
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