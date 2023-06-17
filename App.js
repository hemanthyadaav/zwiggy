import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = function () {
  return (
    <div>
      <h1>This is h1 tag</h1>
      <h2>This is h2 tag</h2>
      <h3>This is h3 tag</h3>
      {console.log("Hello World")}
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
