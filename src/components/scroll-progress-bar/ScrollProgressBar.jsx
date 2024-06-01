import { useState, useEffect } from "react";
import "./ScrollProgressBar.css";

const ScrollProgressBar = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }

  const handleScrollPercentage = () => {
    const amountScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage(Math.floor((amountScrolled / height) * 100));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (loading) return <div>Loading data please wait</div>;

  if (errorMessage !== "") return <div>Error occurred: {errorMessage}</div>;

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-percentage-bar">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map(dataItem => {
              return <p key={dataItem.id}>{dataItem.title}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollProgressBar;
