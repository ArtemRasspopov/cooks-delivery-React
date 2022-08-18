import React from "react";
import style from "./ProductCounter.module.scss";

//svg
import { ReactComponent as MinusSvg } from "../../sources/images/minus.svg";
import { ReactComponent as PlusSvg } from "../../sources/images/plus.svg";

const ProductCounter = ({minus, plus, ProductQuantity}) => {

  return (
    <div className={style.product_counter}>
      <button className={style.button} onClick={() => minus()}>
        <MinusSvg />
      </button>
      <p>{ProductQuantity}</p>
      <button className={style.button} onClick={() => plus()}>
        <PlusSvg />
      </button>
    </div>
  );
};

export default ProductCounter;
