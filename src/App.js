import React from "react";

import Navbar  from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SpecialMenu from "./components/SpecialMenu/SpecialMenu";
import MenuItems from "./components/MenuItems/MenuItems";
import SubHeading from "./components/SubHeading/SubHeading";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <SpecialMenu />
        <MenuItems />
        <SubHeading />
      </div>
    </div>
  );
};

export default App;
