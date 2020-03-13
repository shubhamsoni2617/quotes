import React, { useState } from "react";
import "./style.scss";
import theatre from "../../assets/theatre-ads.png";
import Tabs from "./Tabs";
import FilterCheckbox from "./FilterCheckBox";
import Cards from "./Cards";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div>
      <section className="breadcrumbs">
        <div className="banner-wrapper">
          <img src={theatre} />
        </div>
        <div className="banner-overlay">
          <div className="container-fluid">
            <h1>Movies for Life</h1>
          </div>
        </div>
      </section>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? <FilterCheckbox /> : null}
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TWfzLpR3Q_E"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe> */}
      <Cards />
    </div>
  );
};

export default Home;
