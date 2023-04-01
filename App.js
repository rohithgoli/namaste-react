import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement - JS Object => HTML element (when rendered)

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
);

console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

console.log(jsxHeading);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(jsxHeading);
