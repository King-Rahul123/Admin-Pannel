import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Order from "./pages/Orders";
import AddCoupon from "./components/Add_Coupon";
import CouponList from "./pages/Coupon_List";
import GiftCardList from "./pages/GiftCard_List";
import AddGiftCard from "./components/Add_GiftCard";
import FlashSale from "./pages/FlashSale";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import AddProduct from "./components/AddProduct";
import Brand from "./pages/Brand";
import AddBrand from "./components/Add_Brand";
import Category from "./pages/Category";
import Subcategory from "./pages/SubCategory";
import Returns from "./pages/Returns";
import WarrantyClaim from "./pages/WarrentyClaim";
import RefundRequest from "./pages/RefundRequest";
import ReportsAnalytics from "./pages/ReportAnalytics";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";

export default function Admin_Dashboard() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <BrowserRouter>
            <div className="flex h-screen bg-gray-100">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header setIsOpen={setIsOpen} />
                    <main className="flex-1 overflow-y-auto">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/orders" element={<Order />} />
                            <Route path="/returns" element={<Returns />} />
                            <Route path="/warranty" element={<WarrantyClaim />} />
                            <Route path="/refund-request" element={<RefundRequest />} />

                            <Route path="/products" element={<Product />} />
                            <Route path="/add-product" element={<AddProduct />} />
                            <Route path="/brands" element={<Brand />} />
                            <Route path="/add-brand" element={<AddBrand />} />
                            <Route path="/categories" element={<Category />} />
                            <Route path="/subcategories" element={<Subcategory />} />

                            <Route path="/customers" element={<Customer />} />
                            <Route path="/payment" element={<Payment />} />

                            <Route path="/add-coupon" element={<AddCoupon />} />
                            <Route path="/coupon-list" element={<CouponList />} />
                            <Route path="/add-gift-card" element={<AddGiftCard />} />
                            <Route path="/gift-card-list" element={<GiftCardList />} />
                            <Route path="/flash-sale" element={<FlashSale />} />
                            
                            <Route path="/report-analytics" element={<ReportsAnalytics />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}