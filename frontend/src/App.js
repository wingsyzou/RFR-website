import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookConsultation from "./pages/BookConsultation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-now/:postalCode" element={<BookConsultation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;