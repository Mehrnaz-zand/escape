import Button from "./button";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <p>Where do you want to escape?</p>
      <input
        className="input"
        type="text"
        placeholder="Search destinations..."
      />
      <Button />
    </div>
  );
};

export default Searchbar;
