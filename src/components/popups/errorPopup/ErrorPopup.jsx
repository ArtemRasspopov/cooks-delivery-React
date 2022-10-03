import React from "react";
import style from "./ErrorPopup.module.scss";

import { ReactComponent as ErrorIcon } from "../../../sources/images/errorIcon.svg";

const ErrorPopup = ({ text }) => {
  return (
    <div className={style.root}>
      {text}
      <div className={style.icon}>
        <ErrorIcon />
      </div>
    </div>
  );
};

export default ErrorPopup;
