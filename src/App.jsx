import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import Home from './home.jsx'
import Spots from './spots.jsx'
import SpotCreate from './spotcreate.jsx'
import SpotDetail from './spotdetail.jsx'
import Delete from "./Delete.jsx";
import SpotEdit from "./Edit.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/spots',
                element: <Spots/>,
            },
            {
                path: '/spots/create',
                element: <SpotCreate/>,
            },
            {
                path: '/spots/:id',
                element: <SpotDetail/>,
            },
            {
                path: '/delete/:id',
                element: <Delete/>,
            },
            {
                path: '/edit/:id',
                element: <SpotEdit/>,
            },
        ]
    }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
