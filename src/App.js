import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMcq from "./components/Dashboard/AddMcq";
import AddShort from "./components/Dashboard/AddShort";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/*       
      <Dashboard></Dashboard> */}
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/add-mcq" element={<AddMcq></AddMcq>}>
          {" "}
        </Route>
        <Route path="/add-short" element={<AddShort></AddShort>}></Route>
      </Routes>
    </div>
  );
}

export default App;
