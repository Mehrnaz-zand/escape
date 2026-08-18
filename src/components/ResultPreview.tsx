import { Link } from "react-router-dom";

const ResultPreview = () => {
  return (
    <div className="results">
      <p>Results will appear here.</p>
      <Link to="/result">See results</Link>
    </div>
  );
};

export default ResultPreview;
