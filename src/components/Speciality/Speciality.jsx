import React from "react";

function Speciality() {
  const specialityData = [
    {
      cover:"fa fa-truck",
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: "fa fa-id-card",
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: "fa fa-shield",
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: "fa fa-headphones",
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <>
      <section className="text-center  m-5">
        <div className="max-w-full px-5 grid md:grid-cols-2 lg:grid-cols-4 ">
          {specialityData.map((value, index) => {
            
            return (
              <div
                className="bg-white p-5 relative rounded-md shadow-3xl m-2"
                key={index}
              >
                <div className="m-auto w-16 h-12 text-2xl bg-gray-300 
                text-center rounded-[100%] leading-10 pt-1"
                >
                  <i className={`${value.cover}`}></i>
                </div>
                <h3 className="font-medium">{value.title}</h3>
                <p className="text-base mt-1 text-gray-600">{value.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Speciality;
