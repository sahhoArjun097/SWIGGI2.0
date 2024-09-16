/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/contextapi';
function RestaurantDetails() {
  const { id } = useParams();
  // console.log(id);
  const [menu, setMenu] = useState("")
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [bgColor, setBgColor] = useState('bg-slate-300');
  const [bgColor2, setBgColor2] = useState('bg-slate-300');
  const [backgColor, setBackgColor] = useState('bg-slate-200');
  const [backgColor2, setBackgColor2] = useState('bg-slate-200');
  const [info, setMenuinfo] = useState([]);
  const [deals, setOffer] = useState([])
  const [extra, setExtra] = useState([])
  const [top, setTop] = useState([])
  // const [inner, setInner] = useState([])
  // const[drop,setDrop] = useState(null)
  async function fetchMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6616862&lng=77.2304635&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const result = await data.json();
    console.log(result?.data)
    console.log(result?.data?.cards)
    setMenu(result?.data?.cards[0]?.card?.card?.text)
    setMenuinfo(result?.data?.cards[2]?.card?.card?.info)
    setOffer(result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
    let sort = (result?.data?.cards)?.filter(data => data?.groupedCard?.cardGroupMap)
    console.log(sort)
    let suggestion = (sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data => data?.card?.card?.carousel)
    setTop(suggestion)
    let actualData = (sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data => data?.card?.card?.itemCards)
    let cakeData = (sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data => data?.card?.card?.categories)
    console.log(actualData)
    console.log(cakeData)
    let combinedData = [...(actualData || []), ...(cakeData || [])];
    // console.log(combinedData)
    setExtra(combinedData)
    // setInner(actualData)
    // let precice = (actualData)
    // console.log(precice)
    // console.log(combinedData?.card)
    // console.log(combinedData)
    // console.log(combinedData)?.filter((data)=> data?.card?.card?.itemCards)
    // let more = (combinedData)
    // console.log(setExtra)  
    // console.log(setInner)
    // console.log(sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.map(data=>data?.card?.card?.itemCards?.card?.info?.name)
  }
  function handlePrev() {
    if (value < 60) {
      setValue((prev) => prev + 15);
    }
    if (value < 60) {
      setBgColor('bg-slate-300');
    } else {
      setBgColor('bg-slate-200');
      setBackgColor('bg-slate-300');
      // setColor('text-gray-900')
    }
  }
  function handleNext() {
    if (value > 0) {
      setValue((prev) => prev - 15)
    }
    if (value > 0) {
      setBackgColor('bg-slate-300');
      // setColor('text-gray-400')
    } else {
      setBackgColor('bg-slate-200');
      setBgColor('bg-slate-300');
      // setColor('text-gray-900');
    }
  }
  function handlePrev2() {
    if (value2 < 460) {
      setValue2((prev) => prev + 75);
    }
    if (value < 460) {
      setBgColor2('bg-slate-300');
    } else {
      setBgColor2('bg-slate-200');
      setBackgColor2('bg-slate-300');
      // setColor('text-gray-900')
    }
  }
  function handleNext2() {
    if (value2 > 0) {
      setValue2((prev) => prev - 75)
    }
    if (value2 > 0) {
      setBackgColor2('bg-slate-300');
      // setColor('text-gray-400')
    } else {
      setBackgColor2('bg-slate-200');
      setBgColor2('bg-slate-300');
      // setColor('text-gray-900');
    }
  }
  // function moveup(i) {
  //   if (i === drop) {
  //     setDrop(null); 
  //   } else {
  //     setDrop(i);
  //   }
  // }
  useEffect(() => {
    fetchMenu()
    
  }, []);
  return (
    <>
      <div className='h-[100%] mt-5 w-[100vw] flex justify-center items-center  ' >
        <div className='h-[100%] w-[50%] flex-col gap-5  pl-2'>
          <div className='flex-col '>
            <div className='h-10  gap-2  w-full flex'>
              <p className='text-xs text-gray-600 text-[7px]'>Home /</p>
              <p className='text-xs text-gray-600 text-[7px]'>{info?.city} /</p>
              <p className="  text-[7px] text-xs">{menu}</p>
            </div>
          </div>
          <div className='w-full '>
            <div className='w-full h-full p-3  '>
              <p className='font-bold text-xl'>{menu}</p>
            </div>
          </div>
          <div className='w-full h-6'>
            <div className='flex w-full pl-6  gap-5'>
              <p className='text-[14px]  font-bold'>Order Online</p>
              <p className='text-[14px]  font-bold '>Dineout</p>
            </div>
            <div className='w-[95px] bg-red-500 h-[3px] ml-5 mt-1 rounded-lg '></div>
            <hr className='border-b-0' />
          </div>
          <div className=' w-full p-3 from-gray-300  rounded-3xl  bg-gradient-to-t from-1% to-transparent to-100%  '>
            <div className=' border  mt-2 h-36 w-[100%] bg-white p-3 rounded-2xl'>
              <div className='w-[400px]  gap-2   justify-start flex items-start'>
                <img src="/images/circle-star.png" alt="" className=" mt-[3px] h-[15px]" />
                <p className='text-[13px] font-bold'>{info?.avgRatingString}( {info?.totalRatingsString})</p>
                <p className='  ' ></p>
                <p className='text-[13px] font-bold'>{info?.costForTwoMessage}</p>
              </div>
              <div className='w-[200px]   justify-start flex items-start'>
                <p className='text-[12px] font-bold text-orange-600 underline'>{info?.cuisines?.join(", ")}</p>
              </div>
              <div className='w-[400px] flex gap-3  pt-[3px]'>
                <div className='flex-col justify-center flex items-center'>
                  <div className='w-[6px] h-[6px] mt-[8px]  bg-gray-300 rounded-full'></div>
                  <div className='h-[20px] w-2  flex justify-center  items-center'>
                    <div className='h-full w-[1px] bg-gray-300'></div>
                  </div>
                  <div className='w-[6px] h-[6px] bg-gray-300 rounded-full'></div>
                </div>
                <div className='flex-col'>
                  <div className='flex gap-2'>
                    <div className='h-[20px] gap-3 flex'>
                      <p className='text-[13px] font-bold'>Outlet</p>
                      <p className='text-[13px] font-semibold'>{info?.areaName}</p>
                    </div>
                  </div>
                  <div className='mt-2' >
                    <p className='text-[12px] font-bold'>{`${info?.sla?.minDeliveryTime} - ${info?.sla?.maxDeliveryTime} min`}</p>
                  </div>
                </div>

              </div>
              <hr />
              <div className='w-full h-full pt-2'>
                <div className='  flex gap-3'>
                  <i className="fi fi-rs-biking-mountain text-[13px] text-gray-500"></i>
                  <p className='text-[10px]  text-gray-500 font-semibold'>{info?.feeDetails?.message}</p>
                </div>
              </div>

            </div>
          </div>

          <div className='h-40 w-[100%] mt-5 flex-col overflow-x-hidden'>
            <div className='ml-1 flex justify-between p-3'>
              <p className='font-bold text-lg'>Deals for you</p>
              <div className='flex gap-3 '>
                <div onClick={handlePrev} className={`${bgColor}  cursor-pointer rounded-[50%] w-[35px] items-center justify-center flex `}>
                  <i className={`fi fi-tr-arrow-small-right text-2xl mt-1  `}></i>
                </div>
                <div onClick={handleNext} className={` ${backgColor} rounded-[50%]   cursor-pointer  w-[35px] items-center justify-center flex `}>
                  <i className={`fi fi-tr-arrow-small-left text-2xl mt-1 `}></i>
                </div>
              </div>
            </div>
            <div className='flex ml-4 w-[100vw] gap-5 ' >

              <div style={{ transform: `translateX(-${value}%)` }}
                className={` flex duration-1000 gap-5 w-full h-full`}>
                {
                  deals.map((item, i) => (
                    <div key={i} className='w-[270px] h-16 border flex   rounded-2xl'>
                      <div className='p-2'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item?.info?.offerLogo}`} alt="" className=" h-[41px] " />
                      </div>
                      <div className='p-2 flex-col'>
                        <p className='font-bold text-[14px] '> {item?.info?.header}</p>
                        <p className='font-semibold text-gray-400 text-[12px] line-clamp-1'>{item?.info?.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className=''>
              <p className='font-extralight text-gray-500 text-[15px]'>MENU</p>
            </div>
          </div>
          <div className='w-full h-20  flex justify-center items-center'>
            <div className='w-[90%] h-10 bg-gray-100 border-b-1 rounded-xl flex justify-center items-center  cursor-pointer'>
              <div className='w-[80%] pl-14 h-full flex justify-center items-center'>
                <p className='text-[12px] text-gray-500 '>Search for dishes</p>
              </div>
              <div className=' w-[10%]  h-full flex justify-end items-center'>
                <i className="fi fi-rr-search text-xs text-gray-500"></i>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div className='overflow-x-hidden'>
            {
              top.map((item, i) => (
                <div key={i} className='flex flex-col gap-10'>
                  <div className='flex justify-between p-1'>
                    <div>
                      <p className='text-xl font-bold'>{item?.card?.card?.title}</p>
                    </div>
                    <div className='flex gap-3'>
                      <div
                        onClick={handlePrev2}
                        className={`${bgColor2} cursor-pointer rounded-full w-[35px] h-[35px] items-center justify-center flex`}>
                        <i className="fi fi-tr-arrow-small-right text-2xl"></i>
                      </div>
                      <div
                        onClick={handleNext2}
                        className={`${backgColor2} cursor-pointer rounded-full w-[35px] h-[35px] items-center justify-center flex`}>
                        <i className="fi fi-tr-arrow-small-left text-2xl"></i>
                      </div>
                    </div>
                  </div>

                  <div className='flex w-[100vw] h-[100%] gap-4 mt-7 overflow-hidden'>
                    {
                      item?.card?.card?.carousel?.map((carouselItem, j) => (
                        <div key={j} className='flex  w-[300px] gap-6 duration-1000'
                          style={{ transform: `translateX(-${value2}%)` }}
                        >
                          <div className='relative flex flex-col'>
                            <div className='relative w-[300px] h-[310px]'>
                              <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_310/${carouselItem?.dish?.info?.imageId}`}
                                alt=""
                                className="rounded-xl object-cover w-full h-full"
                              />
                            </div>
                            <div className='absolute  h-full  bg-gradient-to-b from-black to-transparent rounded-xl flex flex-col justify-between p-5'>
                              <div className=''>
                                <div className='flex items-center'>
                                  <p
                                    className='text-xs font-semibold'
                                    style={{ color: carouselItem.dish.info?.itemAttribute?.vegClassifier === "VEG" ? "green" : "red" }}
                                  >
                                    {carouselItem.dish.info.itemAttribute?.vegClassifier}
                                  </p>
                                </div>
                                <div className='flex flex-col  '>
                                  <p className='font-semibold text-xl text-white'>{carouselItem?.dish?.info?.name}</p>
                                  <p className='font-semibold text-xs text-white line-clamp-2'>{carouselItem?.dish?.info?.description}</p>
                                </div>

                              </div>

                              <div className='flex justify-between items-center '>
                                <p className='font-semibold text-xl text-white'>{carouselItem?.dish?.info?.price / 100}</p>
                                <div className='flex flex-col items-center'>
                                  <button className='w-[120px] h-[35px] bg-white rounded-2xl border flex justify-center items-center'>
                                    <p className='text-green-600 font-bold text-[20px]'>ADD</p>
                                  </button>

                                  <p className='text-xs font-semibold text-gray-400 mt-1'>Customisable</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>

          <hr className='mt-7  border-[10px] ' />
          <div className='flex-col gap-5 flex mt-5'>
            {extra.map(({ card: { card } }, i) => (
              // console.log(card)
              <MenuData key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  )

}


function MenuData({ card }) {
  const [isOpen, setOpen] = useState(true);
  
  function handleUpDown() {
    setOpen((prev) => !prev);
  }

  if (card.itemCards) {
    const { title, itemCards } = card;
    return (
      <>
        <div className="flex-col flex gap-4">
          <div className="flex justify-between text-xl font-bold">
            <h1 className="text-xl">
              {title} ({itemCards.length})
            </h1>
            <i
              className={
                "fi text-2xl fi-rr-angle-small-" + (isOpen ? "up" : "down")
              }
              onClick={handleUpDown}
            ></i>
          </div>
          {isOpen && <DetailMenu itemCards={itemCards} />}
        </div>
        <hr className="my-5 border-[10px]" />
      </>
    );
  } else {
    const { title, categories } = card;
    return (
      <div>
        <MenuData card={categories[0]} />
      </div>
    );
  }
}

function DetailMenu({ itemCards }) {
  return (
    <div>
      {itemCards.map(({ card: { info } }, i) => (
        <DetailMenuCard info={info} key={i} />
      ))}
    </div>
  );
}

function DetailMenuCard({ info }) {
  const {
    name,
    description,
    defaultPrice,
    price,
    imageId,
    offerTags,
    itemAttribute: { vegClassifier },
    ratings: { aggregatedRating: { rating, ratingCountV2 } = {} } = {}
  } = info;
const{cartData,setCartData} = useContext(CartContext)

  function handleAddCart() {
    const isAdded = cartData.find((data)=> data.id === info.id)
    if(!isAdded){
      setCartData((prev)=> [...prev,info])
      localStorage.setItem("cartData",JSON.stringify([...cartData, info]))
    } else{
      alert("this is already added")
      
    }
    // console.log(info);
  }

  return (
    <div className="flex-col gap-5 w-full">
      <div className="flex gap-5 h-[200px] justify-between">
        <div className="mt-4 flex-col">
          <div className="flex">
            <p
              className="text-xs font-semibold"
              style={{ color: vegClassifier === "VEG" ? "green" : "red" }}
            >
              {vegClassifier}
            </p>
          </div>

          <div className="w-full">
            <p className="text-lg font-bold text-gray-700">{name}</p>
          </div>

          <div className="flex gap-2">
            <div className="flex">
              {(defaultPrice || price) ? (
                <>
                  <i className="fi fi-bs-indian-rupee-sign text-xs mt-[6px] font-bold"></i>
                  <p className="text-black text-4xs font-semibold">
                    {(defaultPrice || price) / 100}
                  </p>
                </>
              ) : null}
            </div>

            <div className="flex gap-[5px]">
              <p className="text-xs font-bold mt-1">{offerTags?.[0]?.title}</p>
              <p className="text-xs font-bold mt-1">{offerTags?.[0]?.subTitle}</p>
            </div>
          </div>

          <div className="flex">
            {rating ? (
              <>
                <i className="fi fi-ss-star mt-[1px] text-green-800 font-semibold"></i>
                <p className="text-green-900 font-semibold">{rating}</p>
                <p>{ratingCountV2 ? `(${ratingCountV2})` : ''}</p>
              </>
            ) : null}
          </div>

          <div className="text-wrap">
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className="w-[180px] absolute h-[150px] rounded-xl mt-5 ">

            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_150/${imageId}`}
              alt={ " "}
              className="w-full h-full  border rounded-xl contrast-110 brightness-100 saturate-125"
            />
          </div>

          <div className="relative w-[180px] h-[210px] flex justify-center items-end ">
            <div className="flex-col ">
              <button
                onClick={handleAddCart}
                className="w-[140px] h-[40px] bg-white rounded-2xl border flex justify-center items-center"
              >
                <p className="text-green-600 font-bold text-[20px]">ADD</p>
              </button>
              <div className="flex justify-center">
                <p className="text-xs font-semibold text-gray-400">Customisable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-4 border-b-2 w-full text-black" />
    </div>
  );
}


export default RestaurantDetails


