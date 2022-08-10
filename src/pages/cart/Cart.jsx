import React from "react";
import style from "./Cart.module.scss";
import WhatsAppButton from "../../components/buttons/whatsAppButton/WhatsAppButton";
import Footer from "../../components/footer/Footer";

//svg
import { ReactComponent as LogoSvg } from "../../sources/images/Logo.svg";
import CartCard from "../../components/curtCurd/CartCard";
import cardImg from "../../sources/images/product-Images/prod-1.png";
import Recommendations from "../../components/recommendations/Recommendations";

function Cart() {
  return (
    <div className={style.cart}>
      <div className="container">
        <div className={style.inner}>
          <div className={style.header}>
            <a href={"/"} className={style.logo}>
              <LogoSvg />
            </a>
            <WhatsAppButton />
            <button className={style.button}>Заказать 1 блюдо за 430₽</button>
          </div>
          <div className={style.info}>
            <h2 className={style.title}>5 блюд на 2 530₽</h2>
          </div>
          <div className={style.cards}>
            <CartCard
              image={cardImg}
              counter={true}
              title={"Тар-тар из лососся на авокадо"}
              price={"1800"}
            />
            <CartCard
              image={cardImg}
              counter={true}
              title={"Картофель с луком и белыми грибами"}
              price={"1800"}
            />
            <CartCard title={"Персон"} counter={true} price={"1800"} />
            <CartCard title={"Доставка"} counter={false} price={"0"} />
          </div>
          <button className={style.button}>Оформить доставку за 2 530₽</button>
          <Recommendations />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Cart;
