const About = () => {
  return (
    <div>
      <h1>About Escape</h1>
      <p>
        ESCAPE is a simple travel planning app designed to help you
        discover destinations and plan your next getaway with less effort.
        Browse destinations, compare prices, check dog-friendly options, and
        find inspiration for your next trip. The goal of ESCAPE is to make
        travel planning feel simple, clear, and enjoyable.
      </p>
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default About;
