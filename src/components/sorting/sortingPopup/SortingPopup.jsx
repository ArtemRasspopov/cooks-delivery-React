import React from "react";
import style from "./SortingPopup.module.scss";

const SortingPopup = ({ sortingList }) => {
  return (
    <ul className={style.sorting_popup}>
      {sortingList.map((item, index) => (
        <li key={index}>
          <button className={style.button}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default SortingPopup;
