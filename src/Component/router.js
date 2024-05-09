import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SingleMoviePage from "../Pages/SingleMoviePage";
import GenrePage from "../Pages/GenrePage";
import SearchPage from "../Pages/SearchPage";
import ContactPage from "../Pages/ContactPage";
import AboutUsPage from "../Pages/AboutUsPage";
import ErrorPage from "../Pages/ErrorPage";

export default function Router(){
   const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/m/:name",
            element: <SingleMoviePage />,
        },
        {
            path:"/genre/:genre_id",
            element: <GenrePage />,
        },
        {
            path: "/search",
            element: <SearchPage />
        },
        {
            path: "/contact-us",
            element: <ContactPage />,
        },
        {
            path: "/about-us",
            element: <AboutUsPage />,
        },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ]);
    return <RouterProvider router={router} />;
} 