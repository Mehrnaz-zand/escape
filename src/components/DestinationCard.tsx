import type { Destination } from "../types/Destination";


type Props = {
  destination: Destination 
};


const DestinationCard = (props: Props) => {
  return (
      <div className="destination-card">
        <h2>{props.destination.name}</h2>
        <p>{props.destination.description}</p>
        <strong>From {props.destination.price}</strong>
      </div>
  );
};

export default DestinationCard;
