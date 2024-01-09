import React from 'react';
import Navbar from '../Components/Reuse/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Routes = () => {
    // All theme
    // https://preview.themeforest.net/item/find-houses-real-estate-html-template/full_screen_preview/21745328?_ga=2.89565465.364059634.1702661718-2137286590.1698674286&_gac=1.224510824.1700753928.CjwKCAiAjfyqBhAsEiwA-UdzJO9rIIgN1ECYscqTl0YREXHLnrHInxOBt0fQsMHnlCaP0144bUJayRoCYh8QAvD_BwE
    // main theme 
    // https://code-theme.com/html/findhouses/index.
    // https://preview.themeforest.net/item/tairo-multipurpose-nuxt-tailwind-css-dashboard-system/full_screen_preview/45383013?_ga=2.120179528.1361948986.1704718682-2137286590.1698674286
    // http://magento2.magentech.com/themes/sm_ego/pub/default
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Routes;
