import React from "react";
import style from "./ProductCard.module.scss";
import prodImage from "../../sources/images/product-Images/prod-1.png";
import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";
import ProductCounter from "../productСounter/ProductCounter";

const ProductCurd = () => {
  return (
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
        <div className={style.buttons}>
          <ProductCounter/>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCurd;
