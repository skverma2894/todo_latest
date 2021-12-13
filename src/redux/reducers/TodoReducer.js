const initialState = {
  todos: [
    // {
    //   todoItem: "",
    //   id: 1,
    //   completed: false,
    // },
  ],
};

const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      const { todoItem, id, completed } = payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todoItem: todoItem,
            id: id,
            completed: completed,
          },
        ],
      };
    case "DELETE_ITEM":
      const todos1 = state.todos.filter((item) => item.id !== payload);

      return {
        todos: [...todos1],
      };
    case "EDIT_ITEM":
      console.log(payload[1]);
      const todos2 = state.todos.map((item) => {
        if (item.id === payload[1]) {
          console.log(item.todoItem);
          item.todoItem = payload[0];
        }
        return item;
      });
      console.log(todos2);
      return {
        ...state,
        todos: [...todos2],
      };
    default:
      return state;
  }
};

export default TodoReducer;
