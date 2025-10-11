import React, { useEffect, useState } from "react";
import { item } from "../types/Item";
import ItemService from "../services/ItemService";
import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const [_item, _setItem] = useState<item>();

  const getItem = (id: string) => {
    ItemService.get(id)
      .then((response: any) => {
        _setItem(response.data);
        console.log(_item);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) {
      getItem(id);
    }
  }, [id]);

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">{_item?.MovieName}</h1>
        <p>{_item?.Id}</p>
        <p>${_item?.MovieDesc}</p>
      </section>
    </div>
  );
}
