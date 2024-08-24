import React from "react";
import AddNew from "./AddNew";
import Models from "./Models";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">
        Welcome <b>John!</b>
      </h1>
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Home;
