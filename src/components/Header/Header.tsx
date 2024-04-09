import React from "react";
import NavigationComponent from "../NavigationComponent";

const Header = () => {
  return (
    <header className="w-full bg-white p-4">
      <div className=" 1/12 mx-auto max-w-xl flex justify-between transition-opacity">
        <h1 className=" text-4xl cursor-pointer hover:opacity-50 transition-duration: 150ms">
          logo
        </h1>{" "}
        <NavigationComponent />
      </div>
    </header>
  );
};

export default Header;
