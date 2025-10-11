import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemService";
import { item } from "../types/Item";
import { Link } from "react-router-dom";


export default function ItemsAdmin() {
  const [items, setItems] = useState<item[]>([]);
  const [itemUpdate, setItemUpdate] = useState<item>({
      Id:'',
      MovieName:'',
      MovieDesc: '',
      MovieImage:''
  });

  const handleChange = (event: any) => {
    setItemUpdate({ ...itemUpdate, [event.target.name]: event.target.value });
  };

  const getItems = () => {
    ItemService.getAll()
      .then((response: any) => {
        setItems(response.data);
        console.log(items);
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message);
      });
  };

  const deleteItems = (id: string) => {
    ItemService.remove(id)
      .then((response: any) => {
        alert(response.data);
        getItems();
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message);
      });
  };

  const updateItem = (InItem: item) => {
    setItemUpdate(InItem);
  }
  const resetForm = () => {
    setItemUpdate({
      Id:'',
      MovieName:'',
      MovieDesc: '',
      MovieImage:''
    })
  }
  const saveItem = () => {
    const Item = { ...itemUpdate };
    ItemService.put(Item)
      .then((response: any) => {
        alert(response.data);
        getItems();
      })
      .catch((e: Error) => {
        console.log(e);
        alert(e.message);
      });
  }
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="container is-fluid">
        <section className="section">
          <h1 className="title">Item Management</h1>
        </section>

        <section className="section">
          <h2 className="subtitle">Add or Update Item</h2>
          <form>
            <div className="card">
              <div className="card-content">
                <p>Item ID:</p>
                <input
                  className="input"
                  type="text"
                  name="id"
                  value={itemUpdate.Id}
                  onChange={handleChange}
                />

                <p>Item Name:</p>
                <input
                  className="input"
                  type="text"
                  name="movieName"
                  value={itemUpdate.MovieName}
                  onChange={handleChange}
                />

                <p>Item Price:</p>
                <input
                  className="input"
                  type="text"
                  name="movieDesc"
                  value={itemUpdate.MovieDesc}
                  onChange={handleChange}
                />

                <button
                  className="button is-rounded is-danger"
                  onClick={() => saveItem()}
                >
                  Add or Update Item
                </button>

                <button className="button is-rounded is-success" onClick={() => {resetForm()}}>
                  Reset Form
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className="columns is-multiline">
        {items.map((item, index) => (
          <div className="column" key={index}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-header-title">{item.MovieName}</h2>
              </div>

              <div className="card-content">
                <p className="content">{item.Id}</p>
                <p className="content">${item.MovieDesc}</p>
              </div>

              <div className="card-footer">
                <Link className="button is-rounded is-danger" to={`/items/${item.Id}`}>View Item</Link>
                  <button className="button is-rounded is-info" onClick={() => { deleteItems(item.Id) }}>Delete Item</button>
                  <button className="button is-rounded is-success" onClick={() => { updateItem(item) }}>change Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    )
}
