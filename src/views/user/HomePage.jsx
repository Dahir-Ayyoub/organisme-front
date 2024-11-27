import React from "react";
import Home from "components/user/home/Home";
import Nav from "components/user/home/Nav";
import Footer from "components/user/home/Footer";
import Features from "components/user/home/Features";
import '../../assets/css/output.css';
import Statistics from "components/user/home/Statistic";
import Contactus from "components/user/home/Contactus";
import { Route, Routes } from "react-router-dom";
import LoginSignupForm from "components/user/login/LoginSignupForm";

function HomePage() {
  return (
    <div className=" bg-white">
        <div className="container mx-auto flex flex-col">
          <Nav />
          <Home />
          </div>
          <Statistics />
          <Features />
          <Contactus />
          <Footer />
          <Routes>

        <Route to ='/login' element={<LoginSignupForm />} />
    </Routes>
    </div>
    
  );
}

export default HomePage;
