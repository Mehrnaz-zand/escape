import { Link } from "react-router-dom";
import type { Destination } from "../../types/Destination";
import "./destinationCard.scss";

type Props = {
  destination: Destination;
  showViewMore?: boolean;
};

const DestinationCard = (props: Props) => {
  return (
    <div className="destination-card">
      <img
        src={props.destination.image}
        alt={props.destination.name}
        className="card-image"
      />
      <div className="card-heading">
        <h3>{props.destination.country}</h3>
        <h2>{props.destination.name}</h2>
      </div>

      <div className="card-body">
        <p>{props.destination.description}</p>
        {!props.showViewMore && (
          <div className="card-details">
            <p>
              <span>Dog friendly: </span>
              {props.destination.dogFriendly ? (
                <span>Yes 🎉🐕</span>
              ) : (
                <span> No 😢</span>
              )}
            </p>
            <p>
              <strong>From ${props.destination.price}</strong>
            </p>
          </div>
        )}
        <div className="card-actions">
          {props.showViewMore && (
            <Link to={`/result/${props.destination.id}`}>
              <button className="button">→</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
