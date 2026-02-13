import { useState } from "react";               // add useMemo and remove comment for backend connection    

export default function Customer() {
//   const [customers, setCustomers] = useState([]); // connect backend later
  const [search, setSearch] = useState("");

//   const filteredCustomers = useMemo(() => {
//     return customers.filter((customer) =>
//       customer.name?.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [customers, search]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-xl">
          <i className="fas fa-users text-xl"></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Customer Management
          </h1>
          <p className="text-sm text-gray-500">
            View and manage customers
          </p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search customer..."
        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* {filteredCustomers.length === 0 ? ( */}
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-user-slash text-4xl mb-4"></i>
            <p>No customers found</p>
          </div>
        {/*  ) : ( */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b text-gray-500">
                <tr>
                  <th className="py-3">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Total Orders</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {/* {filteredCustomers.map((customer) => (
                  <tr key={customer._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.totalOrders}</td>
                    <td>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          customer.active
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {customer.active ? "Active" : "Blocked"}
                      </span>
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