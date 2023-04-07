import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


const App = () => {
    return(
        <div className="app-container">
            <Header />
            <Body />
            <Footer />
        </div>        
    )
}






















const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);
