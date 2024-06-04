import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Home/login";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/login', element: <Login />},
    ]);
    return routes;
}

export default AppRoutes;