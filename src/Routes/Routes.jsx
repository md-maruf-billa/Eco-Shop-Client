import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <>Error</>,
        children: [
            {
                path:"/",
                element:<Home/>
            }
        ]
    }

])

export default Routes;