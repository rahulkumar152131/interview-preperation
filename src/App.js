import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/header/Navbar";
import Question from "./pages/home/html/Html";
import Html from "./pages/home/html/Html";
import Css from "./pages/home/css/Css";
import Js from "./pages/home/js/Js";
import Java from "./pages/home/java/Java";
import Reacts from "./pages/home/react/Reacts";
import MountBlue from "./pages/home/mountBlue/MountBlue";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />

          <Route path="/question/html" element={
            <>
              <Navbar />
              <Html />
            </>
          } />
          <Route path="/question/css" element={
            <>
              <Navbar />
              <Css />
            </>
          } />
          <Route path="/question/js" element={
            <>
              <Navbar />
              <Js />
            </>
          } />

          <Route path="/question/java" element={
            <>
              <Navbar />
              <Java />
            </>
          } />
          <Route path="/question/mount-blue" element={
            <>
              <Navbar />
              <MountBlue />
            </>
          } />

          <Route path="/question/react" element={
            <>
              <Navbar />
              <Reacts />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
