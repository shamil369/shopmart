import React from 'react'
import Slider from "react-slick";
function FlashCard() {

    const NextArrowFlashCard=({onClick } )=> {
    
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='absolute top-[40%] w-12 h-12 bg-blue-500 rounded-[50%] transition duartion-400 -right-5 z-[5] text-lg hover:bg-blue-950 hover:text-white' >
                <i className='fa fa-long-arrow-right'></i>
            </button>
          </div>
        );
      }

      const PrevArrowFlashCard=({onClick } )=> {
    
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='absolute top-[40%] w-12 h-12 bg-blue-500 rounded-[50%] transition duartion-400 -left-5 z-[5] text-lg hover:bg-blue-950 hover:text-white' >
                <i className='fa fa-long-arrow-left'></i>
            </button>
          </div>
        );
      }

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow:<NextArrowFlashCard/>,
        prevArrow:<PrevArrowFlashCard/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  
    const productItems= [
          {
            id: 1,
            discount: 50,
            cover: "/slide-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: "/slide-1.png",
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: "/slide-1.png",
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: "/slide-1.png",
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: "/slide-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: "/slide-1.png",
            name: "Shoes",
            price: 100,
          },
        ]
      
  return (
    <>
    <Slider {...settings}>
    { productItems.map((productItems,index)=>{
        return(
            
      
       <div className="box 2xl:p-8" key={index}>
            <div className=" bg-white p-5 relative rounded-md shadow-3xl m-2 " >
                <div className="img">
                    <span className="absolute top-0 left-0 bg-orange-500 py-1 px-3 text-sm rounded-md text-white m-2"> {productItems.discount}% Off</span>
                    <img src={productItems.cover} className="" alt="" />
                    <div className='absolute top-0 right-0 m-2 transition duration-300 opacity-0 ' id="love">
                        <label>0</label><br/>
                        <i className='fa fa-heart'></i>
                    </div>
                </div>
                <div className="product-detail">
                    <h3 className='font-normal text-lg'>{productItems.name}</h3>
                    <div className='rate text-lg'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className='flex justify-between text-blue-950'>
                        <h4 className='text-lg'>{productItems.price}.00</h4>
                        <button className='outline-none border-1 border-blue-950 rounded-md hover:bg-blue-950 transition duration-300 text-blue-950 hover:text-white px-2'><i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
        )}     
) }
</Slider>
    </>
  )
}

export default FlashCard