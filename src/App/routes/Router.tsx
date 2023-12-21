import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import List from "../pages/List";
import App from "../../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
    },
    {
        path: "/list",
        element: <List />
    }
]);