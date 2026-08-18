import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Result from "./components/Result";

export default function App() {
  return (
    <>
      <section>
        <Navbar />
        <Header />
        <Searchbar />
        <hr />
        <Result />
        <hr />
        <Footer />
      </section>
    </>
  );
}
