import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">
        
        </div>
      </div>
   
    </div>
  );
}

export default App;
