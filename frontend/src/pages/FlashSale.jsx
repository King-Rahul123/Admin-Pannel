import { useState } from "react";               // add useMemo and remove all comments when connecting to backend

export default function FlashSale() {
//   const [sales, setSales] = useState([]); // 🔥 Connect backend later
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

//   const filteredSales = useMemo(() => {
//     return sales.filter((sale) => {
//       const matchesSearch = sale.title
//         ?.toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesStatus =
//         statusFilter === "All" ||
//         (statusFilter === "Active" && sale.status) ||
//         (statusFilter === "Inactive" && !sale.status);

//       return matchesSearch && matchesStatus;
//     });
//   }, [sales, search, statusFilter]);

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
          <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl">
            <i className="fas fa-bolt text-xl"></i>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Flash Sales
            </h1>
            <p className="text-sm text-gray-500">
              Manage limited time promotional offers
            </p>
          </div>
        </div>

        <a
          href="/add-flash-sale"
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Flash Sale
        </a>

      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search sale title..."
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* {filteredSales.length === 0 ? ( */}
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-bolt text-4xl mb-4"></i>
            <p>No flash sales found</p>
          </div>
        {/* ) : ( */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b text-gray-500">
                <tr>
                  <th className="py-3">Title</th>
                  <th>Discount</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {filteredSales.map((sale) => (
                  <tr key={sale._id} className="border-b hover:bg-gray-50">

                    <td className="py-3 font-medium">
                      {sale.title}
                    </td>

                    <td>{sale.discount}%</td>

                    <td>{sale.startDate}</td>

                    <td>{sale.endDate}</td>

                    <td>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${statusBadge(
                          sale.status
                        )}`}
                      >
                        {sale.status ? "Active" : "Inactive"}
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