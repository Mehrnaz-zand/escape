import { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "./DestinationCard";
import type { Destination } from "../types/Destination";

const destinationList = destinations;

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [destinationData, setDestinationData] = useState<
    Destination | undefined
  >(undefined);

  const handleSearch = () => {
    const result = destinationList.find(
      (destination) =>
        destination.name.toLowerCase() === searchInput.toLowerCase(),
    );
    setDestinationData(result);
  };

  return (
    <div className="search-bar">
      <p>Where do you want to escape?</p>
      <input
        className="input"
        type="text"
        placeholder="Search destinations..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      {destinationData ? (
        <div className="destination-results">
          <DestinationCard destination={destinationData} />
        </div>
      ) : (
        <p>Search for a valid destination to see results.</p>
      )}
    </div>
  );
};

export default Searchbar;
