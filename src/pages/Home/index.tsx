import "./home.scss";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Searchbar />
      <div className="grid">
        {destinations.slice(0, 3).map((destination) => (
          <DestinationCard destination={destination} showViewMore={true} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Home;
