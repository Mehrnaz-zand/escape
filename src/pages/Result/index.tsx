import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";
import { Link, useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(
    (destination) => destination.id.toString() === id,
  );

  return !destination ? (
    <div className="container">
      <h1>Destination not found.</h1>
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  ) : (
    <div className="result-page">
      <h1>Results</h1>
      <DestinationCard destination={destination} showViewMore={false} />
      <p>Checkout all destinations!</p>
      <Link to="/destinations" className="button">
        See all destinations
      </Link>
      <br />
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Result;
