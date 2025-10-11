import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemService";
import { item } from "../types/Item";
import { Link, useParams } from "react-router-dom";

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState<item>();

  const getItem = (id: string) => {
    ItemService.get(id)
      .then((response: any) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message);
      });
  };

  useEffect(() => {
    if (id) {
      getItem(id);
    }
  }, [id]);

  return (
    <div className="container is-fluid">
      <section className="section">
        <h1 className="title">{item?.MovieName}</h1>
        <p className="content">{item?.Id}</p>
        <p className="content">${item?.MovieDesc}</p>
      </section>
    </div>
  );
}
