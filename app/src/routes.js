import React from "react";
import { useRoutes, BrowserRouter  as Router } from "react-router-dom";
import { Home } from './templates/Home/Home';
import { Cards } from './templates/Cards/Cards';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/cards", element: <Cards /> },
      ]);
      return routes;
}

const AppWrapper = () => {
    return (
       <Router>
           <AppRoutes/>
       </Router>
    )
}

export default AppWrapper;

