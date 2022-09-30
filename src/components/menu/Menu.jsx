import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

const Menu = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Restaurants", link: "notFound" },
    { name: "About us", link: "notFound" },
  ];

  return (
    <ul className={style.menu}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link className={style.link} to={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
