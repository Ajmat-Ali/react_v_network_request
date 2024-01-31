import { useState } from "react";
import { DataDisplay } from "./components/DataDisplay";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      // https://jsonplaceholder.typicode.com/posts?_limit=0

      let finalRes = await res.json();

      setData(finalRes);
    } catch (error) {
      setError(error);

      setError(error);
    } finally {
      setLoading(false);
      setButtonClicked(true);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={fetchData} style={{ position: "sticky", top: "10px" }}>
        Fetch
      </button>

      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div>
          {buttonClicked && data.length === 0 ? (
            <p>No Data found</p>
          ) : (
            data.map((ele) => {
              return (
                <div key={ele.id}>
                  <DataDisplay item={ele} />
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default App;
