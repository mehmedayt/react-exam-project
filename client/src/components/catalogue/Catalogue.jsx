/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as catalogueAPI from "../../api/catalogue-api";
import CatalogueListItem from "./catalogue-list-item/CatalogueListItem";

export default function Catalogue() {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    catalogueAPI.getAll().then((result) => setCatalogue(result));
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

        {catalogue.length > 0
        ? catalogue.map(item => <CatalogueListItem key={item._id} {...item} />) 
        : <h3 className="no-articles">No articles yet</h3>
    }
    
    </section>
  );
}
