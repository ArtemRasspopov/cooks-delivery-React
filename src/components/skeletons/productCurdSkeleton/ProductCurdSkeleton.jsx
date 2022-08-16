import React from "react";
import style from "./ProductCurdSkeleton.module.scss";

const ProductCurdSkeleton = () => {
  return (
    <div className={style.ProductCurdSkeleton}>
      <div style={{ height: "300px", width: "100%" }} />
      <div className={style.inner}>
        <div style={{ height: "17px", width: "164px" }} />
        <div style={{ height: "17px", width: "164px" }} />
        <div style={{ height: "60px", width: "100%" }} />
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px', backgroundColor: 'transparent'}}>
          <div style={{ height: "15px", width: "81px" }} />
          <div style={{ height: "40px", width: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCurdSkeleton;
