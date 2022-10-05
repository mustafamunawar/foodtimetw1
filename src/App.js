import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col justify-start items-center min-h-screen mt-16 [&>*]:mb-32 [&>section]:b-inherit">
        {/* <h1>Bismillah!</h1> */}
        <Skills />
        <Skills />
      </div>
    </>
  );
}

export default App;
