import React from "react";
import style from "./FirstScreen.module.scss";
import BgImage from "../../sources/images/firstScreenBg.png";
import soup1Image from "../../sources/images/soup-1.png";

//svg
import { ReactComponent as ScrollToSvg } from "../../sources/images/scrollTo.svg";
import Header from "../header/Header";

const FirstScreen = () => {
  return (
    <div className={style.firstScreen}>
      <div
        className={style.bg_image}
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="container">
          <div className={style.inner}>
            <img className={style.image} src={soup1Image} alt="soupimage" />
            <Header />
            <div className={style.middle}>
              <div>
                <h1 className={style.title}>Enjoy Delicious Meals</h1>
                <p className={style.subtitle}>
                  Meals delivered to your doorstep.
                </p>
              </div>
              <a className={style.scroll_to} href={"/"}>
                Scroll to see more <ScrollToSvg />
              </a>
            </div>
            <div className={style.bottom}>
              <div className={style.bottom_item}>
                <span>Price</span>
                <p>N3000</p>
              </div>
              <div className={style.bottom_item}>
                <p>Tasty Soup</p>
                <span className={style.bottom_item_center}>
                  Rice noodles, soy sauce, hoisin, chili garlic sauce, honey
                </span>
              </div>
              <div className={style.bottom_item}>
                <span>preparation</span>
                <p>20 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
