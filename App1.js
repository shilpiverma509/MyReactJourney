import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading-h1" },
  "Hello world from react!"
);

const parent = React.createElement(
  "div",
  { id: "parent", className: "parent-div" },
  [
    React.createElement("div", { id: "child1", className: "child-div1" }, [
      React.createElement("h1", { id: "h1" }, "I am heading-h1"),
      React.createElement("h2", { id: "h2" }, "I am heading-h2"),
    ]),
    React.createElement("div", { id: "child2", className: "child-div2" }, [
      React.createElement("h3", { id: "h3" }, "I am heading-h3"),
      React.createElement("h3", { id: "h3" }, "I am heading-h3"),
    ]),
  ]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent); //converts this heading object into an h1 tag and put in into the dom.
