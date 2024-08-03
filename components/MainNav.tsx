import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
