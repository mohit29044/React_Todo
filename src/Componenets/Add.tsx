import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, submitUpdate } from "../App/Slices/CRUD";
import { filter } from "../App/Slices/Filter";
import { toast } from "react-toastify";
import { RootState } from "../App/Store";
function Add() {
  const userRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const selectEditVal = useSelector((state: RootState) => state.Add.edit);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    if (selectEditVal) {
      setEdit(selectEditVal?.value);
    }
  }, [selectEditVal]);

  function dropdownval(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(filter(e.target.value));
  }
  function addTask() {
    const trimedit = edit.trim();
    if (trimedit && selectEditVal) {
      dispatch(submitUpdate(edit));
      setEdit("");
      return;
    }
    if (userRef.current && userRef.current.value) {
      const inputValue = userRef.current.value;
      userRef.current.value = "";
      if (inputValue.trim()) {
        dispatch(AddNew(inputValue));
        const add = () => toast("Added Successfully");
        add();
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
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          placeholder="Add New Task"
          className="py-2 px-3 bg-[#C4BABA5E] text-white placeholder:text-white backdrop-blur-lg rounded-full"
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
          className="w-36 bg-[#C4BABA5E] backdrop-blur-lg text-white border-none rounded-md"
          onChange={dropdownval}
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
