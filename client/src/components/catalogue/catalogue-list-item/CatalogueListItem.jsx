/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CatalogueListItem ({
    _id,    
    title,
    category,
    imageUrl,
}) {
    return(
        <div className="allGames">
        <div className="allGames-info">
          <img src={imageUrl} />
          <h6>{category}</h6>
          <h2>{title}</h2>
          <Link to={`/games/${_id}/details`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    );
}