import React from "react";
import style from "./SortingPopup.module.scss";

const SortingPopup = ({ sortingList, activeSort, setActiveSort }) => {
  console.log(sortingList);

  function buttonOnClick(index) {
    setActiveSort(index);
  }

  return (
    <ul className={style.sorting_popup}>
      {sortingList.map((sortingListItem, index) => (
        <li key={index}>
          <button
            className={`${style.button} ${
              activeSort === index ? style.active : ""
            }`}
            onClick={() => buttonOnClick(index)}
          >
            {sortingListItem.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SortingPopup;
