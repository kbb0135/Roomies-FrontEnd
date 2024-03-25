import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<SignUp />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
