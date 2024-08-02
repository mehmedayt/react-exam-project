/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CarListItem ({
    _id,    
    brand,
    model,
    imageUrl,
}) {
    return(
        <div className="allItems">
        <div className="allItems-info">
          <img src={imageUrl} />
          <img src="../../public/images/vip.webp" className="vip"/>
          <h6>Car model: {model}</h6>
          <h2>Car brand: {brand}</h2>
          <Link to={`/items/${_id}/details`} className="details-button">
            Details
          </Link>
          <Link to={`#`} className="ask-button">
            Ask for availability
          </Link>
        </div>
      </div>
    );
}