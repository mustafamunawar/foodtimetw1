import techStackPng from "../../assets/tech-stack9.png";
// import backgroundWall from "../../assets/background-wall.png";
import cv from "./resume_M-Saudagar.pdf";

function Home() {
  return (
    <>
      <section
        id="home"
        className="w-full bg-[url('/src/assets/background-wall-light.jpg')] bg-no-repeat bg-cover"
      >
        {/* <section id="home" className="w-full"> */}
        {/* <div className="h-[58px] lg:h-0"></div> */}
        <div className="container mx-auto text-white font-ubuntu min-h-screen">
          <div
            id="outer"
            className="pt-24 lg:pt-36 lg:px-2 flex flex-wrap lg:flex-nowrap justify-center items-center lg:gap-x-12 xl:gap-x-36 gap-y-20"
          >
            <div id="left-panel" className="text-gray-500 bg-black">
              <h4 className="text-2xl lg:text-4xl leading-5">Hello, I am</h4>
              <h1 className="text-4xl lg:text-[80px] lg:leading-[80px] text-white">
                Munawar
                <br />
                Saudagar
              </h1>
              <h4 className="text-xl lg:text-2xl">
                A Frontend Developer with good Backend
              </h4>
              <button
                className="text-xl lg:text-2xl border rounded-md border-gray-500 mt-4 p-2"
                onClick={() => window.open(cv)}
              >
                Resume (pdf)
              </button>
            </div>

            <div
              id="right-panel"
              className="flex flex-col justify-center items-center gap-y-10 bg-black"
            >
              <h2 className="text-3xl lg:text-4xl text-gray-200">
                My Current Tech-Stack{" "}
              </h2>
              <img
                src={techStackPng}
                alt="home pic"
                className="animate-techstack lg:w-[550px] lg:h-[550px]"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
