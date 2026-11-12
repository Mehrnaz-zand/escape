import "./home.scss";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";

const Home = () => {
  return (
    <div className="container home">
      <Hero />
      <Searchbar />
      <hr />
      <PopularDestinations />
    </div>
  );
};

export default Home;
