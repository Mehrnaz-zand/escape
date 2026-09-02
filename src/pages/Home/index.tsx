import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Search";
import DestinationCard from "../../components/DestinationCard";
import destinations from "../../data/destinations";

const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Header />
        <Searchbar />
        <div className="grid">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard destination={destination} showViewMore={true} />
          ))}
        </div>

        <hr />
        <Footer />
      </section>
    </>
  );
};

export default Home;
