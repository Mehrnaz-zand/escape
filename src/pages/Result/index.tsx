import DestinationCard from "../../components/DestinationCard";
import destinations from "../../data/destinations";
import { Link, useParams } from "react-router-dom";

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
      <p>Checkout all destinations!</p>
      <Link to="/destinations" className="button">
        See all destinations
      </Link>
      <h2>More Recommendations</h2>
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
