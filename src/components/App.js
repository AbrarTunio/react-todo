import "./styles/style.css";
import { useState } from "react";

export default function App() {
  const [inp, setInput] = useState("");
  const [item, updateItem] = useState([]);

  function updateList() {
    updateItem([...item, inp]);
    console.log(item);
  }

  function deleteItem(id) {
    item.splice(id, 1);
    updateItem([...item]);
  }

  return (
    <div className="container text-center">
      <div className="row bg-warning">
        <h1 className="h1 ">To Do List</h1>
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-md-4">
          <input
            className=" form-control"
            type="text"
            placeholder="Insert the task"
            value={inp}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <button
          className="col-md-2 rounded btn btn-secondary p-0"
          onClick={() => updateList()}
        >
          Add
        </button>
      </div>
      <div className="row py-5 rounded border border-warning justify-content-around">
        <ul className="col-md-7 rounded text-start width">
          {item.map((i, idx) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              id={idx}
              key={idx}
            >
              {i}
              <button
                className="btn mx-5 btn-danger"
                onClick={(e) => deleteItem(e.target.parentElement.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
