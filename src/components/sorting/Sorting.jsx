import React from "react";
import style from "./Sorting.module.scss";
//svg
import { ReactComponent as ArrowSvg } from "../../sources/images/sorting.svg";
import SortingPopup from "./sortingPopup/SortingPopup";

const Sorting = () => {
  const sortingList = ["Популярности", "Цене", "Алфавиту"];

  return (
    <div className={style.sorting}>
      <div className={style.line}></div>
      <div className={style.sorting_box}>
        <ArrowSvg />
        <p>
          Сортировка по: <span>популярности</span>
        </p>
        <SortingPopup sortingList={sortingList}/>
      </div>
    </div>
  );
};

export default Sorting;
