import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item"


function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSelectedName] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCat] = useState("Produce");


  function handleSubmit(event, newItem){
    event.preventDefault();
    console.log(newItem);
    addItem(newItem);
  }

  function controlItemName(event) {
    console.log("Name: " + event.target.value)
    console.log("newItemName: " + itemName)
    setItemName(event.target.value);
  };

  function controlItemCat(event) {
    console.log("newItemCategory: " + itemCategory)
    console.log("Category: "+ event.target.value);
    setItemCat(event.target.value)
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function onSearchChange(event) {
    setSelectedName(event.target.value);
  };

  const filteredCat = items.filter((item) => {
    if (selectedCategory === "All")
      return true;
    return item.category === selectedCategory;
  });

  const filteredNames = filteredCat.filter((item) => {
    if (searchTerm === "")
      return true;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const itemsToDisplay = filteredNames;

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} itemCatCtrl={controlItemCat} itemNameCtrl={controlItemName}
        itemName={itemName} itemCategory={itemCategory}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}
        search={searchTerm}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
