import {
    createBrowserRouter
} from "react-router-dom";

import LayoutMain from "../Layouts/MainLayOut/LayoutMain";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import Teams from "../Pages/Teams/Teams";
import Home from "../Pages/Home/Home/home";
import ServicesPage from "../Pages/ServicesPage/servicesPage";
import OurProjectPage from "../Pages/OurProjectPage/OurProjectPage.jsx";
import OurTeamPage from "../Pages/OurTeamPage/OurTeamPage.jsx";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain></LayoutMain> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'servicesPage',
                element: <ServicesPage></ServicesPage>
            },
            {
                path:'ourTeamsPage',
                element: <OurTeamPage></OurTeamPage>
            },
            {
                path: 'ourProjectsPage',
                element:<OurProjectPage></OurProjectPage>
            },
            {
                path: 'contactUsPage',
                element:<ContactUsPage></ContactUsPage>

            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'ourProject',
                element:<Projects></Projects>
            },
            {
                path: 'ourTeam',
                element:<Teams></Teams>
            }
        ]
    },
]);

export default routes;