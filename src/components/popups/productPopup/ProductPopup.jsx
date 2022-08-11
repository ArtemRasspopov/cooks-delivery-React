import React from "react";
import style from "./ProductPopup.module.scss";
import prodImage from "../../../sources/images/product-Images/prod-1.png";
// import ProductCounter from "../../productСounter/ProductCounter";
// import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton";
//svg
import { ReactComponent as CheckerSvg } from "../../../sources/images/checker.svg";
import { ReactComponent as ExitSvg } from "../../../sources/images/exit.svg";
import { ReactComponent as HeartSvg } from "../../../sources/images/heart.svg";

const ProductPopup = () => {
  return (
    <div className={style.product_popup}>
      <div className={style.product_curd}>
        <div className={style.image_inner}>
          <img src={prodImage} alt={"productimage"} />
        </div>
        <div className={style.inner}>
          <p className={style.title}>Картофель с луком и белыми грибами</p>
          <ul className={style.info}>
            <li>320 г</li>
            <li>1 040 ккал</li>
            <li>430₽</li>
          </ul>
          <p className={style.description}>
            Это вкусное и сытное блюдо является любимым блюдом во многих семьях,
            полюбите его и вы.
          </p>
          <form className={style.additions}>
            <p className={style.additions_title}>Дополнительно:</p>
            <ul className={style.additions_items}>
              <li>
                <label className={style.additions_item}>
                  <p>Больше лука</p>
                  <p>+ 20₽</p>
                  <label>
                    <input
                      className={style.additions_checkbox}
                      type="checkbox"
                    />
                    <div className={style.checker}>
                      <CheckerSvg />
                    </div>
                  </label>
                </label>
              </li>
              <li>
                <label className={style.additions_item}>
                  <p>Больше лука</p>
                  <p>+ 20₽</p>
                  <label>
                    <input
                      className={style.additions_checkbox}
                      type="checkbox"
                    />
                    <div className={style.checker}>
                      <CheckerSvg />
                    </div>
                  </label>
                </label>
              </li>
            </ul>
          </form>
          <button className={style.add_button}>Добавить 430 ₽</button>
        </div>
        <a className={style.exit} href={"/"}>
          <ExitSvg />
        </a>
        <button className={style.add_to_liked}>
          <HeartSvg />
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;
