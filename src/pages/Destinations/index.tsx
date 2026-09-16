import DestinationCard from "../../components/DestinationCard";
import Searchbar from "../../components/Search";
import destinations from "../../data/destinations";

const Destinations = () => {
  const destinationsList = destinations;

  return (
    <div>
      <h1>Destinations</h1>
      <p>Welcome to the destinations page!</p>
      <Searchbar />
      {destinationsList.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          showViewMore={true}
        />
      ))}

      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Destinations;
