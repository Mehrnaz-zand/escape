import "./App.css";

function App() {
  return (
    <>
      <section>
        <div>
          <h1>Escape</h1>
          <hr />
          <div>
            <p>Where do you want to escape?</p>
            <div className="search-bar">
              <input
                className="input"
                type="text"
                placeholder="Search destinations..."
              />
              <button 
              className="button" onClick={() => alert("Search functionality not implemented yet.")}>
                Search
                </button>
            </div>
          </div>
          <hr/>
          <div className="results">
            <p>Results will appear here.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
