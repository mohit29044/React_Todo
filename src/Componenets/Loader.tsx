import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="absolute top-0 left-0 bg-gray-500  right-0 bottom-0 inset-0 z-50 flex justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
