import React from "react";
import style from "./Recommendations.module.scss";
import { useSelector } from "react-redux";

const Recommendations = () => {
  const items = useSelector((state) => state.contentSlice.productsList);

  return (
    <div className={style.recommendations}>
      <p className={style.title}>Рекомендуем :</p>
      <ul className={style.list}>
        {items.slice(0,4).map((item, index) => (
          <li className={style.item} key={index}>
            <div className={style.image}>
              <img src={item.Image_url} alt="img" />
            </div>
            <div>
              <p>{item.Title}</p>
              <p className={style.price}>{item.Price} ₽</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
