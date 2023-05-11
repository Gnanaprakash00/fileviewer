import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignCard from "../Compound/DesginCardCompound/DesignCard";
import Home from "../Compound/HomeCompound/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/design" element={<DesignCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
