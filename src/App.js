// edited on github

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Custom404Error from "./components/Custom404Error";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Cart from "./pages/Cart";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AddToCart from "./components/AddToCart";
import React, { useState } from "react";
import { useReducer } from 'react'
import { AppContext } from './components/AppContext';


const colors = require("tailwindcss/colors");

//high-level summary: 4 main sections: navbar, home, router_section, footer. router_section uses a router to render either home, breakfast, lunch or dinner menu. A context is used to set dark mode.

//note: removed unncessary code, like Defs/Ellipse.

//var showAddToCart=undefined

//each item is {name, price, qty}

//show add to cart is part of app context

//window.cart={ items:[] }

//my first change after munawar fork
function App() {

  const [poppedItem, setPoppedItem] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);
  //const [addToCart, setAddToCart] = useState(false);

  var addCartItem=function(item)
  {
    cartItems.push(item);
    setCartItems(cartItems)
    setPoppedItem(undefined)
  }
  //console.log('cart='+window.cart.items)
  return (

    //note: min-h-screen sets root div to 100% of viewport height
    //note: navbar, home, footer have their own 'container'
    //todo: remove setAddToCart, and have global 'show_add_to_cart'. and use forceUpdate in child

    
    <AppContext.Provider value={ {addCartItem:addCartItem, setPoppedItem:setPoppedItem} }>
      <div className="min-h-screen h-full font-roboto bg-lightbg dark:bg-darkbg text-lighttext dark:text-darktext">
        <Navbar cartItems={cartItems} />
        <div id="router_section"  className="container mx-auto flex flex-col justify-start items-center pb-40">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Breakfast" element={<Breakfast />} />
              <Route path="/Lunch" element={<Lunch />} />
              <Route path="/Dinner" element={<Dinner />} />
              <Route path="/Cart" element={<Cart items={cartItems}/>} />
              <Route path="*" element={<Custom404Error />} />
            </Routes>
        </div>
        <Footer />
        {poppedItem && <AddToCart handleClose={() => setPoppedItem(undefined)}   poppedItem={poppedItem}  />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
