import React from "react";
import ReactDOM from "react-dom/client";

//JSX =>Babel transpiles to React.createElement => React Element(JS Object) => HTML Element (on render)

const JsxHeading = () => <h1>This is a jsx heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1 className="h1">Namaste React</h1>;

console.log(JsxHeading);
const number = 100;
//React Functional Component
//Component Composition

//CrossScript attack
const data = abc.getData();
// JSX will take care of any cross script attack by santisizing the code
const HeadingComponent = () => {
  return (
    <div id="container">
      <JsxHeading />
      {data}
      {title}
      {number}
      <h1 className="heading">This is a jsx elemnt</h1>
    </div>
  );
};

console.log(HeadingComponent);
root.render(<HeadingComponent />);
