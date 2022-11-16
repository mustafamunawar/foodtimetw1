import { FaHandPaper } from "react-icons/fa";

function Home() {
  return (
    <>
      <section id="home" className="w-full bg-[#222A35]">
        {/* <section id="home" className="w-full"> */}
        {/* <div className="h-[58px] lg:h-0"></div> */}
        <div className="container mx-auto text-red font-roboto">
          <div
            id="outer"
            className="py-16 mt-8 lg:py-16 lg:px-2 flex flex-col xl:flex-row justify-center items-center lg:gap-x-12 xl:gap-x-48 gap-y-20"
          >
            <div id="left-panel" className="text-gray-500 text-center">
              {/* <h4 className="text-2xl lg:text-4xl leading-5">Welcome to</h4> */}
              <h1 className="font-salsa font-black text-6xl lg:text-[92px] lg:leading-[80px] text-red-500">
                FOOD TIME
              </h1>
              <h4 className="font-light text-xl lg:text-2xl">
                Quality food, express delivery
              </h4>
            </div>

            <div
              id="right-panel"
              className="flex flex-col justify-center items-center gap-y-10 rounded"
            >
              <img
                src={"/images/foods-on-table-jpg-1.jpg"}
                alt="home pic"
                className="lg:w-[550px] lg:h-[367px] rounded"
                width="400"
                height="267"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="py-8 flex flex-col justify-center items-center container mx-auto mb-8">
            <h1 className="mt-12 text-4xl">Our Committment</h1>

            <ul className="pl-10 pr-1 list-outside list-disc mt-4 text-xl lg:text-2xl [&>*]:pt-4">
              <li>
                Your food will arrive within 30 minutes or it is yours for free
              </li>
              <li>
                Three times in year you get money back if our food is not up to
                your taste
              </li>
              <li>
                With every purchase $500 or more in a month you get a $50-off
                coupon
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
