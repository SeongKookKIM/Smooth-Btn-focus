import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Body from "./pages/Body";

function Navigation() {
  const navigate = useNavigate("");

  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
            autoFocus
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/test");
            }}
          >
            Test
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/body");
            }}
          >
            Body
          </button>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/body" element={<Body />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
