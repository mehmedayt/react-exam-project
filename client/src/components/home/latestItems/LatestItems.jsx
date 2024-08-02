/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function LatestItems({
    _id,
    brand,
    imageUrl,
}){
    return (
        <div className="game">
          <div className="image-wrap">
            <img src={imageUrl} />
          </div>
          <h3>{brand}</h3>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className="data-buttons">
            <Link to={`/items/${_id}/details`} className="btn details-btn">
              Details
            </Link>
          </div>
        </div>
    );
}