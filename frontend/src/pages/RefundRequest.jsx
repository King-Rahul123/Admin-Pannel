export default function RefundRequest() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Refund Requests</h1>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Reason</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-4">#ORD2024</td>
                            <td className="p-4">John Doe</td>
                            <td className="p-4">$250</td>
                            <td className="p-4">Product Not Working</td>
                            <td className="p-4 text-yellow-600 font-medium">Pending</td>
                            <td className="p-4">
                                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                                    Approve
                                </button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded">
                                    Reject
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}