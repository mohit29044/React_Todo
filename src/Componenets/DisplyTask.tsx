import { useSelector } from "react-redux";
import type { RootState } from "../App/Store.ts";
import { ToastContainer } from "react-toastify";
import Task from "./Task.tsx";
import { useEffect, useState } from "react";

function DisplyTask() {
  const addSelector = useSelector((state: RootState) => state.Add.todo);
  const [data, setData] = useState(addSelector);
  const filterSelector = useSelector((state: RootState) => state.Filter);
  const selectSearch = useSelector(
    (state: RootState) => state.Add.searchResult
  );
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
    if (selectSearch) {
      setData(addSelector.filter((todo) => todo.value.includes(selectSearch)));
    }
  }, [addSelector, filterSelector, selectSearch]);
  const show = data.map((todo) => (
    <div key={todo.id}>
      <Task {...todo} />
    </div>
  ));
  return (
    <div>
      {show}
      <ToastContainer autoClose={1000} className="top-0 left-0" />
    </div>
  );
}

export default DisplyTask;
