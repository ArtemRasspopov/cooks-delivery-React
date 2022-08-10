import React from "react";
import style from "./Recommendations.module.scss";
import cardImg from "../../sources/images/product-Images/prod-1.png";

const Recommendations = () => {
  return (
    <div className={style.recommendations}>
      <p className={style.title}>Рекомендуем :</p>
      <ul className={style.list}>
        <li className={style.item}>
          <div className={style.image}>
            <img src={cardImg} alt="img" />
          </div>
          <div>
            <p>Картофель с луком и белыми грибами</p>
            <p className={style.price}>860 ₽</p>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.image}>
            <img src={cardImg} alt="img" />
          </div>
          <div>
            <p>Картофель с луком и белыми грибами</p>
            <p className={style.price}>860 ₽</p>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.image}>
            <img src={cardImg} alt="img" />
          </div>
          <div>
            <p>Картофель с луком и белыми грибами</p>
            <p className={style.price}>860 ₽</p>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.image}>
            <img src={cardImg} alt="img" />
          </div>
          <div className={style.info}>
            <p>Картофель с луком и белыми грибами</p>
            <p className={style.price}>860 ₽</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Recommendations;
