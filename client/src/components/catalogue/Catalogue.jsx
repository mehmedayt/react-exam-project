/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { useGetAllItems } from "../../hooks/useItems";

import CarListItem from "./car-list-item/CarListItem";

export default function Catalogue() {
  const [items] = useGetAllItems();

  return (
    <div>
      <h1 className="all-cars">All Cars</h1>
    <section id="catalog-page">

        {items.length > 0
        ? items.map(item => <CarListItem key={item._id} {...item} />) 
        : <h3 className="no-articles">No articles yet</h3>
    }
    </section>
    </div>
  );
}
