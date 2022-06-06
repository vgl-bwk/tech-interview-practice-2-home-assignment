import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  return (
    <body>
      <h1>Counter tool!!</h1>
      <div class="container">
        <h3>
          Counter value:<span id="counterDisplay">{state}</span>
        </h3>
        <button id="countUpBtn" onClick={() => setState(state + 1)}>
          +
        </button>
        <button id="countDwnBtn" onClick={() => setState(state - 1)}>
          -
        </button>
      </div>
      <script src="counter.js" async defer></script>
    </body>
  );
}

export default App;
