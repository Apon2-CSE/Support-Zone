import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";

const App = () => {
  return (
    <>
      <div className="bg-gray-300">
        <Navbar></Navbar>

        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
