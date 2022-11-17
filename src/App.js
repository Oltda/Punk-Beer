
import './App.css';
import AllBeers from './components/AllBeers';
import Slider3D from "./components/Slider3D";
import Header from "./components/Header";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
        <div className="App">
          <Header />
          <Slider3D />
          <AllBeers />
        </div>
    </RecoilRoot>
  );
}

export default App;
