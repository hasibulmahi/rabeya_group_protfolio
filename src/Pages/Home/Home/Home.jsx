import React from "react";
import Banner from "../../Shared/Banner/Banner";
import SisterConcern from "../SisterConcern/SisterConcern";
import About from "../About/About";
import Projects from "../../Projects/Projects";
import Services from "../../Services/Services";
import Teams from "../../Teams/Teams";
import Testamonial from "../Testamonial/Testamonial";
const Home = () => {
  return (
    <div>
        {/* changes from mahi
        changes from mahi */}
      <Banner></Banner>
      <SisterConcern></SisterConcern>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Testamonial></Testamonial>
      <Teams></Teams>
    </div>
  );
};

export default Home;
