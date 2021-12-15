import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import "./Input.css";

function InputItem() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    if (newItem !== "") {
      console.log(newItem);
      const item = {
        todoItem: newItem,
        id: Math.floor(Math.random() * 100),
        completed: false,
      };
      dispatch({ type: "ADD_ITEM", payload: item });
      setNewItem("");
    } else alert("Enter a task");
  };
  return (
    <div class="inputItem">
      <form onSubmit={addItem} class="inputItem__form">
        <TextField
          id="standard-basic"
          placeholder="Add todo item..."
          class="inputItem__textfield"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <Add onClick={addItem} class="inputItem__btn" />
      </form>
    </div>
  );
}

export default InputItem;
