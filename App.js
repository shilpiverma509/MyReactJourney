import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "h1-heading" }, "My react app");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1>This is a jsx heading</h1>;
root.render(jsxHeading);
console.log(jsxHeading);

const htmlheading = document.createElement("h1");
htmlheading.innerHTML = "This is a html heading";
console.log(htmlheading);
