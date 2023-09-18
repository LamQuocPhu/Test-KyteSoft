import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Option from "./components/Option";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import "./styles/App.scss";

function App() {
  return (
    <>
      {/* <Option></Option> */}
      <Header></Header>
      <div className="app-container">
      <ScrollToTopBtn></ScrollToTopBtn>
        <Features></Features>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
