import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={Logo} alt="Escape logo" className="logo" />
        </Link>
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
