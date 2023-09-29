import React, { useEffect, useState } from "react";
import FeaturePoppular from "./components/FeaturePoppular";
import FeatureBestValue from "./components/FeatureBestValue";
import FeatureWhyChooseUs from "./components/FeatureWhyChooseUs";
import BridgeImg from "./components/BridgeImg";
import FeatureArticle from "./components/FeatureArticle";
import SidebarMenu from "./components/SidebarMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Option from "./components/Option";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import StickyHeader from "./components/StickyHeader";
import "./styles/App.scss";

function App() {
  const info = [
    {title: 'Where do you want to go', subtitle: 'Trips, experiences, and places. All in one service.', type:'header'},
    {title: 'Popular Destinations', subtitle: "World's best tourist destinations", type:'popular'},
    {title: 'Best Value Trips', subtitle: 'Best offers trips from us', type:'value'},
    {title: 'Why Choose Us', subtitle: 'Here are reasons you should plan trip with us', type:'why'}
  ];
  return (
    <>
      <StickyHeader/>
      <SidebarMenu />
      <Option />
      <ScrollToTopBtn />
      <div className="overlay" id="overlay">
        <Header
          title={"Where do you want to go"}
          subtitle={"Trips, experiences, and places. All in one service."}
        />
        <div className="app-container">
          <FeaturePoppular
            title={"Popular Destinations"}
            subtitle={"World's best tourist destinations"}
          />
          <FeatureBestValue
            title={"Best Value Trips"}
            subtitle={"Best offers trips from us"}
          />
          <FeatureWhyChooseUs
            title={"Why Choose Us"}
            subtitle={"Here are reasons you should plan trip with us"}
          />
        </div>
        <BridgeImg />
        <div className="app-container">
          <FeatureArticle
            title={"Articles & Tips"}
            subtitle={"Explore some of the best tips from around the world"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
