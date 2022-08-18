import React from "react";
import style from "./ProductPopup.module.scss";
// import prodImage from "../../../sources/images/product-Images/prod-1.png";
// import ProductCounter from "../../productСounter/ProductCounter";
// import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton";
//svg
import { ReactComponent as CheckerSvg } from "../../../sources/images/checker.svg";
import { ReactComponent as ExitSvg } from "../../../sources/images/exit.svg";
import { ReactComponent as HeartSvg } from "../../../sources/images/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, SetEdition } from "../../../redux/slices/selectedProductSlice";

const ProductPopup = ({ setProductPopupIsVisible }) => {
  const { productData, finalPrice } = useSelector(
    (state) => state.selectedProductSlice
  );
  const dispatch = useDispatch();

  const popupClose = () => {
    dispatch(clearStore())
    setProductPopupIsVisible(false)
  }

  return (
    <>
      <div className={style.product_popup}>
        <div className={style.product_curd}>
          {/* <div className={style.image_inner}>
            <img src={prodImage} alt={"productimage"} />
          </div> */}
          <div className={style.inner}>
            <p className={style.title}>{productData.Title}</p>
            <ul className={style.info}>
              <li>{productData.Weight} г</li>
              <li>{productData.Calories} ккал</li>
              <li>{productData.Price} ₽</li>
            </ul>
            <p className={style.description}>{productData.Description}</p>
            <form className={style.additions}>
              <p className={style.additions_title}>Дополнительно:</p>
              <ul className={style.additions_items}>
                {productData.Additions.map((addition, index) => (
                  <li key={index}>
                    <label className={style.additions_item}>
                      <p>{addition.Title}</p>
                      <p>+ {addition.Price} ₽</p>
                      <label>
                        <input
                          className={style.additions_checkbox}
                          type="checkbox"
                          onClick={() => dispatch(SetEdition(addition))}
                        />
                        <div className={style.checker}>
                          <CheckerSvg />
                        </div>
                      </label>
                    </label>
                  </li>
                ))}
              </ul>
            </form>
            <button className={style.add_button}>
              Добавить {finalPrice} ₽
            </button>
          </div>
          <button
            className={style.exit}
            onClick={() => popupClose()}
          >
            <ExitSvg />
          </button>
          <button className={style.add_to_liked}>
            <HeartSvg />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPopup;
