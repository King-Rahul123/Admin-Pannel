import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    subcategory: "",
        features: [],
        featuresInput: "",
    image: null,
        baseImage: null,
        imagePreview: null,
        baseImagePreview: null,
    status: true,
  });

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

        if (type === 'file') {
            const file = files && files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                if (name === 'image') {
                    setForm((prev) => ({ ...prev, image: file, imagePreview: reader.result }));
                } else if (name === 'baseImage') {
                    setForm((prev) => ({ ...prev, baseImage: file, baseImagePreview: reader.result }));
                } else {
                    setForm((prev) => ({ ...prev, [name]: file }));
                }
            };
            reader.readAsDataURL(file);
            return;
        }

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
  }

    function handleDrop(e, name) {
        e.preventDefault();
        const file = e.dataTransfer?.files && e.dataTransfer.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            if (name === 'image') setForm((prev) => ({ ...prev, image: file, imagePreview: reader.result }));
            if (name === 'baseImage') setForm((prev) => ({ ...prev, baseImage: file, baseImagePreview: reader.result }));
        };
        reader.readAsDataURL(file);
    }

    function handleRemoveImage(name) {
        if (name === 'image') setForm((prev) => ({ ...prev, image: null, imagePreview: null }));
        if (name === 'baseImage') setForm((prev) => ({ ...prev, baseImage: null, baseImagePreview: null }));
    }

    function handleAddFeature() {
        const value = (form.featuresInput || '').toString().trim();
        if (!value) return;
        setForm((prev) => ({
            ...prev,
            features: Array.isArray(prev.features) ? [...prev.features, value] : [value],
            featuresInput: "",
        }));
    }

    function handleRemoveFeature(index) {
        setForm((prev) => ({
            ...prev,
            features: (prev.features || []).filter((_, i) => i !== index),
        }));
    }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Product Name and Price are required!");
      return;
    }

    console.log("Product Data:", form);
    // 🔥 Connect backend API here
  }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl"><i className="fas fa-box text-2xl"></i></div>
                    <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
                </div>

                <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">Clear</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info Card */}
                <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl font-semibold text-gray-700">Basic Information</h2>
                    <div>
                        <label className="block mb-2 font-medium text-gray-600">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-600">Product Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Product Description"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-blue-50 border-blue-500 border p-8 rounded-2xl shadow-md space-y-6">
                    <div className="flex gap-4 items-center">
                        <i className="fas fa-sack-dollar text-2xl text-blue-600"></i>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Pricing</h2>
                            <p className="text-gray-400 text-sm">Enter the product price in INR</p>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-600 justify-between">
                        <span>Price (&#8377;)</span>
                        {form.price && (
                            <span className="text-blue-600 font-semibold">: &#8377; {Number(form.price).toFixed(2)}</span>
                        )}
                        </label>

                        <input
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, price: value });
                            }}
                            onBlur={() => {
                                if (form.price) {
                                setForm({
                                    ...form,
                                    price: Number(form.price).toFixed(2),
                                });
                                }
                            }}
                            placeholder="&#8377; 0.00"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                {/* Classification Card */}
                <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl font-semibold text-gray-700">Classification</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Brand */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-600">Brand</label>
                            <select name="brand" value={form.brand} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                                <option value="" disabled>Select Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Mi">Mi</option>
                                <option value="Realme">Realme</option>
                                <option value="Realme">Redmi</option>
                            </select>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-600">Category</label>
                            <select name="category" value={form.category} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                                <option value="" disabled>Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Home">Home</option>
                            </select>
                        </div>

                        {/* Subcategory */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-600">Subcategory</label>
                            <select name="subcategory" value={form.subcategory} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                                <option value="" disabled>Select Subcategory</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Features Card */}
                <div className="bg-green-50 border border-green-500 p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl font-semibold text-gray-700">Features</h2>

                    <div className="flex gap-5">
                        <input
                            name="featuresInput"
                            value={form.featuresInput || ""}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleAddFeature();
                                }
                            }}
                            placeholder="Add Feature"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        />
                        <button type="button" onClick={handleAddFeature} className="bg-blue-600 text-white w-20 px-3 py-3 rounded-lg">Add</button>
                    </div>

                    {/* Feature List (displayed as a list) */}
                    {form.features?.length > 0 && (
                        <ul className="mt-4 list-disc list-inside space-y-2">
                            {form.features.map((feature, index) => (
                                <li key={index} className="flex items-center justify-between bg-white px-4 py-2 rounded shadow text-sm">
                                    <li>{feature}</li>
                                    <button type="button" onClick={() => handleRemoveFeature(index)} className="text-red-500 font-bold">&#10005;</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Images Card */}
                <div className="bg-purple-50 border border-purple-500 p-8 rounded-2xl shadow-md space-y-6">
                    <h2 className="text-xl font-semibold text-gray-700">Images</h2>
                    <div>
                        <label className="block mb-2 font-medium text-gray-600">Product Image</label>
                        <div onDrop={(e) => handleDrop(e, 'image')} onDragOver={(e) => e.preventDefault()} className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400">
                            {form.imagePreview ? (
                                <div className="w-full flex items-center justify-between gap-4">
                                    <img src={form.imagePreview} alt="preview" className="h-48 object-contain rounded" />
                                    <div className="flex flex-col gap-2">
                                        <button type="button" onClick={() => handleRemoveImage('image')} className="px-3 py-2 bg-red-500 text-white rounded">Remove</button>
                                        <label className="px-3 py-2 bg-gray-100 rounded cursor-pointer">
                                            Replace
                                            <input type="file" name="image" accept="image/*" onChange={handleChange} className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <label className="text-center w-full">
                                    <div className="">
                                        <i className="fas fa-upload text-3xl text-purple-600 mb-2"></i>
                                    </div>
                                    <div className="text-2xl text-gray-400 mb-2">Drag & drop or click to upload</div>
                                    <div className="text-sm text-gray-500 mb-2">Main product image (recommended 800x800)</div>
                                    <input type="file" name="image" accept="image/*" onChange={handleChange} className="hidden" />
                                    <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded">Choose File</div>
                                </label>
                            )}
                        </div>
                    </div>
                </div>

                {/* Status + Submit */}
                <div className="flex items-center justify-between">
                    <button type="button" className="px-8 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 hover:text-white transition shadow-md">Cancel</button>
                    <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md">Save Product</button>
                </div>
            </form>
        </div>
    );
}