// import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import Skills from "./components/skills/Skills";
import Foods from "./components/skills/Foods";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <div className="container mx-auto flex flex-col justify-start items-center min-h-screen mt-0 [&>*]:mb-0 [&>section]:b-inherit"> */}
      <div className="container mx-auto flex flex-col justify-start items-center pb-40">
        {/* <h1>Bismillah!</h1> */}
        <About />
        <Foods />
      </div>
    </>
  );
}

export default App;
