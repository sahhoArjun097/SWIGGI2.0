import '@flaticon/flaticon-uicons/css/all/all.css';
import { useEffect, useState } from "react";
import Head from './components/Head';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { CartContext, Visibility } from "./context/contextapi";
import Cart from './components/Cart';
import Footer from './components/Footer';

export const App = () => {
  const [open, setOpen] = useState(false);
  const [cartData, setCartData] = useState([]);

  function getDataFormLocalStorage() {
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(data);
    console.log(data);
  }

  useEffect(() => {
    getDataFormLocalStorage();
  }, []);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Visibility.Provider value={{ open, setOpen }}>
        <div className={open ? "min-h-full" : ""}>
          {/* Header always visible */}
          <Head />

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1 className='text-4xl font-bold text-orange-500 p-8 flex justify-center items-center'>Coming Soon</h1>} />
          </Routes>

          {/* Footer always visible */}
          <Footer />
        </div>
      </Visibility.Provider>
    </CartContext.Provider>
  );
}

export default App;
