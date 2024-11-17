import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>
    },
    {
        path: "/login",
        element: <h2>This is Login</h2>
    },
    {
        path: "/news",
        element: <h2>This is News</h2>
    },
    {
        path: "/destination",
        element: <h2>This is Destination</h2>
    },
    {
        path: "/blog",
        element: <h2>This is Blog</h2>
    },
    {
        path: "/contact",
        element: <h2>This is Contact</h2>
    }
])
export default router;