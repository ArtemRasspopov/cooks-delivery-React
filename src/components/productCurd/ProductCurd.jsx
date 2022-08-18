import React from "react";
import style from "./ProductCard.module.scss";
import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";
import ProductCounter from "../productСounter/ProductCounter";
import { useDispatch } from "react-redux";
import { setFinalPrice, setProductData, setQuantity } from "../../redux/slices/selectedProductSlice";

const ProductCurd = ({productItem, setProductPopupIsVisible}) => {

  const dispatch = useDispatch()
  const [ProductQuantity, setProductQuantity] = React.useState(1);

  const reduceQuantity = () => {
    if (ProductQuantity > 1) {
      setProductQuantity((prev) => --prev);
    }
  };

  const addQuantity = () => {
    if (ProductQuantity < 5) {
      setProductQuantity((prev) => ++prev);
    }
  };

  const addToCart = () => {
    dispatch(setProductData(productItem))
    dispatch(setQuantity(ProductQuantity))
    dispatch(setFinalPrice(ProductQuantity * productItem.Price))
    setProductPopupIsVisible(true)
  }

  return (
    <div className={style.product_curd}>
      <div className={style.image_inner}>
        <img src={productItem.Image_url} alt={"productimage"} />
      </div>
      <div className={style.inner}>
        <p className={style.title}>{productItem.Title}</p>
        <ul className={style.info}>
          <li>{productItem.Weight} г</li>
          <li>{productItem.Calories} ккал</li>
          <li>{productItem.Price} ₽</li>
        </ul>
        <p className={style.description}>{productItem.Description}</p>
        <div className={style.buttons}>
          <ProductCounter ProductQuantity={ProductQuantity} minus={reduceQuantity} plus={addQuantity}/>
          <AddToCartButton buttonOnClick={addToCart}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCurd;
