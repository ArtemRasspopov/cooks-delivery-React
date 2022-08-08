import React from "react";
import style from "./Logo.module.scss";
//svg
import { ReactComponent as LogoSvg } from "../../sources/images/Logo.svg";

const Logo = () => {
  return (
    <a href={"/"} className={style.logo}>
      <LogoSvg />
    
    </a>
  );
};

export default Logo;
