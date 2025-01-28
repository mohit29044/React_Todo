import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddNew } from "../App/Slices/CRUD";

function Add() {
  const userRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function addTask() {
    if (userRef.current && userRef.current.value) {
      const inputValue = userRef.current.value;
      userRef.current.value = "";
      if (inputValue) {
        dispatch(AddNew(inputValue));
      }
    }
  }
  return (
    <div className="flex flex-row gap-5">
      <div className="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add New Task"
          className="py-2 px-3 bg-[#C4BABA5E] backdrop-blur-lg rounded-full"
          ref={userRef}
        />
      </div>
      <button className="flex justify-center items-center" onClick={addTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      </button>
      <div className="relative">
        <select
          name=""
          id="dropdown"
          className="w-36 bg-[#C4BABA5E] backdrop-blur-lg text-gray-600 border-none rounded-md"
        >
          <option value="All" className="bg-[#C4BABA5E] backdrop-blur-lg p">
            All
          </option>
          <option value="Completed" className="bg-[#C4BABA5E] backdrop-blur-lg">
            Completed
          </option>
          <option
            value="Incompleted"
            className="bg-[#C4BABA5E] backdrop-blur-lg"
          >
            Incompleted
          </option>
        </select>
      </div>
    </div>
  );
}

export default Add;
