import { useState} from "react";                // add useMemo and remove comment when backend connect
import { Link } from "react-router-dom";

export default function Category() {

    //   const [categories, setCategories] = useState([]);          // 🔥 Backend connect later

    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: "", status: true });
    const [search, setSearch] = useState("");

    //   const filteredCategories = useMemo(() => {
    //     return categories.filter((category) => {
    //       const matchesSearch = category.name
    //         ?.toLowerCase()
    //         .includes(search.toLowerCase());
    //       return matchesSearch && matchesStatus;
    //     });
    //   }, [categories, search]);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-2xl">
                        <i className="fas fa-layer-group text-2xl"></i>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Category Management</h1>
                        <p className="text-sm text-gray-500">Manage product categories</p>
                    </div>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                    <i className="fas fa-plus mr-2"></i>
                    Add Category
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search category..."
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 w-64"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* {filteredCategories.length === 0 ? ( */}
                <div className="text-center py-12 text-gray-500">
                    <i className="fas fa-layer-group text-4xl mb-4"></i>
                    <p>No categories found</p>
                </div>
                {/* ) : ( */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b text-black/80 bg-gray-200">
                                <tr className="justify-between">
                                    <th className="py-3 text-left px-10">Category Name</th>
                                    <th className="text-right px-10">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {filteredCategories.map((category) => (
                                <tr key={category._id} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="py-2 px-10 font-medium">{category.name}</td>
                                    <td className="px-10 text-right">
                                        <div className="inline-flex gap-4">
                                            <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                                            <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                ))} */}
                                <tr className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="py-2 px-10 font-medium">Computer</td>
                                    <td className="px-10 text-right">
                                        <div className="inline-flex gap-4">
                                            <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                                            <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                {/* )} */}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-6 relative animate-fadeIn">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg">&#10005;</button>
                        <h2 className="text-2xl font-bold text-gray-800">Add Category</h2>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Category Name</label>
                            <input
                                type="text"
                                value={newCategory.name}
                                onChange={(e) =>
                                    setNewCategory({ ...newCategory, name: e.target.value })
                                }
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter category name"
                            />
                        </div>
        
                        <div className="flex justify-end gap-4 pt-4">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button onClick={() => {
                                if (!newCategory.name.trim()) {
                                    alert("Category name required");
                                    return;
                                }
                                console.log("New Category:", newCategory);
                                setShowModal(false);
                                }}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}