import { useState } from "react";           // add useMemo and remove all comments when connecting to backend

export default function CouponList() {
  // const [coupons, setCoupons] = useState([]); // connect backend later
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // const filteredCoupons = useMemo(() => {
  //   return coupons.filter((coupon) => {
  //     const matchesSearch = coupon.code
  //       ?.toLowerCase()
  //       .includes(search.toLowerCase());

  //     const matchesStatus =
  //       statusFilter === "All" ||
  //       (statusFilter === "Active" && getCouponStatus(coupon)) ||
  //       (statusFilter === "Inactive" && !getCouponStatus(coupon));

  //     return matchesSearch && matchesStatus;
  //   });
  // }, [coupons, search, statusFilter]);

  // function getCouponStatus(coupon) {
  //   if (!coupon.expiryDate) return true; // No expiry = always active

  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0);
  //   const expiry = new Date(coupon.expiryDate);
  //   expiry.setHours(0, 0, 0, 0);

  //   return today <= expiry;
  // }

  // function statusBadge(isActive) {
  //   return isActive
  //     ? "bg-green-100 text-green-600"
  //     : "bg-red-100 text-red-600";
  // }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
            <i className="fas fa-ticket-alt text-xl"></i>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Coupon List</h1>
            <p className="text-sm text-gray-500">Manage all discount coupons</p>
          </div>
        </div>

        <a href="/add-coupon" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"><i className="fas fa-plus mr-2"></i>Add Coupon</a>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search coupon code..."
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
        {/* {filteredCoupons.length === 0 ? ( */}
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-ticket-alt text-4xl mb-4"></i>
            <p>No coupons found</p>
          </div>
        {/* ) : ( */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b text-gray-500">
                <tr>
                  <th className="py-3">Code</th>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Min Purchase</th>
                  <th>Usage Limit</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {filteredCoupons.map((coupon) => (
                  <tr key={coupon._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{coupon.code}</td>
                    <td>{coupon.type}</td>
                    <td>
                      {coupon.type === "Percentage"
                        ? `${coupon.value}%`
                        : `₹${coupon.value}`}
                    </td>
                    <td>₹{coupon.minPurchase || 0}</td>
                    <td>{coupon.usageLimit || "Unlimited"}</td>
                    <td>
                      <span className={`px-3 py-1 text-xs rounded-full ${statusBadge( getCouponStatus(coupon) )}`}>
                        {getCouponStatus(coupon) ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
                      <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
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