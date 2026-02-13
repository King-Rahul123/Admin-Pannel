import { useState } from "react";           // add useMemo and remove all comments when connecting to backend

export default function GiftCardList() {
//   const [giftCards, setGiftCards] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

//   const filteredCards = useMemo(() => {
//     return giftCards.filter((card) => {
//       const matchesSearch = card.code
//         ?.toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesStatus =
//         statusFilter === "All" ||
//         (statusFilter === "Active" && getCardStatus(card)) ||
//         (statusFilter === "Inactive" && !getCardStatus(card));

//       return matchesSearch && matchesStatus;
//     });
//   }, [giftCards, search, statusFilter]);

  // function getCardStatus(card) {
  //   if (!card.expiryDate) return true; // No expiry → always active

  //   const today = new Date();
  //   const expiry = new Date(card.expiryDate);

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
          <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl">
            <i className="fas fa-gift text-xl"></i>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gift Card List</h1>
            <p className="text-sm text-gray-500">Manage prepaid gift cards</p>
          </div>
        </div>

        <a href="/add-gift-card" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          <i className="fas fa-plus mr-2"></i>
          Add Gift Card
        </a>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search gift card..."
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
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
        {/* {filteredCards.length === 0 ? ( */}
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-gift text-4xl mb-4"></i>
            <p>No gift cards found</p>
          </div>
        {/* ) : ( */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b text-gray-500">
                <tr>
                  <th className="py-3">Code</th>
                  <th>Amount</th>
                  <th>Expiry</th>
                  <th>Usage Limit</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {filteredCards.map((card) => (
                  <tr key={card._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{card.code}</td>
                    <td>₹{card.amount}</td>
                    <td>{card.expiryDate || "No Expiry"}</td>
                    <td>{card.usageLimit || "Unlimited"}</td>
                    <td>
                      <span className={`px-3 py-1 text-xs rounded-full ${statusBadge(getCardStatus(card))}`}>
                        {getCardStatus(card) ? "Active" : "Inactive"}
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