import { useState } from "react";

export default function Profile() {

    const [admin, setAdmin] = useState({
        name: "Rahul Adak",
        email: "admin@texsa.com",
        phone: "+91 9876543210",
        role: "Super Admin",
        bio: "Managing the Texsa ecommerce platform and overseeing operations."
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">

            {/* PROFILE HEADER */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl px-8 py-5 text-white relative">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Avatar */}
                    <div className="relative">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Admin" className="w-32 h-32 rounded-full border-4 border-white shadow-lg"/>
                        <button className="absolute bottom-0 right-0 bg-white text-black rounded-full p-2 shadow"><i className="fas fa-camera"></i></button>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold">{admin.name}</h1>
                        <p className="opacity-90">{admin.email}</p>
                        <span className="inline-block mt-3 px-4 py-1 bg-white/20 rounded-full text-sm">{admin.role}</span>
                    </div>

                    {/* Edit Button */}
                    <button onClick={() => setEditMode(!editMode)} className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition">
                        <i className={`fas ${editMode ? "fa-times" : "fa-edit"} mr-2`}></i>
                        {editMode ? "Cancel" : "Edit Profile"}
                    </button>
                </div>
            </div>

            {/* STATS */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
                    <h2 className="text-2xl font-bold text-blue-600">1,254</h2>
                    <p className="text-gray-500">Orders Managed</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
                    <h2 className="text-2xl font-bold text-green-600">₹ 2.4M</h2>
                    <p className="text-gray-500">Revenue Overseen</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
                    <h2 className="text-2xl font-bold text-purple-600">32</h2>
                    <p className="text-gray-500">Team Members</p>
                </div>
            </div>

            {/* PROFILE DETAILS */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mt-8">
                <h2 className="text-xl font-semibold mb-8 dark:text-white">Profile Information</h2>
                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={admin.name}
                            onChange={handleChange}
                            disabled={!editMode}
                            className="w-full mt-2 border px-4 py-3 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={admin.email}
                            onChange={handleChange}
                            disabled={!editMode}
                            className="w-full mt-2 border px-4 py-3 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={admin.phone}
                            onChange={handleChange}
                            disabled={!editMode}
                            className="w-full mt-2 border px-4 py-3 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">Role</label>
                        <input
                            type="text"
                            value={admin.role}
                            disabled
                            className="w-full mt-2 border px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-sm text-gray-500 dark:text-gray-400">Bio</label>
                        <textarea
                            name="bio"
                            value={admin.bio}
                            onChange={handleChange}
                            disabled={!editMode}
                            rows="4"
                            className="w-full mt-2 border px-4 py-3 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                {editMode && (
                    <div className="text-right mt-8">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition">Save Changes</button>
                    </div>
                )}
            </div>
            
            <div className="mt-5 text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-center justify-center">Change Password</button>
            </div>
        </div>
    );
}