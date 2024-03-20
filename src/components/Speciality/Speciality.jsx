import React from 'react'

function Speciality() {

    const data = [
        {
          cover: <i class='fa fa-truck'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-headphones'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]

  return (
    <>
    
      <section className='text-center background'>
        <div className='max-w-full px-5 grid md:grid-cols-2 lg:grid-cols-4 '>
          {data.map((val, index) => {
            return (
              <div className='bg-white p-5 relative rounded-md shadow-3xl m-2' key={index}>
                <div className='m-auto w-16 h-12 text-2xl w-12 h-12 bg-gray-300 text-center rounded-[100%] leading-10 pt-1'>
                  <i>{val.cover}</i>
                </div>
                <h3 className='font-medium'>{val.title}</h3>
                <p className='text-base mt-1 text-gray-600'>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    
    </>
  )
}

export default Speciality