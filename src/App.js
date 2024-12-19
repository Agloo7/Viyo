import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BookTrip from "./Components/BookTrip";
import BookNow from "./Components/BookNow";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-trip" element={<BookTrip />} />
            <Route path="/book-now/:id" element={<BookNow />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
