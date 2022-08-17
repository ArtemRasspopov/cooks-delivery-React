import React from "react";
import style from "./Content.module.scss";
import Сategories from "../categories/Сategories";
import Sorting from "../sorting/Sorting";
import ProductCurd from "../productCurd/ProductCurd";
import Footer from "../footer/Footer";
import ProductCurdSkeleton from "../skeletons/productCurdSkeleton/ProductCurdSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../../redux/slices/contentSlice";

const Content = () => {
  const productsStatus = useSelector((state) => state.contentSlice.status);
  const productsList = useSelector((state) => state.contentSlice.productsList);
  const activeSort = useSelector((state) => state.contentSlice.filter);
  const category = useSelector((state) => state.contentSlice.category)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts({activeSort, category}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, activeSort]);

  return (
    <div className={style.content}>
      <div className="container">
        <Сategories />
        <Sorting />
        <div className={style.product_list}>
          {productsStatus === "loading"
            ? [...new Array(6)].map((_, id) => <ProductCurdSkeleton key={id} />)
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
