import type { Destination } from "../types/Destination";

type Props = {
  destination: Destination;
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
    </div>
  );
};

export default DestinationCard;
