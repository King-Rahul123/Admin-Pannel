import { useState } from "react";

export default function Subcategory() {

    // const [subcategories, setSubcategories] = useState([]);            // 🔥 Backend connect later

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [newSubcategory, setNewSubcategory] = useState({
        name: "",
        parent: "",
        status: true,
    });

    // const filteredSubcategories = useMemo(() => {
    //     return subcategories.filter((subcategory) => {
    //       const matchesSearch = subcategory.name
    //         ?.toLowerCase()
    //         .includes(search.toLowerCase());
    //       return matchesSearch && matchesStatus;
    //     });
    //   }, [subcategories, search]);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-orange-100 text-orange-600 rounded-2xl">
                        <i className="fas fa-sitemap text-2xl"></i>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Subcategory Management</h1>
                        <p className="text-sm text-gray-500">Manage product subcategories</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"><i className="fas fa-plus mr-2"></i>Add Subcategory</button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search subcategory..."
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 w-64"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* {filteredSubcategories.length === 0 ? ( */}
                    <div className="text-center py-12 text-gray-500">
                        <i className="fas fa-layer-group text-4xl mb-4"></i>
                        <p>No subcategories found</p>
                    </div>
                {/* ) : ( */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-center">
                            <thead className="border-b text-black/80 bg-gray-200">
                                <tr>
                                    <th className="py-3 text-left px-10">Subcategory Name</th>
                                    <th>Category Name</th>
                                    <th className="text-right px-10">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {filteredSubcategories.map((subcategory) => (
                                    <tr key={subcategory._id} className="border-b border-gray-300 hover:bg-gray-100">
                                        <td className="py-2 px-10 font-medium">{subcategory.name}</td>
                                        <td className="font-medium">{subcategory.parent}</td>
                                        <td className="px-10 text-right">
                                            <div className="inline-flex gap-4">
                                                <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))} */}
                                <tr className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="py-2 px-10 font-medium text-left">Computer</td>
                                    <td className="font-medium">Electronics</td>
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

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-6 relative animate-fadeIn">
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">&#10005;</button>
                        <h2 className="text-2xl font-bold text-gray-800">Add Subcategory</h2>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Subcategory Name</label>
                            <input
                                type="text"
                                value={newSubcategory.name}
                                onChange={(e) =>
                                    setNewSubcategory({
                                        ...newSubcategory,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter subcategory name"
                            />
                        </div>

                        {/* Parent Category */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Parent Category</label>
                            <select
                                value={newSubcategory.parent}
                                onChange={(e) =>
                                    setNewSubcategory({
                                        ...newSubcategory,
                                        parent: e.target.value,
                                    })
                                }
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                            >
                            <option value="" disabled>Select Category</option>
                                <option value="Computer">Computer</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 pt-4">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button onClick={() => {
                                if (!newSubcategory.name.trim()) {
                                    alert("Subcategory name required");
                                    return;
                                }
                                console.log("New Subcategory:", newSubcategory);
                                setShowModal(false);
                                }}
                                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                            >Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}