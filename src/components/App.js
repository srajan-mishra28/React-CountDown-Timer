import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  }, [seconds]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => {
              let inpVal = event.target.value;
              if (event.keyCode === 13) {
                if (isNaN(inpVal)) {
                  setSeconds(0);
                } else {
                  setSeconds(Math.floor(inpVal));
                }
              }
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{seconds}</div>
    </div>
  );
};

export default App;
