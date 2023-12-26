import React from "react";
import ReactDOM from "react-dom/client";

//JSX =>Babel transpiles to React.createElement => React Element(JS Object) => HTML Element (on render)

const jsxHeading = () => <h1>This is a jsx heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);

//React Functional Component
//Component Composition
const HeadingComponent = () => {
  <div id="container">
    <jsxHeading />
    <h1 className="heading">This is a jsx elemnt</h1>
  </div>;
  return <h1>this return a react element</h1>;
};

console.log(HeadingComponent);
root.render(<HeadingComponent />);
