import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductDetail from "./screens/productDetail/ProductDetail";
import Cart from "./screens/cart/Cart";


const RoutesFile = () => {

    const [searchData, setSearchData] = useState("");
    const [searchDataList, setSearchDataList] = useState(null);
    const [cartItemCount, setCartItemCount] = useState(0);
    console.log("🚀 ~ file: Routes.js:15 ~ RoutesFile ~ cartItemCount:", cartItemCount)

    return (
        <BrowserRouter>
            <Header searchData={searchData} setSearchData={setSearchData} setSearchDataList={setSearchDataList} cartItemCount={cartItemCount} />
            <Routes>
                <Route path="/" element={<Home searchData={searchData} searchDataList={searchDataList} />} />
                <Route path="/productdetail/:id" element={<ProductDetail cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesFile