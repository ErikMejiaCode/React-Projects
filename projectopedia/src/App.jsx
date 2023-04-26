import React from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import TopicsCovered from "./Components/Page/TopicsCovered";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topiccovered" element={<TopicsCovered />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
