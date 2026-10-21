import "./home.scss";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = () => {
  return (
    <div className="container home">
      <Hero />
      <Searchbar />
      <hr />
      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <button className="button">Brows all destination →</button>
      </div>
      <div className="grid">
        {destinations.slice(0, 3).map((destination) => (
          <DestinationCard destination={destination} showViewMore={true} />
        ))}
      </div>
    </div>
  );
};

export default Home;
