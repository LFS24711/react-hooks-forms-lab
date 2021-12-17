import React from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ itemName, itemCategory, itemCatCtrl, itemNameCtrl, onItemFormSubmit }) {

    function createNewItem(){
    const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
    return newItem;
  }

  return (
    <form onSubmit={(event) => onItemFormSubmit(event, createNewItem())} className="NewItem">
      <label>
        Name:
        <input type="text" onChange={(event) => itemNameCtrl(event)} value={itemName} name="name" />
      </label>

      <label>
        Category:
        <select onChange={(event) => itemCatCtrl(event)} value={itemCategory} selected="Produce" name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
