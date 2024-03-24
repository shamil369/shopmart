import React, { useState } from "react";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import FlashDeals from "../../components/FlashDeals/FlashDeals";
import Speciality from "../../components/Speciality/Speciality";
import Products from "../../components/Products/Products";

function Home() {


  return (
    <section className="home">
      <div className="max-w-full m-auto flex justify-between px-14">
        <Categories />
        <Slider  />
      </div>
      <Products />
      <FlashDeals />
      <Speciality />
    </section>
  );
}

export default Home;
