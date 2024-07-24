import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.tsx';
import About from './components/about/About.tsx';
import Services from './components/services/Services.tsx';
import StudyDestination from './components/study-destination/StudyDestination.tsx';
import Contact from './components/contact/Contact.tsx';
import Blog from './components/blog/Blog.tsx';
import Gallery from './components/gallery/Gallery.tsx';
import ApplyPage from './components/apply-page/ApplyPage.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
