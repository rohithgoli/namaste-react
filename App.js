import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement(
//     "h1", 
//     {
//         id: "heading",
//         xyz: "abc"
//     }, 
//     "Hello World from React"
// );

// console.log(heading);


// root.render(heading);


const parentElement = React.createElement("div", {id: "parent1"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Teacher: Akshay Saini"),
        React.createElement("h1", {}, "Learner: Rohith Goli")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Namaste React by Akshay Saini"),
        React.createElement("h1", {}, "Rohith Goli")
    ])
]);

root.render(parentElement);

