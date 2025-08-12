import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactUsPage from "../pages/contactUsPage";
import SkillsPage from "../pages/SkillsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            },
            {
                path: '/contact',
                element: <ContactUsPage />
            },
            {
                path: '/skills',
                element: <SkillsPage />
            },
        ]
    }
])