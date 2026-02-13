import { useState } from "react";

export default function AddGiftCard() {
  const [form, setForm] = useState({
    code: "",
    amount: "",
    expiryDate: "",
    usageLimit: "",
    status: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]:
        name === "code"
          ? value.toUpperCase()
          : type === "checkbox"
          ? checked
          : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.code || !form.amount) {
      alert("Gift Card Code and Amount are required!");
      return;
    }

    console.log("Gift Card Data:", form);
    // 🔥 Connect backend here
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl">
          <i className="fas fa-gift text-xl"></i>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add Gift Card</h1>
          <p className="text-sm text-gray-500">Create prepaid gift vouchers</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Gift Card Code</label>
            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="GIFT2026"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={form.expiryDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Usage Limit</label>
            <input
              type="number"
              name="usageLimit"
              value={form.usageLimit}
              onChange={handleChange}
              placeholder="1"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button type="button" className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Save Gift Card</button>
          </div>
        </form>
      </div>
    </div>
  );
}