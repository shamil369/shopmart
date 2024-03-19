import React from 'react';
import Slider from "react-slick";


function SlideCard() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        appendDots:(dots)=>{
            return <ul style={{margin:"0px"}}>{dots}</ul>
        },
      
      };

    const Sdata = [
        {
          id: 1,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: "/perfume.png",
        },
        {
          id: 2,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: "/slide-1.png",
        },
        {
          id: 3,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: "/slide-3.png",
        },
        // {
        //   id: 4,
        //   title: "50% Off For Your First Shopping",
        //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        //   cover: "https://toppng.com/uploads/preview/luxury-perfume-png-image-with-transparent-background-dior-miss-dior-cherie-eau-de-toilette-50-ml-11563546433lmicyllken.png",
        // },
      ]
  return (
    <>
    <Slider {...settings}>

    {
        Sdata.map((value,index)=>{
           return (
        <div className='px-3 transition duration-300 bg-violet-300 relative py-1 h-[430px] !flex justify-center' key={index}>
            <div className='left p-3'>
                <h1 className='text-4xl font-semibold'>{value.title}</h1>
                <p className='my-4 text-lg'>{value.desc}</p>
                <button className=' absolute z-20 p-2 bg-blue-800 text-white rounded-md outline-none'>Visit Collections</button>
            </div>
            <div className="">
                <img src={value.cover} className="w-96 h-96 object-contain"/>
            </div>
        </div>
           ) 
        })
    }
          </Slider>
    </>
  )
}

export default SlideCard

//box = px-3 transition duration-300 hover:bg-orange-300 cursor-pointer py-1