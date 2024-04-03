import { createBrowserRouter } from "react-router-dom";

import LayoutMain from "../Layouts/MainLayOut/LayoutMain.jsx";
import Services from "../Pages/Services/Services.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import Teams from "../Pages/Teams/Teams.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import ServicesPage from "../Pages/ServicesPage/servicesPage.jsx";
import OurProjectPage from "../Pages/OurProjectPage/OurProjectPage.jsx";
import OurTeamPage from "../Pages/OurTeamPage/OurTeamPage.jsx";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "servicesPage",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "ourTeamsPage",
        element: <OurTeamPage></OurTeamPage>,
      },
      {
        path: "ourProjectsPage",
        element: <OurProjectPage></OurProjectPage>,
      },
      {
        path: "contactUsPage",
        element: <ContactUsPage></ContactUsPage>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "ourProject",
        element: <Projects></Projects>,
      },
      {
        path: "ourTeam",
        element: <Teams></Teams>,
      },
    ],
  },
]);

export default routes;
