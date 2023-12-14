import "./App.css";
import MainDash from "./component/MainDash/MainDash";
import Sidebar from "./component/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
     <Sidebar/>
     <MainDash/>
     <div></div>
      </div>
    </div>
  );
}

export default App;
