import React, { useState, useEffect } from "react";

function CartHandler({ info, cartData, setCartData }) {
  const [notification, setNotification] = useState(null); // To manage notifications

  function handleAddCart() {
    const isAdded = cartData.find((data) => data.id === info.id);
    if (!isAdded) {
      const updatedCart = [...cartData, info];
      setCartData(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      setNotification({ message: "Item added to cart!", type: "success" }); // Success notification
    } else {
      setNotification({ message: "This item is already in the cart.", type: "error" }); // Error notification
    }
  }

  // Auto-hide the notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000); // 3 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [notification]);

  return (
    <div>
      <button
        onClick={handleAddCart}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
      >
        Add to Cart
      </button>

      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-5 right-5 p-4 rounded-md shadow-lg text-white text-sm font-medium transition-transform transform ${
            notification.type === "success"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default CartHandler;
