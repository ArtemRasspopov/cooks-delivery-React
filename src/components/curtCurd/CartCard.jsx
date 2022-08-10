import React from "react";
import style from "./CartCard.module.scss";
import ProductCounter from "../../components/productСounter/ProductCounter";

const CartCard = ({ title, image, counter, price }) => {
  console.log(image);
  return (
    <div className={style.card}>
      {image && (
        <div className={style.card_image}>
          <img src={image} alt="img" />
        </div>
      )}

      <div className={style.card_title}>
        <h2>{title}</h2>
      </div>
      {counter && <ProductCounter />}
      <p className={style.price}>{price} ₽</p>
    </div>
  );
};

export default CartCard;
