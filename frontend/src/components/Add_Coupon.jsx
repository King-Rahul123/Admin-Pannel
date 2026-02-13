import { useState } from "react";

export default function AddCoupon() {
    const [form, setForm] = useState({
        code: "",
        type: "Percentage",
        value: "",
        minPurchase: "",
        maxDiscount: "",
        startDate: "",
        endDate: "",
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

        if (!form.code || !form.value) {
        alert("Coupon Code and Discount Value are required!");
        return;
        }

        console.log("Coupon Data:", form);
        // 🔥 Connect backend API here
    }

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-6">

            {/* Page Header */}
            <div className="flex items-center gap-3">
                <i className="fas fa-ticket-alt text-2xl text-blue-600"></i>
                <h1 className="text-2xl font-bold text-gray-800">Add New Coupon</h1>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Coupon Code */}
                    <div>
                        <label className="block text-gray-600 mb-2 font-medium">Coupon Code</label>
                        <input 
                            type="text" 
                            name="code" 
                            value={form.code} 
                            onChange={handleChange} 
                            placeholder="SUMMER2026" 
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" 
                            required
                        />
                    </div>

                    {/* Discount Type & Value */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-600 mb-2 font-medium">Discount Type</label>
                            <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
                                <option value="Percentage">Percentage</option>
                                <option value="Flat">Flat Amount</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2 font-medium">
                                {form.type === "Percentage" ? "Discount (%)" : "Discount Amount (₹)"}
                            </label>
                            <input 
                                type="number" 
                                name="value" 
                                value={form.value} 
                                onChange={handleChange} 
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Min Purchase & Max Discount */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-600 mb-2 font-medium">Minimum Purchase (₹)</label>
                            <input
                                type="number"
                                name="minPurchase"
                                value={form.minPurchase}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {form.type === "Percentage" && (
                            <div>
                                <label className="block text-gray-600 mb-2 font-medium">Maximum Discount (₹)</label>
                                <input
                                    type="number"
                                    name="maxDiscount"
                                    value={form.maxDiscount}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Date Range */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-600 mb-2 font-medium">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={form.startDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split("T")[0]}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2 font-medium">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                value={form.endDate}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Usage Limit */}
                    <div>
                        <label className="block text-gray-600 mb-2 font-medium">Usage Limit</label>
                        <input
                            type="number"
                            name="usageLimit"
                            value={form.usageLimit}
                            onChange={handleChange}
                            placeholder="100"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between">
                        {/* Status Toggle */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="status"
                                checked={form.status}
                                onChange={handleChange}
                                className="h-4 w-4"
                            />
                            <label className="text-gray-600 font-medium">Active Coupon</label>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end gap-4 pt-4">
                            <button type="button" className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Save Coupon</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}