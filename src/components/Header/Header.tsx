import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">Escape</Link>
        </h1>
        <div className="header-menu">
          <Link to="/">Home</Link>
          <Link to="/destinations">All destinations</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;