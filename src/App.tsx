import { useState } from "react";
import Add from "./Componenets/Add";
import DisplyTask from "./Componenets/DisplyTask";
import Search from "./Componenets/Search";
import Video from "./Componenets/Video";
function App() {
  const [theme, setTheme] = useState("light");
  const [loader, setLoader] = useState(false);
  function handleTheme() {
    setLoader(true);
    setTheme((prevTheme) => (prevTheme === "light" ? "Dark" : "light"));
    setTimeout(() => {
      setLoader(false);
    }, 300);
  }
  return (
    <>
      <div className="relative h-screen w-full">
        <Video theme={theme} loader={loader} />
        <div className="absolute w-full h-full flex flex-col items-center p-8 top-0 left-0 z-30">
          <div className="bg-[#D9D9D980] backdrop-blur-2xl py-1 px-4 rounded-3xl">
            <h1 className="text-[#C4564D] font-bold text-3xl">To-Do List</h1>
          </div>
          <div className="mt-7">
            <Add />
          </div>
          <div className="mt-5">
            <Search />
          </div>
          <div className="max-h-[400px] overflow-y-auto scrollbar-hidden">
            <DisplyTask />
          </div>
        </div>
      </div>
      <button
        onClick={handleTheme}
        className="top-10 right-12 absolute z-30 text-white bg-gray-400 p-3 hover:text-red-500 "
      >
        Change Theme
      </button>
    </>
  );
}

export default App;
