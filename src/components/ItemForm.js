import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {

  const [addItem, setAdd] = useState("")
  const [itemCategory, setCategory] = useState("Produce")

  function handleAdd(event)  {
    setAdd(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event)  {
    event.preventDefault();
    const newItem = {
      id: uuid(), 
      name: addItem,
      category: itemCategory,
    };
    console.log(newItem)
    onItemFormSubmit(newItem)
    setAdd("")
    setCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={addItem} onChange={handleAdd}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
