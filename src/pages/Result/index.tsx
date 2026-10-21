import DestinationCard from "../../components/DestinationCard/DestinationCard";
import destinations from "../../data/destinations";
import { Link, useParams } from "react-router-dom";
import "./result.scss";
import DogFriendlyIcon from "../../assets/icons/dog-paw.svg";
import LocationIcon from "../../assets/icons/location.svg";
import tagIcon from "../../assets/icons/tag.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

const Result = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(
    (destination) => destination.id.toString() === id,
  );

  return (
    <div className="container">
      <div className="back-link">
        <Link to="/">
          <img src={arrowLeftIcon} className="icon" alt="Back" />
          Back to home
        </Link>
      </div>
      {!destination ? (
        <div className="container">
          <h1>Destination not found.</h1>
        </div>
      ) : (
        <div className="result-page">
          <div className="result-section">
            <img
              src={destination.image}
              alt={destination.name}
              className="result-image"
            />
            <div className="result-text">
              <h1>{destination.name}</h1>
              <p>
                <img src={LocationIcon} alt="" className="icon" />
                {destination.country}
              </p>
              <p>
                <img src={tagIcon} alt="" className="icon" />$
                {destination.price}
              </p>
              {destination.dogFriendly && (
                <>
                  <p>
                    <img src={DogFriendlyIcon} alt="" className="icon" />
                    Dog friendly
                  </p>
                </>
              )}
              <p>{destination.description}</p>
            </div>
          </div>

          <br />
        </div>
      )}
    </div>
  );
};

export default Result;
