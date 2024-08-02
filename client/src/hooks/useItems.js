/* eslint-disable no-undef */
import { useEffect, useState } from "react";

import catalogueAPI from "../api/catalogue-api";


export function useGetAllItems(){
    const [items, setItems] = useState({
        brand: '',
        model: '',
        engineCapacity: '',
        imageUrl: '',
        summary: '',
      });

    useEffect(() => {
  
      (async () => {
          const result = await catalogueAPI.getAll();
  
          setItems(result);
      })();
  
  }, []);

  return [items, setItems];
}

export function useGetOneItems(itemId){
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const result = await catalogueAPI.getOne(itemId);
            
            setItem(result);
        })(); 

    }, [itemId]);

    return [
        item,
        setItem,
    ];
}

export function useCreateItem(){
    const itemCreateHandler = (itemData) => catalogueAPI.create(itemData);

    return itemCreateHandler;
}