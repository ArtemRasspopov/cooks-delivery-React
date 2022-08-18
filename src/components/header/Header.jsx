import React from "react";
import { Link } from "react-router-dom";
import ToCartButton from "../buttons/ToCartButton/ToCartButton";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Menu />
      <Link to="cart">
        <ToCartButton title={"Cart"} />
      </Link>
    </div>
  );
};

export default Header;
