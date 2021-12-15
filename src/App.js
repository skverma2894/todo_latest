import "./App.css";
import InputItem from "./components/InputItem";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <InputItem />
      <List />
    </div>
  );
}

export default App;
