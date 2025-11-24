import React from 'react';
import img from '../image/Odisha_Tourism.webp';
import { Link } from 'react-router-dom';

const Header = () => {

  // Open side navigation
  const openNav = () => {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    if (sidenav && main) {
      sidenav.style.width = "100%";
      main.style.marginLeft = "250px";
    }
  };

  // Close side navigation
  const closeNav = () => {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    if (sidenav && main) {
      sidenav.style.width = "0";
      main.style.marginLeft = "0";
    }
  };

  return (
    <header>
      {/* Top marquee */}
      <div className="container-fluid con">
        <marquee>
          In today’s world, almost everybody chooses to travel and tourism as their leisure. Traveling is a good way to learn about the world.
        </marquee>
      </div>

      {/* Main navigation bar */}
      <section className="nav-bar" id="header" role="navigation">
        <div className="logo">
          <img
            src={img}
            alt="Odisha Tourism Logo"
            style={{ height: '70px', width: '150px', position: 'relative', bottom: '12px' }}
          />
        </div>

        <ul className="menu1">
          <li><Link className='underline active' to="/tourism-management-system">Home</Link></li>
          <li><Link className='underline' to="/about-us">About</Link></li>
          <li><Link className='underline' to="/Package">Package</Link></li>
          <li><Link className='underline' to="/Gallery">Gallery</Link></li>
          <li><Link className='underline' to="/Contact">Contact Us</Link></li>
        </ul>
      </section>

      {/* Mobile side navigation */}
      <div id="header1">
        <div id="mySidenav" className="sidenav" role="menu">
          <button
            className="closebtn"
            onClick={closeNav}
            style={{ background: "none", border: "none", fontSize: "30px", cursor: "pointer" }}
            aria-label="Close navigation menu"
          >
            ×
          </button>
          <ul>
            <li><Link to="/tourism-management-system" onClick={closeNav}>Home</Link></li>
            <li><Link to="/about-us" onClick={closeNav}>About</Link></li>
            <li><Link to="/Package" onClick={closeNav}>Package</Link></li>
            <li><Link to="/Gallery" onClick={closeNav}>Gallery</Link></li>
            <li><Link to="/Contact" onClick={closeNav}>Contact Us</Link></li>
          </ul>
        </div>

        <div id="main">
          <button
            onClick={openNav}
            style={{
              fontSize: 30,
              cursor: 'pointer',
              float: 'right',
              background: 'none',
              border: 'none'
            }}
            aria-label="Open navigation menu"
          >
            <img
              src={img}
              alt="Odisha Tourism Logo"
              style={{ height: '60px', width: '150px', position: 'relative', right: '178px' }}
            />
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
