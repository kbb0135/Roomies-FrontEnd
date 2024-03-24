import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
