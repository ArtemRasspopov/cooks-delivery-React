import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/contentSlice";
import style from "./Сategories.module.scss";

const Сategories = () => {
  const categoriesList = [
    "Все",
    "Горячее",
    "Десерты",
    "Суши",
    "Напитки",
    "Закуски",
    "Супы",
  ];
  const dispatch = useDispatch()
  const category = useSelector((state) => state.contentSlice.category)

  function changeCategory(categoriesListItem, index) {
    dispatch(setCategory(categoriesListItem))
  }

  return (
    <ul className={style.categories}>
      {categoriesList.map((categoriesListItem, index) => (
        <li key={index} className={style.item}>
          <button className={`${style.button} ${category === categoriesListItem ? style.active : ''}`} onClick={() => changeCategory(categoriesListItem, index)}>{categoriesListItem}</button>
        </li>
      ))}
    </ul>
  );
};

export default Сategories;


