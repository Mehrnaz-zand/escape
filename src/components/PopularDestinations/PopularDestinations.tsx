import destinations from "../../data/destinations";
import DestinationCard from "../DestinationCard/DestinationCard";
import "./popularDestinations.scss";

const popularDestinations = () => {
  return (
    <div className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="popular-destinations grid">
        {destinations.slice(0, 4).map((destination) => (
          <DestinationCard destination={destination} showViewMore={true} />
        ))}
      </div>
    </div>
  );
};

export default popularDestinations;
