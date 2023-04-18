import { Outlet } from "react-router-dom";
import Post from '../pages/post';
import About from '../pages/about';
import NoMatch from '../pages/noMatch';

const routerConfig = [
    {
        path: "/",
        element: <Outlet />,
    },
    {
        path: "/post",
        element: <Post />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "*",
        element: <NoMatch />,
    }]


export default routerConfig