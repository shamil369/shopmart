import React from "react";
import SlideCard from "./SlideCard/SlideCard";
import { useSelector } from "react-redux";
import { getShowCategory } from "../../redux/categorySlice";

function Slider() {
  const showCategory = useSelector(getShowCategory)
  return (
    <>
      <section className={`homeslide bg-white mt-2 shadow-md rounded-md transition-all duration-1000 ms-2 ${showCategory ? "w-[77%]" : " w-full"}`}>
        <div className="max-w-full m-auto p-8">
          <SlideCard />
        </div>
      </section>
    </>
  );
}

export default Slider;
