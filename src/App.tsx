import Add from "./Componenets/Add";
import DisplyTask from "./Componenets/DisplyTask";
import Search from "./Componenets/Search";
import Video from "./Componenets/Video";
function App() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Video />
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
          <div>
            <DisplyTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
