import React from "react";
import style from "./Sorting.module.scss";
import SortingPopup from "./sortingPopup/SortingPopup";
//svg
import { ReactComponent as ArrowSvg } from "../../sources/images/sorting.svg";
import { useSelector } from "react-redux";


const Sorting = () => {

  const activeSortItem = useSelector((state) => state.contentSlice.filter)
  const sortingList = ["Популярности", "Цене", "Алфавиту"];
  const [popupIsVisible, SetPopupIsVisible] = React.useState(false);
  const sortRef = React.useRef(null);

  function popupOnClick() {
    SetPopupIsVisible((prev) => !prev);
  }

  const handelClickOutside = (event) => {
    if (!event.path.includes(sortRef.current)) {
      SetPopupIsVisible(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handelClickOutside);

    return () => {
      document.body.removeEventListener("click", handelClickOutside);
    };
  }, []);

  return (
    <div className={style.sorting}>
      <div className={style.line}></div>
      <div
        className={style.sorting_box}
        onClick={() => popupOnClick()}
        ref={sortRef}
      >
        <div className={popupIsVisible ? style.icon : ""}>
          <ArrowSvg />
        </div>
        <p>
          Сортировка по: <span>{activeSortItem}</span>
        </p>
        {popupIsVisible && <SortingPopup activeSortItem={activeSortItem} sortingList={sortingList} />}
      </div>
    </div>
  );
};

export default Sorting;
