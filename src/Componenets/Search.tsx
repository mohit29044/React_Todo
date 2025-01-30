import React from "react";
import { useDispatch } from "react-redux";
import { searchTodo } from "../App/Slices/CRUD.ts";

function Search() {
  const dispatch = useDispatch();
  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchTodo(e.target?.value));
  }
  return (
    <div className="relative">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Existing Task"
        className="py-2 px-3 bg-[#C4BABA5E] text-white placeholder:text-white backdrop-blur-lg w-80 rounded-full pr-10"
        onChange={handle}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-whi"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </div>
  );
}
export default Search;
