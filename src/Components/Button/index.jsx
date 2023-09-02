import React from "react";
import { useState } from "react";
import "./styles.css";

export const Button = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {setCount(count + 1);};
  const handleDecrement = () => {setCount(count - 1);};

  return (
    <div>
      <h2 className="text-2xl my-4 capitalize">People that will visit us: {count}</h2>
      <div>
        {/* Sometimes styles repeat then use css classes */}
        <button onClick={handleIncrement}   className="btn btn-i">Increment</button>
        <button onClick={() => setCount(0)} className="btn btn-r">Reset</button>
        <button onClick={handleDecrement}   className="btn btn-d">Decrement</button>
      </div>
    </div>
  );
};
