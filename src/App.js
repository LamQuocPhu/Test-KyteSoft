import Features from "./components/Features";
import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <div className="app-container">
        {/* <PopularDestinations></PopularDestinations> */}
        <Features></Features>
      </div>
    </>
  );
}

export default App;
