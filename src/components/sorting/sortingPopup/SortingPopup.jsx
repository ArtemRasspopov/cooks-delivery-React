import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, setFilter } from "../../../redux/slices/contentSlice";
import style from "./SortingPopup.module.scss";

const SortingPopup = ({ sortingList, activeSortItem }) => {
  const dispatch = useDispatch();

  const sortingData = {
    Цене : 'Price',
    Весу : 'Weight',
  }

  console.log(sortingData.Цене)

  function buttonOnClick(item) {
    dispatch(setFilter(sortingData.item));
    dispatch(fetchProducts(sortingData.item));
  }

  return (
    <ul className={style.sorting_popup}>
      {sortingList.map((item, index) => (
        <li key={index}>
          <button
            className={`${style.button} ${activeSortItem === item ? style.active : ''}`}
            target={item}
            onClick={() => buttonOnClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SortingPopup;
