import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Search";
import ResultPreview from "../../components/ResultPreview";


const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Header />
        <Searchbar />
        <hr />
        <Footer />
      </section>
    </>
  );
}

export default Home;
