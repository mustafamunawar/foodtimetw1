import {
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaRegEnvelope,
  FaAngleDoubleRight,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section
        id="footer"
        className="font-light text-gray-300 bottom-0 pt-4 pb-8 w-full bg-[#222A35]"
      >
        <div className="container flex flex-col items-center mx-auto text-red">
          <h1 className="ml-4 self-start my-5 font-salsa font-black text-2xl text-red-500">
            FOOD TIME
          </h1>
          <div className="w-1/2 flex flex-wrap justify-between">
            <ul className="mb-8 [&>*]:pt-4">
              <li>
                <a href="#footer">
                  <FaAngleDoubleRight className="text-2xl inline mr-2 text-red-700" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaAngleDoubleRight className="text-2xl inline mr-2 text-red-700" />
                  Delivery Inquiries
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaAngleDoubleRight className="text-2xl inline mr-2 text-red-700" />
                  Quality Inquiries
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaAngleDoubleRight className="text-2xl inline mr-2 text-red-700" />
                  Ingredient Information
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaAngleDoubleRight className="text-2xl inline mr-2 text-red-700" />
                  Return Policy
                </a>
              </li>
            </ul>
            <ul className="mb-8 [&>*]:pt-4">
              <li>
                <a href="#footer">
                  <FaYoutube className="text-2xl inline mr-2 text-red-700" />
                  See us on YouTube
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaFacebookSquare className="text-2xl inline mr-2 text-red-700" />
                  Meet us at Facebook
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaTwitterSquare className="text-2xl inline mr-2 text-red-700" />
                  Tweet about us
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaInstagram className="text-2xl inline mr-2 text-red-700" />
                  Our Instgram posts
                </a>
              </li>
              <li>
                <a href="#footer">
                  <FaRegEnvelope className="text-2xl inline mr-2 text-red-700" />
                  Write us an email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
