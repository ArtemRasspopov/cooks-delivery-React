import React from "react";
import style from "./SuccessfullyPopup.module.scss";

import { ReactComponent as DoneIcon } from "../../../sources/images/doneIcon.svg";

const SuccessfullyPopup = ({ text }) => {
  return (
    <div className={style.root}>
      {text}
      <div className={style.icon}>
        {" "}
        <DoneIcon />
      </div>
    </div>
  );
};

export default SuccessfullyPopup;
