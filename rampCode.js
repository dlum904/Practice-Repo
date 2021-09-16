import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Here's my Code Sample with different inputs</h1>
      <SampleComp />
      <SampleComp input={[1, 2, 3, 4, 5]} />
      <SampleComp input={"This is a string, not a falsey value or an array"} />
    </div>
  );
}

function SampleComp({ input }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // every 1 second, update the date
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // if falsy value, return live-updating date and time in a div.  Use pretty-format.  Use native JS Date object.
  if (!input) {
    return <div>{date.toLocaleString()}</div>;
  }

  // if an array, return a list of divs.  each containing 1 element of the array
  else if (Array.isArray(input)) {
    return (
      <ul>
        {input.map((el, idx) => {
          return (
            <li key={idx}>
              <div>{el}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  //if anything else, return the value of the prop in a div
  else return <div>{input}</div>;
}
