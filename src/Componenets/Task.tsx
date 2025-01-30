import { useDispatch, useSelector } from "react-redux";
import {
  AddType,
  Delete,
  showStatus,
  editValue,
} from "./../App/Slices/CRUD.ts";
import { toast } from "react-toastify";

function Task(todo: AddType) {
  const dispatch = useDispatch();
  const added = () => toast("Marked As Completed");
  function handleDouble() {
    dispatch(editValue(todo));
  }
  return (
    <div
      onDoubleClick={handleDouble}
      key={todo.id}
      className="py-2 px-3 bg-[#C4BABA5E] text-white backdrop-blur-lg rounded-full mt-2 mb-2 w-72 flex justify-between items-center"
    >
      <p
        className={
          todo.isCompleted
            ? "line-through max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis text-black"
            : "max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis"
        }
      >
        {todo.value.toLowerCase().trim()}
      </p>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          className="w-4 h-4 cursor-pointer"
          onChange={() => {
            dispatch(showStatus(todo.id));
            if (!todo.isCompleted) {
              added();
            } else {
              const remove = () => toast("Marked As Pending");
              remove();
            }
          }}
        />
        <button
          className="group"
          onClick={() => {
            dispatch(Delete(todo.id));
            const deleteToast = () => toast("Deleted Successfully");
            deleteToast();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash cursor-pointer stroke-gray-900 group-hover:stroke-red-500 transition-colors"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Task;
