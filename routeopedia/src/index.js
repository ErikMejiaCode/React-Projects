import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product.jsx";
import CreateProduct from "./Pages/CreateProduct.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import ProductList from "./Pages/Product.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Header />

      <Routes>
        // Basic navigation routes
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        // Product navigation
        <Route path="/product" element={<Product />}></Route>
        <Route path="/createproduct" element={<CreateProduct />}></Route>
        <Route path="/productdetails" element={<ProductDetails />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
