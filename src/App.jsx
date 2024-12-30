import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import ph from "./assets/react.svg";

function App() {
  const navigate = useNavigate();

  return (
    <div className="bi">
      <header className="header">
       
        <img
          onClick={() => navigate('/')}
          className="logo"
          src={ph}
          alt="Logo"
          style={{ cursor: "pointer" }}/>
        <h2 className="logo">React</h2>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/AboutUs">AboutUs</Link>
        </h2>
        <h2>
          <Link to="/Contact">Contact</Link>
        </h2>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <h3>&copy; Copyright</h3>
      </footer>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
