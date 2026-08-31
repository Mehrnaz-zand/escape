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
    <div className="result-page">
      <h1>Results</h1>
      <DestinationCard destination={destination} />
      <p>Checkout more destinations!</p>
      <div className="grid">
        {destinations.slice(0, 4).map((item) => (
          <DestinationCard key={item.id} destination={item} />
        ))}
      </div>
    </div>
  );
};

export default Result;
