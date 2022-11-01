import React, { useState } from "react";
import { NavItems } from "./NavItems";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      {/* Menu Icon  */}
      <div className="menu_icon" onClick={() => setOpenNav(!openNav)}>
        <i className={openNav ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {/* Search Icon  */}
      <div className="search_icon">
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      {/* Shop Icon  */}
      <div className="shop_icon">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>

      {/* Logo */}
      <div className="logo">
        <img src="img/Logo/logo.png" alt="Nike" />
      </div>

      {/* NavMenu  */}
      <ul className={openNav ? "nav_menu active" : "nav_menu "}>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
