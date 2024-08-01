/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import catalogueAPI from "../../api/catalogue-api";
import LatestItems from "./latestItems/LatestItems";

/* eslint-disable react/no-unknown-property */
export default function Home() {
  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await catalogueAPI.getAll();
      //TODO: modyfy to fetch only latest
      setLatestItems(result.reverse().slice(0, 3));
    })();
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>DREAM CARS</h2>
        <h3>Search your dream car</h3>
        <Link to="/catalogue" className="search-btn">
          Search now...
        </Link>
      </div>

      <h1 className="new-arrival">New Arrival</h1>
      <h1 className="our-explore">Our explore Cars</h1>
      <div id="home-page">
        {latestItems.length > 0 ? (
          latestItems.map((item) => <LatestItems key={item._id} {...item} />)
        ) : (
          <p className="no-articles">No games yet</p>
        )}
      </div>
    </section>
  );
}
