import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddBrand() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        logo: null,
        logoPreview: null,
        status: true,
    });

    function handleChange(e) {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
        const file = files && files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setForm((prev) => ({
            ...prev,
            logo: file,
            logoPreview: reader.result,
            }));
        };
        reader.readAsDataURL(file);
        return;
        }

        setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    }

    function removeLogo() {
        setForm((prev) => ({
        ...prev,
        logo: null,
        logoPreview: null,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.name.trim()) {
        alert("Brand name is required!");
        return;
        }

        console.log("Brand Data:", form);
    }

    function clearForm() {
        setForm({
        name: "",
        description: "",
        logo: null,
        logoPreview: null,
        status: true,
        });
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">

            {/* Header (Matched with Add Product) */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-2xl">
                        <i className="fas fa-tags text-2xl"></i>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">Add New Brand</h1>
                </div>

                <button type="button" onClick={clearForm} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">Clear</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Brand Information Card */}
                <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
                    <label className="block mb-2 font-medium text-gray-600">Brand Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter brand name"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
                        required
                    />

                {/* Logo Upload Card */}
                    <h2 className="text-lg font-semibold text-gray-600">Brand Logo</h2>
                    <div className="border-2 border-dashed  bg-purple-50 border-gray-300 rounded-lg p-6 flex items-center justify-center hover:border-purple-400 transition">
                        {form.logoPreview ? (
                        <div className="w-full flex items-center justify-between gap-4">
                            <img src={form.logoPreview} alt="preview" className="h-32 object-contain rounded"/>
                            <div className="flex flex-col gap-3">
                            <button type="button" onClick={removeLogo} className="px-4 py-2 bg-red-500 text-white rounded">Remove</button>

                            <label className="px-4 py-2 bg-gray-100 rounded cursor-pointer">
                                Replace
                                <input
                                    type="file"
                                    name="logo"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <label className="text-center cursor-pointer w-full">
                        <i className="fas fa-upload text-3xl text-purple-600 mb-3"></i>
                        <h1 className="text-lg text-gray-500 mb-2">Drag & drop or click to upload</h1>
                        <p className="text-sm text-gray-400 mb-3">Recommended size 300x300</p>
                        <input
                            type="file"
                            name="logo"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                        <p className="px-4 py-2 bg-purple-100 text-purple-600 rounded inline-block">Choose File</p>
                    </label>
                    )}
                </div>
            </div>

            {/* Status + Submit (Matched with Product Page) */}
            <div className="flex items-center justify-between">
            <Link
                to="/brands"
                className="px-8 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 hover:text-white transition shadow-md"
            >
                Cancel
            </Link>

            <button
                type="submit"
                className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md"
            >
                Save Brand
            </button>
            </div>

        </form>
        </div>
    );
}