import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Delete from "@material-ui/icons/Delete";
import { EditRounded } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import "./ListItem.css";

function ListItem(props) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [strike, setStrike] = useState("");
  const [updatedItem, setUpdatedItem] = useState(props.todoItem);

  const editItem = (e) => {
    setUpdatedItem(e.target.value);
  };

  const markComplete = () => {
    if (disabled) {
      if (strike) {
        setStrike("");
      } else {
        setStrike("strike");
      }
    }
  };

  const deleteItem = () => {
    console.log(props.id);
    dispatch({ type: "DELETE_ITEM", payload: props.id });
  };

  const editBtn = (e) => {
    // console.log(props.id);
    console.log(e);
    if (disabled) {
      setDisabled(false);
      setStrike("");
    } else {
      dispatch({ type: "EDIT_ITEM", payload: [updatedItem, props.id] });
      setDisabled(true);
    }
  };

  return (
    <div key={props.id} className="listItem">
      <TextField
        className={`listItem__input ${strike}`}
        type="text"
        multiline
        value={updatedItem}
        onChange={editItem}
        onClick={markComplete}
        disabled={disabled}
      />
      <EditRounded
        color="primary"
        className="listItem__edit"
        onClick={editBtn}
      />
      <Delete
        style={{ color: "#eb3434" }}
        className="listItem__delete"
        onClick={deleteItem}
      />
    </div>
  );
}

export default ListItem;
