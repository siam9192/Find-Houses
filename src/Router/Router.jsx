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
import Profile from "../Pages/Dashboard/Profile/Profile";
import Users from "../Pages/Dashboard/Users/Users";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import ClientProperties from "../Pages/Dashboard/ClientProperties/ClientProperties";

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
        element:<PrivateRoutes><DashboardOutLet></DashboardOutLet></PrivateRoutes>,
        children:[
{
    path:'/dashboard',
    element:<Dashboard></Dashboard>
},
{
    path:'/dashboard/profile',
    element:<Profile></Profile>
},
{
    path:'/dashboard/users',
    element:<Users></Users>
}
,
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
    path:'/dashboard/client-properties',
    element:<ClientProperties></ClientProperties>
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
    },
    {
        path:'/signup',
        element:<SignUpPage></SignUpPage>
    },
    {
        path:'/login',
        element:<LoginPage></LoginPage>
    }
])


export default Router;
