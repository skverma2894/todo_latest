import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Input() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    console.log(newItem);
    const item = {
      todoItem: newItem,
      id: Math.floor(Math.random() * 100),
      completed: false,
    };
    dispatch({ type: "ADD_ITEM", payload: item });
    setNewItem("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Input;
