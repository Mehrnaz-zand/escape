import "./hero.scss";
import Searchbar from "../Searchbar/Searchbar";

const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>Find your next escape</h1>

          <p>
            Discover beautiful destinations, compare prices,
            <br />
            check dog-friendly options and plan your next trip with less effort.
          </p>
        </div>
        <Searchbar />
      </section>
    </div>
  );
};

export default Hero;
