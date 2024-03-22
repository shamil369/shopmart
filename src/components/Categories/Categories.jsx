import React, { useEffect } from "react";
import {
  getAllCategories,
} from "../../redux/categorySlice";
import { useSelector } from "react-redux";
function Categories() {
  const categories = useSelector(getAllCategories);

  return (
    <div className=" w-[20%] shadow-md h-[500px] py-2 rounded-lg mt-2
     bg-white overflow-scroll">
      {categories.map((category, index) => {
        return (
          <div
            className=" flex px-3 text-xl transition duration-300
             hover:bg-orange-300 cursor-pointer py-1 "
            key={index}
          >
            <i
              className={`${category.image} flex justify-center items-center me-2 mt-1`}
            ></i>
            <span className="capitalize text-xl">
              {category.name.replace("-", " ")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
