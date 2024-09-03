import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section1 from "./Components/Sections/Section1/Section1";
import Section2 from "./Components/Sections/Section2/Section2";
import Section3 from "./Components/Sections/Section3/Section3";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Shop from "./Components/Products/Shop/Shop";
import WishList from "./Components/Products/WishList/WishList";
import AddToCart from "./Components/Products/AddToCart/AddToCart";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
