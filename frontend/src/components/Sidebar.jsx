import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
    const [openInventory, setOpenInventory] = useState(false);
    const [openMarket, setOpenMarket] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);
    // const [openReport, setOpenReport] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)}/>
            )}
            
            <aside className={` fixed md:static top-0 left-0 h-screen md:w-75 w-fit bg-linear-to-b from-gray-900 to-gray-800 text-gray-200 shadow-2xl flex flex-col transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                
                {/* Logo Section */}
                <div className="px-6 py-3 md:block hidden border-b border-gray-700">
                    <h2 className="text-4xl font-bold tracking-wider text-center text-white">Texsa</h2>
                </div>

                <div className="md:hidden flex items-center justify-between px-6 py-5 border-b border-gray-700">
                    <h2 className="text-3xl font-bold text-white">Texsa</h2>
                    <button onClick={() => setIsOpen(false)} className="text-3xl text-white">&times;</button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 md:text-sm text-xs font-medium px-4 py-6 space-y-2 overflow-y-auto scroll-smooth scrollbar-hidden">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <i className="fas fa-home"></i>
                        Dashboard
                    </NavLink>
                
                    <button onClick={() => setOpenOrder(!openOrder)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${ openOrder ? "text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="font-medium">Orders & Sales</span>
                        </div>
                        <i className={`fas fa-chevron-down transition-transform duration-300 ${openOrder ? "rotate-180" : ""}`}></i>
                    </button>
                
                    {openOrder && (
                        <div className="ml-8 mt-2 space-y-2 md:text-sm text-xs">
                            <NavLink to="/orders" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-shopping-cart"></i>
                                Orders
                            </NavLink>
                            <NavLink to="/returns" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-reply"></i>
                                Returns
                            </NavLink>
                            <NavLink to="/warranty" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-shield-alt"></i>
                                Warenty Claim
                            </NavLink>
                            <NavLink to="/refund-request" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-money-bill-wave"></i>
                                Refund Request
                            </NavLink>
                        </div>
                    )}

                    <button onClick={() => setOpenInventory(!openInventory)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${ openInventory ? "text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-boxes"></i>
                            <span className="font-medium">Inventory Management</span>
                        </div>
                        <i className={`fas fa-chevron-down transition-transform duration-300 ${openInventory ? "rotate-180" : ""}`}></i>
                    </button>

                    {/* Dropdown Items */}
                    {openInventory && (
                        <div className="ml-6 space-y-2 md:text-sm text-xs gap-2">
                            <NavLink to="/products" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-box-open"></i>
                                Products
                            </NavLink>
                            <NavLink to="/brands" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-tags"></i>
                                Brands
                            </NavLink>
                            <NavLink to="/categories" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="bi bi-grid"></i>
                                Categories
                            </NavLink>
                            <NavLink to="/subcategories" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="bi bi-diagram-3"></i>
                                Subcategories
                            </NavLink>
                        </div>
                    )}

                    <NavLink to="/customers" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex font-medium items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <i className="fas fa-users"></i>
                        Customers
                    </NavLink>
                    <NavLink to="/payment" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex font-medium items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <i className="fas fa-credit-card"></i>
                        Payment
                    </NavLink>

                    <button onClick={() => setOpenMarket(!openMarket)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${ openMarket ? "text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-boxes"></i>
                            <span className="font-medium">Marketing</span>
                        </div>
                        <i className={`fas fa-chevron-down transition-transform duration-300 ${openMarket ? "rotate-180" : ""}`}></i>
                    </button>

                    {openMarket && (
                        <div className="ml-6 space-y-2 md:text-sm text-xs gap-2">
                            <NavLink to="/add-coupon" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="bi bi-tag"></i>
                                Add Coupon
                            </NavLink>
                            <NavLink to="/coupon-list" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="bi bi-ticket-perforated"></i>
                                Coupon List
                            </NavLink>
                            <NavLink to="/add-gift-card" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-gift"></i>
                                Add Gift Card
                            </NavLink>
                            <NavLink to="/gift-card-list" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-list"></i>
                                Gift Card List
                            </NavLink>
                            <NavLink to="/flash-sale" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                                <i className="fas fa-bolt"></i>
                                Flash Sale
                            </NavLink>
                        </div>
                    )}

                    <NavLink to="/report-analytics" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex font-medium items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <i className="fas fa-chart-line"></i>
                        Reports & Analytics
                    </NavLink>
                    <NavLink to="/profile" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex font-medium items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${ isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-700 hover:text-white" }`}>
                        <i className="fas fa-user"></i>
                        Profile
                    </NavLink>
                </nav>

                {/* Logout Button (Fixed at Bottom) */}
                <div className="px-6 py-3 md:py-6 border-t border-gray-700">
                    <button className="w-full flex items-center justify-center text-sm gap-2 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-200 shadow-md">
                        <i className="fas fa-sign-out-alt"></i>
                        Log Out
                    </button>
                </div>
            </aside>
        </>
    );
}