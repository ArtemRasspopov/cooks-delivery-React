import React from "react";
import Content from "../../components/content/Content";
import FirstScreen from "../../components/firstScreen/FirstScreen";
import ProductPopup from "../../components/popups/productPopup/ProductPopup";

const Home = () => {
  const [productPopupIsVisible, setProductPopupIsVisible] =
    React.useState(false);

  return (
    <>
      <FirstScreen />
      <Content setProductPopupIsVisible={setProductPopupIsVisible}/>
      {productPopupIsVisible && <ProductPopup setProductPopupIsVisible={setProductPopupIsVisible}/>}
    </>
  );
};

export default Home;
