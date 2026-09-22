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
      <h2>{props.destination.name}</h2>
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
      <img
        src={props.destination.image}
        alt={props.destination.name}
        className="img"
      />
      <div className="view-more">
        {props.showViewMore && (
          <Link to={`/result/${props.destination.id}`}>
            <button className="button">View more</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
