import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Custom404Error from "./components/Custom404Error";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen h-full font-roboto dark:bg-darkbg1 dark:text-darktext1">
      <Navbar />
      <Home />
      <div className="container mx-auto flex flex-col justify-start items-center pb-40">
        {/* <Foods type="Breakfast" />
        <Foods type="Lunch" />
        <Foods type="Dinner" /> */}

        <div id="menu" className="">
          <Routes>
            <Route path="/" element={<Breakfast />} />
            <Route path="/Breakfast" element={<Breakfast />} />
            <Route path="/Lunch" element={<Lunch />} />
            <Route path="/Dinner" element={<Dinner />} />
            <Route path="*" element={<Custom404Error />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
