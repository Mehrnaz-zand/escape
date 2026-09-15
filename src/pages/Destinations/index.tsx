import DestinationCard from "../../components/DestinationCard";
import destinations from "../../data/destinations";

const Destinations = () => {
  const destinationsList = destinations;
  
  return (
    <div>
      <h1>Destinations</h1>
      <p>Welcome to the destinations page!</p>
      {destinationsList.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}

      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Destinations;
