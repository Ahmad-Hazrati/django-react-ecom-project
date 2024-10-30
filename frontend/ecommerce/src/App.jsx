import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SignupScreen from "./components/screens/SignupScreen";
import CartScreen from "./components/screens/CartScreen";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/signup" element={<SignupScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
