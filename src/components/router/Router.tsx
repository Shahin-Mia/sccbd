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
import HomeLayout from "../client/layout/HomeLayout";
import Team from "../client/team/Team";
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
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "../client/login/ProtectedLogin";
import ProtectedGreeting from "../client/greetingPage/ProtectedGreeting";
import ActivationPage from "../client/activation/ActivationPage";
import ProtectedRegister from "../client/register/ProtectedRegister";
import ProtectedResetForm from "../client/resetform/ProtectedResetForm";
import EmailForm from "../client/forgot/EmailForm";
import DestinationDetails from "../client/study-destination/DestinationDetails";
import { destinaionLoader, getDestinationById } from "../../lib/Helpers";
import ErrorPage from "../client/ErrorPage";
import Dashboard from "../admin/layout/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        loader: destinaionLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: 'about',
                element: <About />,
                errorElement: <ErrorPage />
            },
            {
                path: 'services',
                element: <Services />,
                errorElement: <ErrorPage />
            },
            {
                path: 'study-destination',
                element: <StudyDestination />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: ":destination/:id",
                        element: <DestinationDetails />,
                        errorElement: <ErrorPage />,
                        loader: getDestinationById
                    }
                ]
            },
            {
                path: 'contact',
                element: <Contact />,
                errorElement: <ErrorPage />
            },
            {
                path: 'blog',
                element: <Blog />,
                errorElement: <ErrorPage />
            },
            {
                path: 'gallery',
                element: <Gallery />,
                errorElement: <ErrorPage />
            },
            {
                path: 'application-page',
                element: <ApplyPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "login",
                element: <ProtectedLogin />,
                errorElement: <ErrorPage />
            },
            {
                path: "register",
                element: <ProtectedRegister />,
                errorElement: <ErrorPage />
            },
            {
                path: "greeting",
                element: <ProtectedGreeting />,
                errorElement: <ErrorPage />
            },
            {
                path: "our-team",
                element: <Team />,
                errorElement: <ErrorPage />
            },
            {
                path: "account-activation",
                element: <ActivationPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "forgot-password",
                element: <EmailForm />,
                errorElement: <ErrorPage />
            },
            {
                path: "reset-password",
                element: <ProtectedResetForm />,
                errorElement: <ErrorPage />
            },

        ],
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
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