import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/AuthRoute"
import Seller from "../page/Seller";
import Home from "../page/Home";
import User from "../page/User";
import BookDetail from "../page/BookDetail";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/',
        element: <AuthRoute> <Layout /></AuthRoute>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'seller',
                element: <Seller />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'bookDetail',
                element: <BookDetail />
            },
        ]
    },
    {
        path: '/article',
        element: <AuthRoute> <Article /></AuthRoute>
    }
])

export default router;