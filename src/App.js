import "./App.css";
import MainDash from "./component/MainDash/MainDash";
import RightSide from "./component/RightSide/RightSide";
import Sidebar from "./component/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
     <Sidebar/>
     <MainDash/>
     <RightSide/>
     
      </div>
    </div>
  );
}

export default App;
