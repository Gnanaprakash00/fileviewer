import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignCard from "../Compound/DesginCardCompound/DesignCard";
import Home from "../Compound/HomeCompound/Home";
import Viewer from "../Compound/ViewerCompound'/Viewer";

export const FilePath = createContext();

const Router = () => {
  const [filePath, setFilePath] = useState({ filePath: "", type: "" });

  return (
    <FilePath.Provider value={{ filePath, setFilePath }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/viewer" element={<Viewer />}></Route>
        </Routes>
      </BrowserRouter>
    </FilePath.Provider>
  );
};

export default Router;
