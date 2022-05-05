import React, { useState } from "react";

//rface tab
const Count = () => {
  let [count, setCount] = useState(0); // [v,setV]
  const [inputText, setInputText] = useState("");
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <div>{inputText}</div>
      <input type="text" onChange={handleChange} />
      <div>{count}</div>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button
        onClick={() => {
          count = 200;
          console.log(count);
        }}
      >
        test
      </button>
    </div>
  );
};

export default Count;
