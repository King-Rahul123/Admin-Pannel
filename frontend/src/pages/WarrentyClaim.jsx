export default function WarrantyClaim() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Warranty Claims</h1>

            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">Order ID</label>
                        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Order ID" />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Product Name</label>
                        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Product Name" />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Issue Description</label>
                        <textarea className="w-full border p-2 rounded" rows="4"></textarea>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Upload Proof</label>
                        <input type="file" className="w-full border p-2 rounded" />
                    </div>
                </div>

                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">Submit Claim</button>
            </div>
        </div>
    );
}