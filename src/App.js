import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <div className="app-container">
        <PopularDestinations></PopularDestinations>
      </div>
    </>
  );
}

export default App;
