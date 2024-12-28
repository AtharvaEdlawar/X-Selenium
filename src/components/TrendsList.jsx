import { useState, useEffect } from "react";

const TrendsList = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIP, setCurrentIP] = useState("");

  const fetchTrends = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/trends");
      const data = await response.json();
      setTrends(data);
      if (data.length > 0) {
        setCurrentIP(data[0].ipAddress); // Assuming the latest trend has the current IP address
      }
    } catch (error) {
      console.error("Error fetching trends:", error);
    }
  };

  const scrapeTrends = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:5000/api/trends/scrape", {
        method: "POST",
      });
      fetchTrends();
    } catch (error) {
      console.error("Error running Selenium script:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <div>
      <button onClick={scrapeTrends} disabled={loading}>
        {loading ? "Scraping..." : "Fetch Latest Trends"}
      </button>
      <div style={{ marginTop: "20px" }}>
        <h2>Trends and Details</h2>
        {trends.map((trend, index) => (
          <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h3>Trends:</h3>
            <ul>
              {["trend1", "trend2", "trend3", "trend4", "trend5"].map((key, idx) => (
                <li key={idx}>
                  <strong>{`Name of Trend ${idx + 1}`}: </strong>
                  {trend[key] || "N/A"}
                </li>
              ))}
            </ul>
            <p>
              <strong>IP Address Used:</strong> {trend.ipAddress}
            </p>
            <p>
              <strong>Date:</strong> {new Date(trend.dateTime).toLocaleString()}
            </p>
            <details>
              <summary>JSON Record</summary>
              <pre>{JSON.stringify(trend, null, 2)}</pre>
            </details>
            <button onClick={scrapeTrends} disabled={loading}>
              {loading ? "Running Query..." : "Run Query Again"}
            </button>
          </div>
        ))}
      </div>
      {currentIP && (
        <p>
          <strong>The IP address used for the latest query:</strong> {currentIP}
        </p>
      )}
    </div>
  );
};

export default TrendsList;
