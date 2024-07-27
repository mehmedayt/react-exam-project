/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { useGetAllItems } from "../../hooks/useItems";

import CatalogueListItem from "./catalogue-list-item/CatalogueListItem";

export default function Catalogue() {
  const [items] = useGetAllItems();

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

        {items.length > 0
        ? items.map(item => <CatalogueListItem key={item._id} {...item} />) 
        : <h3 className="no-articles">No articles yet</h3>
    }
    
    </section>
  );
}
