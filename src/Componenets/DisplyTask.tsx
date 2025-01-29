import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/Store.ts";
// import { Delete, showStatus } from "./../App/Slices/CRUD.ts";
import { ToastContainer, toast } from "react-toastify";
import Task from "./Task.tsx";
import { useEffect, useState } from "react";
import Add from "./Add.tsx";

function DisplyTask() {
  const addSelector = useSelector((state: RootState) => state.Add.todo);
  const [data, setData] = useState(addSelector);
  const filterSelector = useSelector((state: RootState) => state.Filter);
  useEffect(() => {
    if (filterSelector.filter === "All") {
      setData(addSelector);
    }
    if (filterSelector.filter === "Completed") {
      setData(addSelector.filter((todo) => todo.isCompleted === true));
    }
    if (filterSelector.filter === "Incompleted") {
      setData(addSelector.filter((todo) => todo.isCompleted === false));
    }
  }, [addSelector, filterSelector]);
  const show = data.map((todo) => <Task {...todo} />);
  return (
    <div>
      {show}
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default DisplyTask;
