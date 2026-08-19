import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../data/destinations";

const Result = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      <h1> results page</h1>
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default Result;
