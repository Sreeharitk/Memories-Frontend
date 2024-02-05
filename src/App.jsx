import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Memories from "./Pages/Memories";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login insideRegister/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Memories" element={<Memories />} />
        <Route path="/*" element={<Navigate to={"/"}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
