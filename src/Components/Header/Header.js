import React, { Component } from "react";
import "./style.css";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-content">
          <button className="logo-button">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.HSHSNeZ6DcI5YnmWpEWMxwHaHa&pid=Api&P=0&h=180"
              alt="Instagram logo"
            />
          </button>
          <ul className="menu-list-container">
            <li>
              <AiOutlineHome className="menu-icon" />
              <button className="menu-item">Home</button>
            </li>
            <li>
              <CgProfile className="menu-icon" />
              <button className="menu-item">Profile</button>
            </li>
            <li>
              <AiOutlineHeart className="menu-icon" />
              <button className="menu-item">Notifications</button>
            </li>
            <li>
              <AiOutlinePlusCircle className="menu-icon" />
              <button className="menu-item">Create</button>
            </li>
            <li>
              <button className="logout-button">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
