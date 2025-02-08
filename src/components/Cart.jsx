import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const userData = useSelector((state) => state.authSlice.userData);
  const dispatch = useDispatch();

  function handleRemoveCart(i) {
    dispatch(deleteItem(cartData.filter((_, index) => index !== i)));
  }

  function handlePlacePay() {
    if (!userData) {
      alert("Please login");
      navigate("/sign");
      return;
    }
    alert("Order Placed");
  }

  function handleClearCart() {
    dispatch(clearCart());
    localStorage.removeItem("cartData");
  }

  let totalPrice = cartData.reduce(
    (sum, item) => sum + (item.price || item.defaultPrice || 0) / 100,
    0
  );

  // If cart is empty, show "KUCH ORDER KR LO..."
  if (cartData.length === 0) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-700">KUCH ORDER KR LO...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-auto p-5 flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {cartData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-6 p-5 bg-white shadow-md rounded-lg"
          >
            <div className="w-full md:w-1/4 flex-shrink-0">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_150/${data.imageId}`}
                alt={data.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-800">{data.name}</h1>
                <p className="text-lg font-bold text-green-600">
                  ₹{(data.price || data.defaultPrice) / 100}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Customisable</p>
              <div className="w-full flex justify-between">
                <button
                  onClick={() => handleRemoveCart(i)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full max-w-4xl flex justify-between items-center bg-white p-5 shadow-md rounded-lg">
        <div className="flex gap-3">
          <h1 className="text-xl font-bold text-gray-800">Total: ₹{totalPrice.toFixed(2)}</h1>
          <button
            onClick={handlePlacePay}
            className={`p-3 text-[12px] font-bold rounded-lg shadow ${
              userData ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={!userData}
          >
            {userData ? "PROCEED TO PAY" : "LOGIN TO PAY"}
          </button>
        </div>

        <button
          onClick={handleClearCart}
          className="px-5 py-3 text-[12px] bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
