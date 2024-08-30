
import React from "react";
import GridLoader from "react-spinners/GridLoader";
const Loading = () => {
  return (
    <div className="h-full items-center justify-center flex flex-col  w-full">
      <GridLoader aria-label="Loading Spinner" color="hsla(170, 82%, 48%, 1)" />
    </div>
  );
};

export default Loading;
