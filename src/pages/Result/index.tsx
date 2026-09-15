import DestinationCard from "../../components/DestinationCard";
import destinations from "../../data/destinations";
import { useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(
    (destination) => destination.id.toString() === id,
  );

  return !destination ? (
    <div>
      <h1>Destination not found.</h1>
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  ) : (
    <div className="result-page">
      <h1>Results</h1>
      <DestinationCard destination={destination} />
      <p>Checkout more destinations!</p>
      <div className="grid">
        {destinations
          .filter((item) => item.id.toString() !== id)
          .slice(0, 4)
          .map((item) => (
            <DestinationCard
              key={item.id}
              destination={item}
              showViewMore={true}
            />
          ))}
      </div>
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Result;
