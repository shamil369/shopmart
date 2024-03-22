import React from "react";
import SlideCard from "./SlideCard/SlideCard";

function Slider() {
  return (
    <>
      <section className="homeslide bg-white mt-2 shadow-md rounded-md ms-2 w-[77%]">
        <div className="max-w-full m-auto p-8">
          <SlideCard />
        </div>
      </section>
    </>
  );
}

export default Slider;
