import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/contentSlice";
import style from "./Сategories.module.scss";

const Сategories = () => {
  const categoriesList = [
    "Все",
    "Закуски",
    "Горячее",
    "Супы",
    "Детское",
    "Десерты",
    "Напитки",
  ];
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = React.useState(0)

  function changeCategory(categoriesListItem, index) {
    dispatch(setCategory(categoriesListItem))
    setActiveCategory(index)
  }

  return (
    <ul className={style.categories}>
      {categoriesList.map((categoriesListItem, index) => (
        <li key={index} className={style.item}>
          <button className={`${style.button} ${activeCategory === index ? style.active : ''}`} onClick={() => changeCategory(categoriesListItem, index)}>{categoriesListItem}</button>
        </li>
      ))}
    </ul>
  );
};

export default Сategories;
