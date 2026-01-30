import React from 'react'
import Page1 from "../pages/Page1.jsx";
import Page2 from "../pages/Page2.jsx";
import Reviews from "./Reviews"
import Page3 from "../pages/Page3.jsx";

const Home = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Page1 />
      <Page2 />
      <Reviews/>
      <Page3 />
    </div>
  );
}

export default Home