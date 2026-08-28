import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../data/destinations";
import { useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(
    (destination) => destination.id.toString() === id,
  );
  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      <h1> Results</h1>
      <DestinationCard destination={destination} />
    </div>
  );
};

export default Result;
