import { useState, useEffect } from "react";

function TopItems() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [value, setValue] = useState(0);
  const [bgColor, setBgColor] = useState('bg-slate-300');
  const [backgColor, setBackgColor] = useState('bg-slate-200');
  const [move, setMove] = useState(0);

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6616862&lng=77.2304635&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await data.json();
    console.log(result);
    setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setHeader(result?.data?.cards[1]?.card?.card);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handlePrev() {
    if (value < 370 || move < 79) {
      setValue((prev) => prev + 50);
      setMove((prev) => prev + 4.8);
    }
    if (value < 370) {
      setBgColor('bg-slate-300');
    } else {
      setBgColor('bg-slate-200');
      setBackgColor('bg-slate-300');
    }
  }

  function handleNext() {
    if (value > 0 || move > 0) {
      setValue((prev) => prev - 50);
      setMove((prev) => prev - 4.8);
    }

    if (value > 0) {
      setBackgColor('bg-slate-300');
    } else {
      setBackgColor('bg-slate-200');
      setBgColor('bg-slate-300');
    }
  }

  return (
    <div className="flex-col mt-7">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">{header?.header?.title}</h1>
        </div>

        <div className="h-[35px] w-[100px] gap-2 flex">
          <div
            onClick={handlePrev}
            className={`${bgColor} cursor-pointer rounded-full w-[35px] items-center justify-center flex`}
          >
            <i className="fi fi-tr-arrow-small-right text-2xl mt-1"></i>
          </div>
          <div
            onClick={handleNext}
            className={`${backgColor} cursor-pointer rounded-full w-[35px] items-center justify-center flex`}
          >
            <i className="fi fi-tr-arrow-small-left text-2xl mt-1"></i>
          </div>
        </div>
      </div>

      <div className="h-[320px] overflow-hidden">
        <div
          style={{ transform: `translateX(-${value}%)` }}
          className="flex duration-1000 gap-5 w-full h-full mt-7"
        >
          {data.map((item, i) => (
            <div key={i} className="h-[183px] min-w-[273px] flex-col relative">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
                alt="Restaurant"
              />
              <div className="absolute h-[183px] min-w-[273px] top-0 bg-gradient-to-t from-black from-1% to-transparent to-50% rounded-2xl"></div>
              <div className="absolute top-0 pt-[145px] p-2 flex flex-col gap-1 w-full">
                <div className="flex gap-1">
                  <p className="text-white font-bold text-xl">
                    {item?.info?.aggregatedDiscountInfoV3 ? item?.info?.aggregatedDiscountInfoV3?.header + " " : ""}
                  </p>
                  <p className="text-white font-bold text-xl">
                    {item?.info?.aggregatedDiscountInfoV3 ? item?.info?.aggregatedDiscountInfoV3?.subHeader : ""}
                  </p>
                </div>
              </div>
              <div className="p-2">
                <p className="font-bold text-lg line-clamp-1">{item?.info?.name}</p>
                <div className="flex gap-2">
                <i className="fi fi-ss-star mt-[1px] text-green-800 font-semibold"></i>
                  <p className="font-semibold">{item?.info?.avgRating}</p>
                  <p className="font-semibold">{item?.info?.sla?.slaString}</p>
                </div>
                <p className="text-gray-600 line-clamp-1">{item?.info?.cuisines.join(", ")}</p>
                <p className="text-gray-600">{item?.info?.areaName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full h-1 items-center p-4">
        <div className="w-[60px] h-full">
          <div className="h-1 w-full bg-slate-700 rounded-sm overflow-x-hidden">
            <div
              style={{ transform: `translateX(${move}px)` }}
              className="h-full w-[8px] duration-1000 bg-red-500 rounded-sm"
            ></div>
          </div>
        </div>
      </div>

      <hr className="border-b-0" />
    </div>
  );
}

export default TopItems;
