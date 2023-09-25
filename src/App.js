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
import '../src/js/closeMobileNavBtn';
import '../src/js/openMobileNavBtn';
import "./styles/App.scss";

function App() {
  return (
    <>
      <SidebarMenu></SidebarMenu>
      <div className="overlay" id="overlay">
        <Header></Header>
        <Option></Option>
        <ScrollToTopBtn></ScrollToTopBtn>
        <div className="app-container">
          <FeaturePoppular></FeaturePoppular>
          <FeatureBestValue></FeatureBestValue>
          <FeatureWhyChooseUs></FeatureWhyChooseUs>
        </div>
        <BridgeImg></BridgeImg>
        <div className="app-container">
          <FeatureArticle></FeatureArticle>
        </div>
        <Footer></Footer>
        </div>
      </>
  );
}

export default App;
