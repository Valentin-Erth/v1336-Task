import {Navigate, createBrowserRouter} from "react-router-dom";
import {BrigadesPage} from "@/pages/brigades.page.tsx";
import {ChartsPage} from "@/pages/charts.page.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BrigadesPage/>
    },
    {
        path: 'charts',
        element: <ChartsPage/>,
    },
    {
        path: "/404",
        element: <h1>404: PAGE NOT FOUND</h1>
    },
    {
        path: "*",
        element: <Navigate to={"/404"}/>
    },
])