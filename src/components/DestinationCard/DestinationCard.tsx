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
        className="img"
      />
      <div className="destination-titles">
        <h3>{props.destination.country}</h3>
        <h2>{props.destination.name}</h2>
      </div>

      <div className="destination-description">
        <p>{props.destination.description}</p>
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

        <div className="view-more">
          {props.showViewMore && (
            <Link to={`/result/${props.destination.id}`}>
              <button className="button">View more</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
