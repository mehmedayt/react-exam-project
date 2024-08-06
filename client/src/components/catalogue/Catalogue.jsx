/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { useGetAllItems } from "../../hooks/useItems";
import ScrollTop from "../ui/scroll-top/ScrollTop";

import CarListItem from "./car-list-item/CarListItem";

export default function Catalogue() {
  const [items] = useGetAllItems();

  return (
    <div>
      <h1 className="all-cars">All Cars</h1>
      <h3 className="all-cars-sub">View Car Details or Send an Email to the Customer</h3>
    <section id="catalog-page">

        {items.length > 0
        ? items.map(item => <CarListItem key={item._id} {...item} />) 
        : <h3 className="no-articles">No articles yet</h3>
    }
    </section>
    <ScrollTop/>
    </div>
  );
}
