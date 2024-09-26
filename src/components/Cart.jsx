import { useContext } from "react"
import { CartContext } from "../context/contextapi"

function Cart() {

    const { cartData, setCartData } = useContext(CartContext);
    function handleRemoveCart(i) {
        let newArr = [...cartData]
        newArr.splice(i, 1)
        setCartData(newArr)
        console.log(newArr)
        localStorage.setItem("...cartData",JSON.stringify(newArr))
    }
    console.log(cartData)
    let totalprice = 0;
    for (let i = 0; i < cartData.length; i++) {
        totalprice = totalprice + cartData[i].price / 100 || cartData[i].defaultPrice / 100
    }
    if (cartData.length == 0) {
        return (
            <div className="w-full h-[80vh] justify-center items-center flex ">
                <h1 className="text-3xl">KUCH ORDER KR LO.....</h1>
            </div>
        )
    }
    function handleClearCart(){
        setCartData([])
        // localStorage.setItem("cartData", JSON.stringify([]))
        localStorage.clear()
    }
    return (
        <div className="w-full h-[90vh] justify-center flex items-center p-5">
            <div className="w-[50%] h-[100%] gap-5 flex flex-col    ">

                {
                    cartData.map((data, i) => (
                        <div key={i} className="w-full h-full  flex flex-col p-5    gap-5  justify-between ">
                            <div className="  h-full w-full flex justify-between ">

                                <h1 className="text-xl">{data.name}</h1>
                                <p>{data.defaultPrice / 100 || data.price / 100}</p>
                                <div className='flex justify-center'>
                                    <div className="w-[180px] absolute h-[150px] rounded-xl mt-5 ">

                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_150/${data.imageId}`}
                                            alt={" "}
                                            className="w-full h-full  border rounded-xl contrast-110 brightness-100 saturate-125"
                                        />
                                    </div>

                                    <div className="relative w-[180px] h-[210px] flex justify-center items-end ">
                                        <div className="flex-col ">
                                            <button
                                                onClick={() => handleRemoveCart(i)}

                                                className="w-[140px] h-[40px]  rounded-2xl bg-red-600 border flex justify-center items-center"
                                            >
                                                <p className="text-white font-bold text-[20px]">REMOVE</p>
                                            </button>
                                            <div className="flex justify-center">
                                                <p className="text-xs font-semibold text-gray-400">Customisable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <h1>total-{totalprice}</h1>
                <button onClick={handleClearCart} className="bg-green-800 h-10 w-20">
                    clearcart
                </button>

            </div>
        </div>

    )
}

export default Cart