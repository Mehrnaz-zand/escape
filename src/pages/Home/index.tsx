import "./home.scss";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="container">
      <Hero />
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
