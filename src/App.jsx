import "./App.css";
import React, { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
const FetchName = fetch("./Allcarts.json").then((res) => res.json());
const App = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar></Navbar>

        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Main FetchName={FetchName}></Main>
        </Suspense>

        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
