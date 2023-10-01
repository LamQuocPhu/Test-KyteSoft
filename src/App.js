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
    {
      id: 1,
      title: "Where do you want to go?",
      subtitle: "Trips, experiences, and places. All in one service.",
      type: "header",
    },
    {
      id: 2,
      title: "Popular Destinations",
      subtitle: "World's best tourist destinations",
      type: "popular",
    },
    {
      id: 3,
      title: "Best Value Trips",
      subtitle: "Best offers trips from us",
      type: "value",
    },
    {
      id: 4,
      title: "Why Choose Us",
      subtitle: "Here are reasons you should plan trip with us",
      type: "why",
    },
    {
      id: 5,
      title: "Articles & Tips",
      subtitle: "Explore some of the best tips from around the world",
      type: "article",
    },
  ];

  const Popular = [
    {
      id: 1,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
      imgalt: "Tokyo",
      imgtitle: "Tokyo",
    },
    {
      id: 2,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
      imgalt: "Seoul",
      imgtitle: "Seoul",
    },
    {
      id: 3,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
      imgalt: "Paris",
      imgtitle: "Paris",
    },
    {
      id: 4,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
      imgalt: "London",
      imgtitle: "London",
    },
  ];

  const BestValue = [
    {
      id: 1,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
      imgalt: "French Autumn",
      tourname: "French Autumn",
      tourplace: "City Tours, Urban",
      tourprice: "$5,000",
      tourpricediscount: "",
      tourratingcount: "4 reviews",
      tourday: "5 days",
      toursaleicon: "",
    },
    {
      id: 2,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
      imgalt: "Grand Switzerland",
      tourname: "Grand Switzerland",
      tourplace: "Shopping, Mountain, Snow & Ice",
      tourprice: "$6,000",
      tourpricediscount: "",
      tourratingcount: "4 reviews",
      tourday: "6 days",
      toursaleicon: "",
    },
    {
      id: 3,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
      imgalt: "Discover Japan",
      tourname: "Discover Japan",
      tourplace: "City Tours, Iconic",
      tourprice: "$2,500",
      tourpricediscount: "$3,000",
      tourratingcount: "4 reviews",
      tourday: "5 days",
      toursaleicon: "Sale",
    }
  ];

  const Whychooseus = [
    {
      id: 1,
      imgsrc:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
      title: "Handpicked Hotels",
      imgalt: "Handpicked Hotels",
      details: `Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa`,
    },
    {
      id: 2,
      imgsrc:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
      imgalt: "World Class Service",
      title: "World Class Service",
      details: `Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa`,
    },
    {
      id: 3,
      imgsrc:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
      title: "Best Price Guarantee",
      imgalt: "Best Price Guarantee",
      details: `Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa`,
    },
  ];

  const Article = [
    {
      id: 1,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
      imgalt: "Memorial Day to Someone Told Me to Travel",
      postdetailDay: "DECEMBER 10, 2016",
      postdetailTitleDescription: "Memorial Day to Someone Told Me to Travel",
      postdetailDescription: `Meh synth Schlitz, tempor duis single-origin coffee ea next
      level ethnic fingerstache...`
    },
    {
      id: 2,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
      imgalt: "7 Tips For Nomads On A Budget Trips",
      postdetailDay: "DECEMBER 10, 2016",
      postdetailTitleDescription: "7 Tips For Nomads On A Budget Trips",
      postdetailDescription: `Meh synth Schlitz, tempor duis single-origin coffee ea next
      level ethnic fingerstache...`
    },
    {
      id: 3,
      imgsrc: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
      imgalt: "Taking A Travel Blog Victory Lap",
      postdetailDay: "DECEMBER 10, 2016",
      postdetailTitleDescription: "Taking A Travel Blog Victory Lap",
      postdetailDescription: `Meh synth Schlitz, tempor duis single-origin coffee ea next
      level ethnic fingerstache...`
    },
  ];

  return (
    <>
      <StickyHeader />
      <SidebarMenu />
      <Option />
      <ScrollToTopBtn />
      <div className="overlay" id="overlay">
        <Header info = {info.filter((item) => item.type === "header")} />
        <div className="app-container">
          <FeaturePoppular
            info = {info}
            Popular = {Popular}
          />
          <FeatureBestValue
            info = {info}
            BestValue = {BestValue}
          />
          <FeatureWhyChooseUs
            info = {info}
            Whychooseus = {Whychooseus}
          />
        </div>
        <BridgeImg />
        <div className="app-container">
          <FeatureArticle
            info = {info}
            Article = {Article}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;