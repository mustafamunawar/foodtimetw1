// import {
//   FaYoutube,
//   FaInstagram,
//   FaFacebookSquare,
//   FaTwitterSquare,
//   FaRegEnvelope,
//   FaAngleDoubleRight,
// } from "react-icons/fa";
// import { ReactComponent as Instagram } from "./images/instagram.svg";

import { footerData1, footerData2 } from "./footerData";
import CustomBulletList from "./CustomBulletList";

function Footer() {
  return (
    <>
      <section
        id="footer"
        className="font-roboto font-light text-gray-300 bottom-0 pt-4 pb-8 w-full bg-[#222A35]"
      >
        <div className="container flex flex-col items-center mx-auto text-red font-roboto">
          <h1 className="ml-4 self-start my-5 font-salsa font-black text-2xl text-primary-500">
            FOOD TIME
          </h1>
          {/* <Instagram className="h-6 w-6 fill-blue-600" /> */}
          <div className="w-1/2 flex flex-wrap justify-between">
            <CustomBulletList itemsArray={footerData1} />
            <CustomBulletList itemsArray={footerData2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
