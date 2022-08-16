import React from "react";
import style from "./ProductCard.module.scss";
import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";
import ProductCounter from "../productСounter/ProductCounter";

const ProductCurd = ({Title, Weight, Calories, Price, Description, Image_url}) => {
  return (
    <div className={style.product_curd}>
      <div className={style.image_inner}>
        <img src={Image_url} alt={"productimage"} />
      </div>
      <div className={style.inner}>
        <p className={style.title}>{Title}</p>
        <ul className={style.info}>
          <li>{Weight} г</li>
          <li>{Calories} ккал</li>
          <li>{Price} ₽</li>
        </ul>
        <p className={style.description}>
          {Description}
        </p>
        <div className={style.buttons}>
          <ProductCounter/>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCurd;
