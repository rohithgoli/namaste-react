import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const App = () => {
    return(
        <div className="app-container">
            <Header />
            <Body />
            <Footer />
        </div>        
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);