import "./about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Escape</h1>
        <p>
          ESCAPE is a simple travel planning app designed to help you discover
          destinations and plan your next getaway with less effort.
        </p>
        <p>
          Browse destinations, compare prices, check dog-friendly options, and
          find inspiration for your next trip.
        </p>
        <p>
          The goal of ESCAPE is to make travel planning feel simple, clear, and
          enjoyable.
        </p>
        <button className="button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default About;
