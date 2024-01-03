import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Routes from "../Routes/Routes";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Properties from "../Pages/Properties/Properties";
import DashboardOutLet from "../Pages/Dashboard/DashboardOutLet";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProperties from "../Pages/Dashboard/MyProperties/MyProperties";
import FavoritedProperties from "../Pages/Dashboard/FavoritedProperties/FavoritedProperties";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import ChangePassword from "../Pages/Dashboard/ChangePassword/ChangePassword";
import Requests from "../Pages/Dashboard/Requests/Requests";
import RequestDetails from "../Pages/Dashboard/Requests/RequestDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Routes></Routes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
    ,{
        path:'/property-details/:id',
        element:<PropertyDetails></PropertyDetails>
    },
    {
        path:'/properties',
        element:<Properties></Properties>
    },
    {
        path:'/dashboard',
        element:<DashboardOutLet></DashboardOutLet>,
        children:[
{
    path:'/dashboard',
    element:<Dashboard></Dashboard>
},
{
    path:'/dashboard/my-properties',
    element:<MyProperties></MyProperties>
},
{
    path:'/dashboard/favourited-properties',
    element:<FavoritedProperties></FavoritedProperties>
},
{
    path:'/dashboard/add-property',
    element:<AddProperty></AddProperty>
},
{
    path:'/dashboard/change-password',
    element:<ChangePassword></ChangePassword>
    
},
{
    path:'/dashboard/property-requests',
    element:<Requests></Requests>
    
}
        ]
    },
    {
        path:'/dashboard/property-requests/details/:id',
        element:<RequestDetails></RequestDetails>
    }
])


export default Router;
