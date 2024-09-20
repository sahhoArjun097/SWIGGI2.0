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
      console.log(result);
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
    if (value < 165) {
      setValue((prev) => prev + 34);
    }
    if (value < 145) {
      setBgColor("bg-slate-300");
    } else {
      setBgColor("bg-slate-200");
      setBackgColor("bg-slate-300");
    }
  }

  function handleNext() {
    if (value > 0) {
      setValue((prev) => prev - 34);
    }
    if (value > 0) {
      setBackgColor("bg-slate-300");
    } else {
      setBackgColor("bg-slate-200");
      setBgColor("bg-slate-300");
    }
  }

  return (
    <div>
      <div className="flex justify-between h-[6vh]">
        <div>
          <h1 className="font-bold text-2xl">What's on your mind?</h1>
        </div>
        <div className="h-[35px] w-[100px] gap-2 flex ">
          <div
            onClick={handlePrev}
            className={`${bgColor} cursor-pointer rounded-[50%] w-[35px] items-center justify-center flex `}
          >
            <i className={`fi fi-tr-arrow-small-right text-2xl mt-1 `}></i>
          </div>

          <div
            onClick={handleNext}
            className={` ${backgColor} rounded-[50%] cursor-pointer w-[35px] items-center justify-center flex `}
          >
            <i className={`fi fi-tr-arrow-small-left text-2xl mt-1 `}></i>
          </div>
        </div>
      </div>
      <div
        style={{ transform: `translateX(-${value}%)` }}
        className={`flex w-full justify-evenly gap-6 mt-5  duration-1000 `}
      >
        {data.map((item) => (
          <div key={item.id} className="">
            <img
              key={item.id}
              className="w-full"  
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt=""
            />
          </div>
        ))}
      </div>

      <hr className="border-b-0 mt-8 p-1" />
    </div>
  );
}
export default WhatInMind;
