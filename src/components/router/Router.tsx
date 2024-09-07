import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../client/home/Home";
import About from "../client/about/About";
import Services from "../client/services/Services";
import StudyDestination from "../client/study-destination/StudyDestination";
import Contact from "../client/contact/Contact";
import Blog from "../client/blog/Blog";
import Gallery from "../client/gallery/Gallery";
import ApplyPage from "../client/apply-page/ApplyPage";
import Login from "../client/login/Login";
import HomeLayout from "../client/layout/HomeLayout";
import Team from "../client/team/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/study-destination',
                element: <StudyDestination />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/application-page',
                element: <ApplyPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/our-team",
                element: <Team />
            }
        ],
    },
])