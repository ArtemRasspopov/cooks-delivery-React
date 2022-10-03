import React from "react";
import { CSSTransition } from "react-transition-group";
import Content from "../../components/content/Content";
import FirstScreen from "../../components/firstScreen/FirstScreen";
import ProductPopup from "../../components/popups/productPopup/ProductPopup";
import SuccessfullyPopup from "../../components/popups/successfullyPopup/SuccessfullyPopup";

const Home = () => {
  const [productPopupIsVisible, setProductPopupIsVisible] =
    React.useState(false);
  const [successfullyPopupIsVisible, setSuccessfullyPopupIsVisible] =
    React.useState(false);

  const popupTimeout = () => {
    setTimeout(() => setSuccessfullyPopupIsVisible(false), 2000);
  }

  return (
    <>
      <CSSTransition
        in={successfullyPopupIsVisible}
        timeout={500}
        classNames="fade"
        unmountOnExit
        onEnter={() => popupTimeout()}
      >
        <div className="popup">
          <SuccessfullyPopup text={"Добавлено в корзину"} />
        </div>
      </CSSTransition>
      <FirstScreen />
      <Content setProductPopupIsVisible={setProductPopupIsVisible} />
      {productPopupIsVisible && (
        <ProductPopup
          setProductPopupIsVisible={setProductPopupIsVisible}
          setSuccessfullyPopupIsVisible={setSuccessfullyPopupIsVisible}
        />
      )}
    </>
  );
};

export default Home;
