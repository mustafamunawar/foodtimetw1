function Home() {
  return (
    <>
      <section id="home" className="w-full bg-[#222A35]">
        {/* <section id="home" className="w-full"> */}
        {/* <div className="h-[58px] lg:h-0"></div> */}
        <div className="container mx-auto text-red font-roboto">
          <div
            id="outer"
            className="py-16 lg:pt-24  lg:pb-16 lg:px-2 flex flex-wrap lg:flex-nowrap justify-center items-center lg:gap-x-12 xl:gap-x-48 gap-y-20"
          >
            <div id="left-panel" className="text-gray-500 text-center">
              {/* <h4 className="text-2xl lg:text-4xl leading-5">Welcome to</h4> */}
              <h1 className="font-salsa font-black text-4xl lg:text-[88px] lg:leading-[80px] text-red-500">
                FOOD TIME
              </h1>
              <h4 className="text-xl lg:text-2xl">
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
          <div>
            <h1 className="text-4xl mt-8 mb-16">Our Committment</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
