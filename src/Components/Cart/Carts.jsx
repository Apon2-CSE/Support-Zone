import React from "react";
import Img from "../../assets/ri_calendar-line.png";
const Cart = ({ CARD }) => {
  return (
    <div>
      <div
        className=" bg-white shadow-md
       cursor-pointer  m-2 rounded-2xl"
      >
        <div className="m-5">
          <div className="flex justify-between pt-4  ">
            <span className="text-[20px ] font-bold  ">{CARD.title}</span>
            <span
              className={`font-bold items-center ${
                CARD.status == "In-Progress"
                  ? `  text-yellow-500 bg-amber-100 p-2 rounded-2xl `
                  : CARD.status == "Open"
                  ? "text-green-600 bg-green-100 p-2 text-center rounded-2xl w-[100px]"
                  : "text-yellow-500 bg-amber-100 p-2 rounded-2xl "
              }`}
            >
              {CARD.status}
            </span>
          </div>
          <h1 className="text-gray-500 w-[400px] mt-2">{CARD.description}</h1>
          <div className="flex justify-between mt-3">
            <div className="flex items-center justify-center">
              <p className="mb-2.5">#{CARD.id}</p>
              <h1
                className={`ml-2.5  ${
                  CARD.priority == "HIGH PRIORITY"
                    ? "text-red-500"
                    : CARD.priority == "MEDIUM PRIORITY"
                    ? "text-yellow-500"
                    : "text-green-600 bg"
                } mt-3 mb-4 font-semibold`}
              >
                {" "}
                {CARD.priority}
              </h1>
            </div>
            <div
              className="flex items-center
          "
            >
              <h2 className="text-gray-500 mr-2  mb-4"> {CARD.customer}</h2>
              <img className="mr-2  mb-4" src={Img} alt="" />

              <h2 className=" mr-3 text-gray-500  mb-4">{CARD.createdAt}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
