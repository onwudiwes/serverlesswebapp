import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemService";
import { item } from "../types/Item";
import { Link } from "react-router-dom";
import ItemsAdmin from "./ItemAdmin";

export default function Items() {
  const [items, setItems] = useState<item[]>([]);

    const getItems = () => {
        ItemService.getAll()
              .then((response: any) => {
                      setItems(response.data);
                              console.log(response.data);
                                    })
                                          .catch((e: Error) => {
                                                  console.log(e);
                                                          alert(e.message);
                                                                });
                                                                  };

                                                                    useEffect(() => {
                                                                        getItems();
                                                                          }, []);

                                                                            return (
                                                                                <div className="container is-fluid">
                                                                                      <section className="section">
                                                                                              <h1 className="title">Item Management</h1>
                                                                                                    </section>

                                                                                                          <div className="columns is-multiline">
                                                                                                                  {items.map((item, index) => (
                                                                                                                            <div className="column" key={index}>
                                                                                                                                        <div className="card">
                                                                                                                                                      <div className="card-header">
                                                                                                                                                                      <h2 className="card-header-title">{item.MovieName}</h2>
                                                                                                                                                                                    </div>

                                                                                                                                                                                                  <div className="card-content">
                                                                                                                                                                                                                  <p className="content">{item.Id}</p>
                                                                                                                                                                                                                                  <img src={item.MovieImage}></img>
                                                                                                                                                                                                                                                  <p className="content">${item.MovieDesc}</p>
                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                              <div className="card-footer">
                                                                                                                                                                                                                                                                                              <Link
                                                                                                                                                                                                                                                                                                                className="button is-rounded is-danger"
                                                                                                                                                                                                                                                                                                                                  to={`/items/${item.Id}`}
                                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                                                    View Item
                                                                                                                                                                                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                            