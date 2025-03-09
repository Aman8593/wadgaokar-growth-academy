import React from "react";
import Image from "next/image";
import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-cont">
        <div className="logo-cont">
          <Image
            className="logo"
            alt="logo"
            src="/images/logo-removebg.png"
            height={100}
            width={300}
          />
        </div>
        <div className="navbar-links-cont">
          <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/gallery">Gallery</a>
            <div className="dropdown">
              <a href="#courses" className="dropbtn">
                Courses
              </a>
              <div className="dropdown-content">
                <a href="/free-demo">Free Demo</a>
                <a href="/basic-price-action">Basic Price Action</a>
                <a href="/advance-price-action">Advance Price Action</a>
              </div>
            </div>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
