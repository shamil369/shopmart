import React from 'react'

function Categories() {

    const data=[
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
        {categoryImage:"https://cdn-icons-png.freepik.com/512/4804/4804045.png",categoryName:"Fashion"},
     
    ]

  return (
    <div className=' w-[20%] shadow-md h-[500px] py-2 rounded-lg mt-2 bg-white'>
        {
            data.map((category,index)=>{
                return (
                    <div className=' flex px-3 transition duration-300 hover:bg-orange-300 cursor-pointer py-1 ' key={index}>
                        <img className="object-contain me-2" src={category.categoryImage} alt='' width="25px" height="25px"/>
                        <span className='capitalize text-xl'>{category.categoryName}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Categories