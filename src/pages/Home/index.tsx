import "./home.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";

const Home = () => {
  return (
    <div className="container">
      <section>
        <Searchbar />
        <div className="grid">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard destination={destination} showViewMore={true} />
          ))}
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Home;
