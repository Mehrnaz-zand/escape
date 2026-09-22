const PageNotFound = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <button className="button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default PageNotFound;
