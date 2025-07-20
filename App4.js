import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// const Body = () => {
//     let count = 0;

//     console.log("Body rendered");

//     useEffect(() => {
//         console.log("effect redered");
//     });

//     const incrementCount = () => {
//         count += 1;
//         console.log(count);
//     }

//     return (
//         <button onClick = {incrementCount}>{count}</button>
//     );
// }

const Body = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  console.log("Body rendered");

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };
  const decrementCount2 = () => {
    setCount2(count2 - 1);
  };
  const multiplyCount = () => {
    setCount3(count1 * count2);
  };

  return (
    <div className="Body-container">
      <h1>Welcome</h1>
      <div className="button-container">
        <button className="btn-1" onClick={incrementCount1}>{count1}</button>
        <button className="btn-2" onClick={decrementCount2}>{count2}</button>
        <button className="btn-3" onClick={multiplyCount}>{count3}</button>
      </div>
      <h2>Welcome</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
