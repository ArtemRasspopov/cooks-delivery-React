import React from "react";
import ToCartButton from "../buttons/ToCartButton/ToCartButton";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import style from "./Header.module.scss"

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Menu />
      <ToCartButton title={"Cart"} />
    </div>
  );
};

export default Header;
