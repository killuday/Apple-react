import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled ">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Store
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Mac
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              I Pad
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              I Phone
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Watch
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              AirPods
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Tv & Home
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Entertainment
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Accessories
            </a>
          </li>
          <li>
            <a className="link-styled text-dn" href="">
              Support
            </a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
