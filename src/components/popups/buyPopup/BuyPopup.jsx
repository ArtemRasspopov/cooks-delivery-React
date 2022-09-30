import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./BuyPopup.module.scss";

import cardImg from "../../../sources/images/product-Images/prod-1.png";
import Logo from "../../logo/Logo";
import ReactInputMask from "react-input-mask";
import { useState } from "react";
import { removeAll } from "../../../redux/slices/cartSlice";

const BuyPopup = ({ setByPopupIsOpen }) => {
  const orderInfo = useSelector((state) => state.cartSlice);
  const [numberValue, setNumberValue] = useState("");
  const dispatch = useDispatch()

  const closePopup = () => {
    setByPopupIsOpen(false);
  };

  const order = () => {
    if (
      numberValue.split("").some((item) => item === "_") ||
      numberValue.split("").length < 1
    ) {
      console.log(numberValue.split("").some((item) => item === "_"));
      alert("Заполните данные номера");
    } else {
      setByPopupIsOpen(false);
      alert("Заказ оформлен");
      dispatch(removeAll())
    }
  };

  return (
    <div className={style.root}>
      <div className={style.inner}>
        <p className={style.title}>
          <Logo />
          Заказ N:32515745
        </p>
        <p>Вы заказали :</p>
        <ul className={style.list}>
          {orderInfo.products.map((item, index) => (
            <li className={style.item} key={index}>
              <img className={style.image} src={cardImg} alt="" />
              <div>
                <p className={style.list__title}>{item.productData.Title}</p>
                <ul className={style.info}>
                  <li>{item.quantity} пр</li>
                  <li>{item.productData.Weight} г</li>
                  <li>{item.productData.Calories} ккал</li>
                  <li className={style.info__price}>
                    {item.finalPrice} ₽
                  </li>
                </ul>

                {item.additions.length > 0 && (
                  <ul className={`${style.info} add`}>
                    {item.additions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                <p className={style.price}>{}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.number__label}>
          Укажите ваш номер
          <ReactInputMask
            mask="+7 (999) 999-99-99"
            className={style.number}
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={numberValue}
            onChange={(event) =>
              setNumberValue((prev) => (prev = event.target.value))
            }
          ></ReactInputMask>
        </div>
        <div className={style.buttons}>
          <button className={style.add_button} onClick={() => order()}>
            Заказать за {orderInfo.totalPrice} ₽
          </button>
          <button className={style.add_button} onClick={() => closePopup()}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPopup;
