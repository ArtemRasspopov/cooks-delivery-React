import React from "react";
import style from "./AddToCartButton.module.scss";

const AddToCartButton = ({buttonOnClick}) => {

  return (
    <button className={style.add_to_cart_button} onClick={() => buttonOnClick()}>
      Добавить
    </button>
  );
};

export default AddToCartButton;
