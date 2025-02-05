import { useState, useEffect } from "react";

function WhatInMind() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [bgColor, setBgColor] = useState("bg-slate-300");
  const [backgColor, setBackgColor] = useState("bg-slate-200");

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6616862&lng=77.2304635&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await response.json();
      setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handlePrev() {
    if (value < 180) {
      setValue((prev) => prev + 34);
    }
    setBgColor(value < 5 ? "bg-slate-300" : "bg-slate-200");
    setBackgColor(value < 5 ? "bg-slate-200" : "bg-slate-300");
  }
  function handleNext() {
    if (value > 0) {
      setValue((prev) => prev - 34);
    }
    setBackgColor(value > 0 ? "bg-slate-300" : "bg-slate-200");
    setBgColor(value > 0 ? "bg-slate-200" : "bg-slate-300");
  }
  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-[6vh]">
        <h1 className="font-bold text-xl md:text-2xl">What’s on your mind?</h1>
        <div className="h-[35px] w-[100px] flex gap-2">
          <div
            onClick={handlePrev}
            className={`${bgColor} cursor-pointer rounded-full w-[35px] h-[35px] flex items-center justify-center`}
          >
            <i className="fi fi-tr-arrow-small-right text-xl md:text-2xl"></i>
          </div>
          <div
            onClick={handleNext}
            className={`${backgColor} cursor-pointer rounded-full w-[35px] h-[35px] flex items-center justify-center`}
          >
            <i className="fi fi-tr-arrow-small-left text-xl md:text-2xl"></i>
          </div>
        </div>
      </div>
      <div className="mt-4  scroll-smooth no-scrollbar">
        <div
          style={{ transform: `translateX(-${value}%)` }}
          className="flex gap-4 md:gap-6 duration-500">
          {data.map((item) => (
            <img
              key={item.id}
              className="w-28 md:w-36 lg:w-40 xl:w-44 object-cover rounded-lg "
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <hr className="border-b-0 mt-8 p-1" />
    </div>
  );
}

export default WhatInMind;
