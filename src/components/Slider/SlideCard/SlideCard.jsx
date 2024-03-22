import React from "react";
import Slider from "react-slick";
import { bannerData } from "../../../data/data";

function SlideCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {bannerData.map((value, index) => {
          return (
            <div
              className="px-3 transition duration-300 bg-violet-300 relative
               py-1 h-[430px] !flex justify-center"
              key={index}
            >
              <div className="left p-3 md:w-2/4">
                <h1 className="text-xl lg:text-4xl  font-semibold">
                  {value.title}
                </h1>
                <p className="my-4 text-base lg:text-lg">{value.desc}</p>
                <button className=" absolute z-20 p-2 bg-blue-800 font-medium
                 text-white rounded-md outline-none">
                  Visit Collections
                </button>
              </div>
              <div className="w-[500px]">
                <img src={value.cover} className=" h-96 object-contain" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default SlideCard;
