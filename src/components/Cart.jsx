import { useContext } from "react"
import { CartContext } from "../context/contextapi"

function Cart() {

    function handleRemoveCart(i) {
        let newArr = [...cartData]
        newArr.splice(i,1)
        setCartData(newArr)
        localStorage.setItem("...cartData",JSON.stringify(newArr))


    }
    const { cartData, setCartData } = useContext(CartContext);
    console.log(cartData)
    if (cartData.length == 0) {
        return (
            <div className="w-full h-[80vh] justify-center items-center flex ">
                <h1 className="text-3xl">KUCH ORDER KR LO.....</h1>
            </div>
        )
    }
    return (
        <div className="w-full h-[90vh] justify-center flex items-center p-5">
            <div className="w-[50%] h-[100%] gap-5 flex flex-col    ">

                {
                    cartData.map((data, i) => (
                        <div key={i} className="w-full h-full  flex flex-col p-5    gap-5  justify-between ">
                            <div className="  h-full w-full flex justify-between ">

                                <h1 className="text-xl">{data.name}</h1>
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
                                                onClick={()=>handleRemoveCart(i)}

                                                className="w-[140px] h-[40px] bg-white rounded-2xl border flex justify-center items-center"
                                            >
                                                <p className="text-red-600 font-bold text-[20px]">REMOVE</p>
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


            </div>
        </div>

    )
}

export default Cart