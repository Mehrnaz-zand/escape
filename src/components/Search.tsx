import { useState } from "react";
import destinations from "../data/destinations";
import type { Destination } from "../types/Destination";
import { Link } from "react-router-dom";

const destinationList = destinations;

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [destinationData, setDestinationData] = useState<
    Destination | undefined
  >(undefined);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = () => {
    const result = destinationList.find(
      (destination) =>
        destination.name.toLowerCase() === searchInput.trim().toLowerCase(),
    );
    setDestinationData(result);
    setSubmitted(true);
  };

  return (
    <div className="search-bar">
      <p>Where do you want to escape?</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Search destinations..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="button">Search</button>
        {destinationData ? (
          <div className="destination-results">
            <p>
              {destinationData.name} - starting price: ${destinationData.price}
            </p>
            <Link to={`/result/${destinationData.id}`}>
              <button className="button">View more</button>
            </Link>
          </div>
        ) : submitted && !destinationData ? (
          <p>Destination not found.</p>
        ) : null}
      </form>
    </div>
  );
};

export default Searchbar;
