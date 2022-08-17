import React from "react";
import style from "./Sorting.module.scss";
import SortingPopup from "./sortingPopup/SortingPopup";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/contentSlice";
//svg
import { ReactComponent as ArrowSvg } from "../../sources/images/sorting.svg";

const Sorting = () => {
  const sortingList = [
    { name: "Цене", property: "Price" },
    { name: "Весу", property: "Weight" },
    { name: "Калориям", property: "Calories" },
  ];
  const [popupIsVisible, SetPopupIsVisible] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);
  const dispatch = useDispatch();
  const sortRef = React.useRef(null);

  function popupOnClick() {
    SetPopupIsVisible((prev) => !prev);
  }

  React.useEffect(() => {
    dispatch(setFilter(sortingList[activeSort].property));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSort]);

  React.useEffect(() => {
    const handelClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        SetPopupIsVisible(false);
      }
    };

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
          Сортировка по: <span>{sortingList[activeSort].name}</span>
        </p>
        {popupIsVisible && (
          <SortingPopup
            sortingList={sortingList}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
        )}
      </div>
    </div>
  );
};

export default Sorting;
