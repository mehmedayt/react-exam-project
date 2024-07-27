import { useEffect, useState } from "react";

import catalogueAPI from "../api/catalogue-api";


export function useGetAllItems(){
    const [items, setItems] = useState([]);

    useEffect(() => {
  
      (async () => {
          const result = await catalogueAPI.getAll();
  
          setItems(result);
      })();
  
  }, []);

  return [items, setItems];
}