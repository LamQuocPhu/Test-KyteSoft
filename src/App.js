import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Option from "./components/Option";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Option></Option> */}
      <ScrollToTopBtn></ScrollToTopBtn>
      <div className="app-container">
        <Features></Features>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
