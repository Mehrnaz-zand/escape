import Footer from "../../components/Footer";
import Searchbar from "../../components/Search";
import DestinationCard from "../../components/DestinationCard";
import destinations from "../../data/destinations";

const Home = () => {
  return (
    <>
      <section>
        <Searchbar />
        <div className="grid">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard destination={destination} showViewMore={true} />
          ))}
        </div>
        <hr />
      </section>
    </>
  );
};

export default Home;
