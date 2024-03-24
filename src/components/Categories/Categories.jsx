import React, { useEffect } from "react";
import {
  getAllCategories,
} from "../../redux/categorySlice";
import { useSelector,useDispatch } from "react-redux";
import { setCategorySelection,getSelectedCategory,getShowCategory } from "../../redux/categorySlice";

function Categories() {
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory)
  const showCategory = useSelector(getShowCategory)

  const handleCategorySelection = (categoryName)=>{
    dispatch(setCategorySelection(categoryName));
  }

  return (
    <div className={` w-[20%] shadow-md h-[500px] py-2 rounded-lg mt-2
     bg-white ${showCategory ? "" : "hidden"} `}>
      {categories.map((category, index) => {
        return (
          <div
            className={` flex px-3 text-base xl:text-xl transition duration-300
             hover:bg-orange-300 cursor-pointer py-1 ${selectedCategory === category.name? "bg-orange-300":""} `}
            key={index}
            onClick={()=>handleCategorySelection(category.name)}
            href="products"
          >
            <i
              className={`${category.image} flex justify-center w-8 h-7 items-center me-2 mt-1`}
            ></i>
            <span className="capitalize text-base xl:text-xl">
              {category.name.replace("-", " ")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
