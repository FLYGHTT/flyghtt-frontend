
import React from "react";
import GridLoader from "react-spinners/GridLoader";
const Loading = () => {
  return (
    <div className="h-screen items-center justify-center flex flex-col  w-full absolute">
      <GridLoader aria-label="Loading Spinner" color="hsla(170, 82%, 48%, 1)" />
    </div>
  );
};

export default Loading;
