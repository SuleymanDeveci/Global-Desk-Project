import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login.tsx";
import Home from "../pages/Home/Home.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
