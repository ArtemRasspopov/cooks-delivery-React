import React from "react";
import style from "./CartCard.module.scss";
import ProductCounter from "../../components/productСounter/ProductCounter";
import { useDispatch } from "react-redux";
import {removeProduct} from '../../redux/slices/cartSlice.jsx'

//svg
import { ReactComponent as ExitSvg } from "../../sources/images/exit.svg";
import {
  personsCountAdd,
  personsCountReduce,
} from "../../redux/slices/cartSlice";


const CartCard = ({ title, image, price, quantity, id }) => {
  const dispatch = useDispatch();

  const minus = () => {
    if (quantity > 1) {
      dispatch(personsCountReduce(id));
    }
  };

  const plus = () => {
    if (quantity < 5)
    dispatch(personsCountAdd(id));
  };

  const itemRemove = () => {

    dispatch(removeProduct({title, price, quantity}))
  }

  return (
    <>
      <div className={style.card}>
        {image && (
          <div className={style.card_image}>
            <img src={image} alt="img" />
          </div>
        )}
        <div className={style.card_title}>
          <h2>{title}</h2>
        </div>
        <ProductCounter ProductQuantity={quantity} minus={minus} plus={plus} />
        <p className={style.price}>{price} ₽</p>
        <button className={style.remove} onClick={() => itemRemove()}>
          <ExitSvg />
        </button>
      </div>
    </>
  );
};

export default CartCard;
