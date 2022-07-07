import Navbar from "./components/Navbar";
import MTable from "./components/MTable";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/userinfo" element={<MTable />} />
      </Routes>
    </div>
  );
}

export default App;
