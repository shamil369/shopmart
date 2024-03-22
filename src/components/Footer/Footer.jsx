import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-blue-950 py-24 text-white">
        <div className="max-w-full px-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="box p-1">
            <div className="mb-6 ">
              <img
                className="inline bg-blue-950"
                src="/shopNewLogo.jpg"
                width="50px"
                alt="Logo"
              />
              <h2 className="inline font-semibold text-3xl">
                <span className="text-orange-400">
                  SHOP<span className="text-blue-900">CART</span>
                </span>
              </h2>
            </div>
            <p className="text-sm font-light opacity-60 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className=" flex justify-center gap-2">
              <div className=" bg-blue-900 p-2 lg:py-4 lg:px-5 rounded-md flex justify-center">
                <i class="fa-brands fa-google-play mt-1 "></i>
                <span className="text-sm lg:text-base">Google Play</span>
              </div>
              <div className="bg-blue-900 p-2 lg:text-lg lg:py-4 lg:px-5 rounded-md flex justify-center">
                <i className="fa-brands fa-app-store-ios mt-1 "></i>
                <span className="text-sm lg:text-base">App Store</span>
              </div>
            </div>
          </div>
          <div className="box p-1">
            <h2 className="mb-5 font-semibold text-xl lg:text-3xl">About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box p-1">
            <h2 className="mb-5 mt-1 font-semibold text-xl lg:text-3xl">
              Customer Care
            </h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box p-1">
            <h2 className="mb-5 mt-1 font-semibold text-xl lg:text-3xl">
              Contact Us
            </h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
