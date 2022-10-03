import React from "react";
import style from "./Cart.module.scss";
import WhatsAppButton from "../../components/buttons/whatsAppButton/WhatsAppButton";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll } from "../../redux/slices/cartSlice";
import Recommendations from "../../components/recommendations/Recommendations";

//svg
import { ReactComponent as LogoSvg } from "../../sources/images/Logo.svg";
import CartCard from "../../components/curtCurd/CartCard";
import cartEmptyImage from "../../sources/images/cartEmpty.png";
import BuyPopup from "../../components/popups/buyPopup/BuyPopup";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import SuccessfullyPopup from "../../components/popups/successfullyPopup/SuccessfullyPopup";

function Cart() {
  const { totalPrice, totalQuantity, products } = useSelector(
    (state) => state.cartSlice
  );
  const dispatch = useDispatch();
  const [byPopupIsOpen, setByPopupIsOpen] = useState(false);
  const [successfullyPopupIsVisible, setSuccessfullyPopupIsVisible] =
  React.useState(false);

  const clearCart = () => {
    dispatch(removeAll());
  };

  const order = () => {
    setByPopupIsOpen(true);
  };

  const popupTimeout = () => {
    setTimeout(() => setSuccessfullyPopupIsVisible(false), 2000);
  }

  return (
    <>
      <div className={style.cart}>
        <CSSTransition
          in={successfullyPopupIsVisible}
          timeout={500}
          classNames="fade"
          unmountOnExit
          onEnter={() => popupTimeout()}
        >
          <div className="popup">
            <SuccessfullyPopup text={"Заказ оформлен"} />
          </div>
        </CSSTransition>
        <div className="container">
          <div className={style.inner}>
            <div className={style.header}>
              <Link to={"/"} className={style.logo}>
                <LogoSvg />
              </Link>
              <WhatsAppButton />
              {products.length > 0 && (
                <button className={style.button} onClick={() => clearCart()}>
                  Удалить все {totalQuantity} позиций
                </button>
              )}
            </div>
            {products.length > 0 ? (
              <>
                <div className={style.info}>
                  <h2 className={style.title}>
                    {totalQuantity} блюдa за {totalPrice} ₽
                  </h2>
                </div>
                <div className={style.cards}>
                  {products.map((product, id) => (
                    <CartCard
                      key={id}
                      id={id}
                      image={product.productData.Image_url}
                      title={product.productData.Title}
                      price={product.finalPrice}
                      quantity={product.quantity}
                    />
                  ))}
                  <button className={style.button} onClick={() => order()}>
                    Оформить заказ
                  </button>
                </div>
                <Recommendations />
                <Footer />
              </>
            ) : (
              <div className={style.cart_clear}>
                <div className={style.cart_clear_inner}>
                  <img src={cartEmptyImage} alt="cartempty" />
                  <p>Упс, ваша корзина пуста (:</p>
                </div>
                <Recommendations />
              </div>
            )}
          </div>
        </div>
        {byPopupIsOpen && <BuyPopup setByPopupIsOpen={setByPopupIsOpen} setSuccessfullyPopupIsVisible={setSuccessfullyPopupIsVisible}/>}
      </div>
    </>
  );
}

export default Cart;
