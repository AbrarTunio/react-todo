import { useState } from "react";
export default function App2() {
  const [value, setValue] = useState("");
  const [welcome, setWelcome] = useState([]);

  function pressSubmit(value) {
    for (let i = 1; i <= value; i++) {
      setWelcome((welcome) => [...welcome, `saying welcome ${i}`]);
    }
  }

  return (
    <div>
      <h1 className="text-center text-danger">Dynamic Event Generation!</h1>;
      <div className="text-center">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => pressSubmit(value)} type="submit">
          Submit
        </button>
        <button onClick={() => setWelcome([])}>Reset</button>
      </div>
      <div className="text-center">
        {welcome.map((msg, idx) => (
          <p key={`${idx}`}>{msg}</p>
        ))}
      </div>
    </div>
  );
}
