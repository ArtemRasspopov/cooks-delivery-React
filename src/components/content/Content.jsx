import React from "react";
import style from "./Content.module.scss";
import Сategories from "../categories/Сategories";
import Sorting from "../sorting/Sorting";
import ProductCurd from "../productCurd/ProductCurd";
import Footer from "../footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../../redux/slices/contentSlice";
import ProductCurdSkeleton from "../skeletons/productCurdSkeleton/ProductCurdSkeleton";

const Content = () => {
  const productsStatus = useSelector((state) => state.contentSlice.status);
  const productsList = useSelector((state) => state.contentSlice.productsList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={style.content}>
      <div className="container">
        <Сategories />
        <Sorting />
        <div className={style.product_list}>
          {productsStatus === "loading"
            ? [...new Array(6)].map((_, id) => <ProductCurdSkeleton key={id}/>)
            : productsList.map((item) => (
                <ProductCurd {...item} key={item.Id} />
              ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Content;
