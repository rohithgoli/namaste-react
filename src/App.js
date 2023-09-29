import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Contact from './components/Contact';
// import Grocery from './components/Grocery';
import RestuarantMenu from './components/RestuarantMenu';
import Error from './components/Error';

const Grocery = lazy(() => import("./components/Grocery"))

const About = lazy(() => import("./components/About"))

const App = () => {
    return(
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>        
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/restuarant/:resId',
                element: <RestuarantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);