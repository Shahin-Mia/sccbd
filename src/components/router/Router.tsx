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
import DashboardLayout from "../admin/layout/DashboardLayout";
import DestinationForm from "../admin/destination/DestinationForm";
import DestinationList from "../admin/destination/DestinationList";
import UserList from "../admin/users/UserList";
import UserCreate from "../admin/users/UserCreate";
import ServiceList from "../admin/service/ServiceList";
import ServiceCreate from "../admin/service/ServiceCreate";
import Members from "../admin/team/Members";
import AddMember from "../admin/team/AddMember";
import PeopleMessages from "../admin/messages/PeopleMessages";
import PeopleMessageAdd from "../admin/messages/PeopleMessageAdd";
import Events from "../admin/event/Events";
import EventAdd from "../admin/event/EventAdd";
import Partners from "../admin/partner/Partners";
import AddPartners from "../admin/partner/AddPartners";
import CarouselManager from "../admin/carousel/CarouselManager";
import GalleryManager from "../admin/gallery/GalleryManager";

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
                path: 'about',
                element: <About />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'study-destination',
                element: <StudyDestination />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'application-page',
                element: <ApplyPage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "our-team",
                element: <Team />
            }
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "destination/add",
                element: <DestinationForm />
            },
            {
                path: "destination/list",
                element: <DestinationList />
            },
            {
                path: "user/list",
                element: <UserList />
            },
            {
                path: "user/add",
                element: <UserCreate />
            },
            {
                path: "service/list",
                element: <ServiceList />
            },
            {
                path: "service/add",
                element: <ServiceCreate />
            },
            {
                path: "member/list",
                element: <Members />
            },
            {
                path: "member/add",
                element: <AddMember />
            },
            {
                path: "message/list",
                element: <PeopleMessages />
            },
            {
                path: "message/add",
                element: <PeopleMessageAdd />
            },
            {
                path: "event/list",
                element: <Events />
            },
            {
                path: "event/add",
                element: <EventAdd />
            },
            {
                path: "partner/list",
                element: <Partners />
            },
            {
                path: "partner/add",
                element: <AddPartners />
            },
            {
                path: "carousel",
                element: <CarouselManager />
            },
            {
                path: "gallery",
                element: <GalleryManager />
            },
        ]
    }
])