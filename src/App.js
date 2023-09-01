import { useState } from "react";

export default function App() {
  const [inp, setInput] = useState("");
  const [items, setItem] = useState([]);

  function updateList() {
    // alert(inp)
    setItem([...items, inp]);
  }

  function deleteItem(id) {
    items.splice(id, 1);
    setItem([...items]);
  }

  return (
    <div className="container">
      <div className="row heading bg-warning">
        <h1 className="text-center"> To Do list </h1>
      </div>

      <div className="row inputs my-5 justify-content-center">
        <div className="col-md-4">
          <input
            className=" form-control"
            type="text"
            value={inp}
            placeholder="Insert your task"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="col-md-2 rounded btn btn-secondary p-0"
          onClick={() => updateList()}
        >
          {" "}
          Add{" "}
        </button>
      </div>

      <div className="row output py-5 rounded border border-warning justify-content-around">
        <ul className="col-md-7 rounded text-start width">
          {items.map((item, idx) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              id={idx}
              key={`${item}-${idx}`}
            >
              {item}
              <button
                className="btn mx-5 btn-danger"
                onClick={(e) => deleteItem(e.target.parentElement.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
