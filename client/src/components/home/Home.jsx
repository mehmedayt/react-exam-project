/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
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
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {latestItems.length > 0 
        ? latestItems.map(item => <LatestItems key={item._id} {...item} />)
        : <p className="no-articles">No games yet</p>
        }
        
      </div>
    </section>
  );
}
