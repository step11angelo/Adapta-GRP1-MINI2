import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Sidebar.css";
import {
  FaTimes,
  FaHome,
  FaExclamationCircle,
  FaImage,
  FaBars,
  FaBuffer,
  FaLink,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Sidebar = ({ open }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <nav className={open ? "sidebar show-sidebar" : "sidebar"}>
      <ul className="links">
        <li>
          <Link to={"/"}>
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <FaExclamationCircle className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link to={"/gallery"}>
            <FaImage className="icon" />
            Gallery
          </Link>
        </li>
        <li>
          <Link to={"/services"}>
            <FaBuffer className="icon" />
            Services
          </Link>
        </li>
        <li>
          <Link to={"/connect"}>
            <FaLink className="icon" />
            Connect
          </Link>
        </li>
      </ul>
      <div className="socials">
        <p>Visit Us:</p>
        <div className="socials-container">
          <a target="_blank" href="https://www.facebook.com/">
            <FaFacebookSquare className="icon" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram className="icon" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/">
            <FaTiktok className="icon" />
          </a>
          <a target="_blank" href="https://twitter.com/">
            <FaTwitter className="icon" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>

      {/* <button className="exit-btn">
        <FaTimes className="exit sidebar-icons" />
      </button> */}
    </nav>
  );
};

export default Sidebar;
