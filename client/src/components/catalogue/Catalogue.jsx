/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { useGetAllItems } from "../../hooks/useItems";

import CarListItem from "./car-list-item/CarListItem";

export default function Catalogue() {
  const [items] = useGetAllItems();

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

        {items.length > 0
        ? items.map(item => <CarListItem key={item._id} {...item} />) 
        : <h3 className="no-articles">No articles yet</h3>
    }
    
    </section>
  );
}
