import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/SignUp";
import Apple from "./Pages/Apple/Apple";
import Home from "./Pages/DashBoard";
import Transaction from "./Pages/Transaction/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Apple:3" element={<Apple />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/transactions" element={<Transaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
