import { useState } from "react";
import DestinationCard from "../../components/DestinationCard";
import Searchbar from "../../components/Search";
import destinations from "../../data/destinations";

const Destinations = () => {
  const [destinationsList, setDestinationsList] = useState(destinations);

  const sortByPrice = () => {
    const sorted = [...destinationsList].sort((a, b) => a.price - b.price);
    setDestinationsList(sorted);
  };

  const sortByName = () => {
    const sorted = [...destinationsList].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setDestinationsList(sorted);
  };

  const filterDogFriendly = (checked: boolean) => {
    if (checked) {
      const filtered = destinationsList.filter(
        (destination) => destination.dogFriendly,
      );
      setDestinationsList(filtered);
      return;
    }
    setDestinationsList(destinations);
  };

  return (
    <div>
      <h1>Destinations</h1>
      <p>Welcome to the destinations page!</p>
      <Searchbar />
      <input
        value="Sort by Price"
        type="button"
        onClick={() => sortByPrice()}
      />
      <input value="Sort by Name" type="button" onClick={() => sortByName()} />
      <span>Dog Friendly:</span>
      <input
        value="Dog Friendly"
        type="checkbox"
        onChange={(e) => filterDogFriendly(e.target.checked)}
      />
      {destinationsList.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          showViewMore={true}
        />
      ))}
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Destinations;
