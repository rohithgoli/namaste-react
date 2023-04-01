import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = (
    <h1 className="head">
        Namaste React
    </h1>
);

// React Functional Component

const Title = () => {
    return (
        <h1>This is heading</h1>
    )
}

// Component Composition

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1>Namaste React from Functional Component</h1>
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<HeadingComponent/>);
