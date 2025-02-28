import React from "react";
import Image from "next/image";
import "../styles/navbar.scss"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-cont">
        <div className="logo-cont">
          <Image className="logo" alt="logo" src="/images/logo-removebg.png" height={100} width={300} />
        </div>
        <div className="navbar-links-cont">
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#about">Gallery</a>
            <a href="#about">Courses</a>
            <a href="#about">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
