import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(15);

  const addValue = () => {
    if (count === 20) {
      alert("Limit reached");
    } else {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count <= 0) {
      alert("Limit reached");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
