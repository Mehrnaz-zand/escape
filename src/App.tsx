import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import PageNotFound from "./pages/PageNotFound";
import Destinations from "./pages/Destinations";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
