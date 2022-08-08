import React from "react";
import style from "./Menu.module.scss";

const Menu = () => {
  const menuItems = ["Home", "Restaurants", "About us"];

  return (
    <ul className={style.menu}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a className={style.link} href={"/"}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
