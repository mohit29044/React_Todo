import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/Store.ts";
// import { Delete, showStatus } from "./../App/Slices/CRUD.ts";
import { ToastContainer, toast } from "react-toastify";
import Task from "./Task.tsx";

function DisplyTask() {
  const addSelector = useSelector((state: RootState) => state.Add.todo);
  //   const dispatch = useDispatch();
  //   const added = () => toast("Marked As Completed");

  const show = addSelector.map((todo) => (
    // <div
    //   key={todo.id}
    //   className="py-2 px-3 bg-[#C4BABA5E] backdrop-blur-lg rounded-full mt-2 mb-2 w-72 flex justify-between items-center"
    // >
    //   <p className={todo.isCompleted ? "line-through" : ""}>{todo.value}</p>

    //   <div className="flex items-center space-x-3">
    //     <input
    //       type="checkbox"
    //       className="w-4 h-4 cursor-pointer"
    //       onChange={() => {
    //         dispatch(showStatus(todo.id));
    //         if (!todo.isCompleted) {
    //           added();
    //         } else {
    //           const remove = () => toast("Marked As Pending");
    //           remove();
    //         }
    //       }}
    //     />
    //     <button className="group" onClick={() => dispatch(Delete(todo.id))}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="lucide lucide-trash cursor-pointer stroke-gray-500 group-hover:stroke-red-500 transition-colors"
    //       >
    //         <path d="M3 6h18" />
    //         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    //         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
    <Task {...todo} />
  ));
  return (
    <div>
      {show}
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default DisplyTask;
