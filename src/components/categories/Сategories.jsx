import React from "react";
import style from "./Сategories.module.scss";

const Сategories = () => {
  const categoriesList = [
    "Любимое",
    "Закуски",
    "Салаты",
    "Горячее",
    "Суши и роллы",
    "Супы",
    "Детское",
    "Десерты",
    "Напитки",
  ];

  return (
    <ul className={style.categories}>
      {categoriesList.map((item, index) => (
        <li key={index} className={style.item}>
          <button className={style.button}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default Сategories;
