import React, { useState } from "react";
import Test from "./Test";

const Memocount = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);
  const incerment = () => {
    setData(5);
    setCount(count + 1);
  };
  return (
    <div>
      <Test data={data} />
      <button onClick={() => incerment()}>+ {count} Count</button>
    </div>
  );
};

export default Memocount;
