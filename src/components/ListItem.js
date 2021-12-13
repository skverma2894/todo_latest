import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ListItem(props) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [updatedItem, setUpdatedItem] = useState(props.todoItem);

  const editItem = (e) => {
    setUpdatedItem(e.target.value);
  };

  const deleteItem = () => {
    console.log(props.id);
    dispatch({ type: "DELETE_ITEM", payload: props.id });
  };

  const editBtn = (e) => {
    // console.log(props.id);
    console.log(e);
    if (disabled) setDisabled(false);
    else {
      dispatch({ type: "EDIT_ITEM", payload: [updatedItem, props.id] });
      setDisabled(true);
    }
  };

  return (
    <div key={props.id}>
      <input
        type="text"
        value={updatedItem}
        onChange={editItem}
        disabled={disabled}
      />

      <button onClick={editBtn}>edit</button>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
}

export default ListItem;
