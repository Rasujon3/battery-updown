import React, { useState } from "react";

const Battery = () => {
  const [count, setCount] = useState(100);
  const downCount = () => {
    if (count > 0) {
      const newCount = count - 10;
      setCount(newCount);
    } else {
      return;
    }
  };
  const upCount = () => {
    if (count < 100) {
      const newCount = count + 10;
      setCount(newCount);
    } else {
      return;
    }
  };
  return (
    <div>
      <h1>Battery {count} %</h1>
      <button onClick={downCount}>Battery Down</button>
      <button onClick={upCount}>Battery Up</button>
    </div>
  );
};

export default Battery;
