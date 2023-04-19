import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product.jsx";
import CreateProduct from "./Pages/CreateProduct.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import ProductList from "./Pages/ProductList";
import NotFound from "./NotFound";
import CryptoDetail from "./CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Header />

      <Routes>
        // Basic navigation routes
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cryptodetail/:cryptoSymbol/:id"
          element={<CryptoDetail />}
        ></Route>
        <Route
          path="/cryptodetail/:cryptoSymbol"
          element={<CryptoDetail />}
        ></Route>
        // Product navigation - Nested Routes
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
          <Route path="list" element={<ProductList />}></Route>
        </Route>
        //Not found route
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
