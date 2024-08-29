import React from "react";
import './itemCard.module.css';

const itemCard = (props) => {
  const info = props.props.card.info;
  return (
    <>
      <div className="flex justify-between pt-4">
        <div className="w-[80%]">
          <div
            className={`text-xs ${
              info.isVeg ? "text-green-500" : "text-red-600"
            }`}
          >
            {info.isVeg ? "Veg" : "NonVeg"}
          </div>
          <div className="text-sm font-semibold">{info.name}</div>
          <div className="flex">
            <div className="font-semibold text-sm">
              &#8377;{info.price / 100}
            </div>
            <div></div>
            <div
              style={{ fontSize: "10px" }}
              className="pl-1 pt-[3px] opacity-[70%]"
            >
              {info.offerTags[0].title}
            </div>
            <div
              style={{ fontSize: "10px" }}
              className="pl-1 pt-[3px] opacity-[70%]"
            >
              {info.offerTags[0].subTitle}
            </div>
          </div>
          <div className="flex">
            <div className="text-[12px] text-green-700">&#9733; </div>
            <div
              style={{ fontSize: "12px" }}
              className="opacity-80 text-green-800 pl-1"
            >
              {info.ratings.aggregatedRating.rating}{" "}
            </div>
          </div>
          <div className="text-sm font-normal opacity-85 w-[90%]">
            <span className="w-[99%] line-clamp-2">{info.description}</span><span className="font-bold">more</span>
          </div>
        </div>
        <div className="bg-gray-300 w-[156px] h-[144px] flex justify-center items-center rounded-lg">
          No image{console.log(info)}
        </div>
      </div>
      <div className="mt-4 mb-4">
        <hr></hr>
      </div>
    </>
  );
};

export default itemCard;
