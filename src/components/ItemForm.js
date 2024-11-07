import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [select, setSelect] = useState("Produce");
  const [firstInput, setFirstInput] = useState("");

  function handleSelect(e) {
    setSelect(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: firstInput,
      category: select,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select name="category" value={select} onChange={handleSelect}>
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
