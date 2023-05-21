import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import AllToyViewDetails from "../Pages/AllToyViewDetails/AllToyViewDetails";
import PrivateRoute from "./PrivateRoute";
import SubCategoryDetails from "../Pages/SubCategoryDetails/SubCategoryDetails";
// import PrivateRoute from './/Routes/PrivateRoute'




const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>,
                
            },
            {
                path: 'subCategoryDetails/:id',
                element: <PrivateRoute><SubCategoryDetails></SubCategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kids-car-zone-server.vercel.app/subcategory/${params.id}`)
            },
            {
                path: 'alltoydetails/:id',
                element: <PrivateRoute><AllToyViewDetails></AllToyViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kids-car-zone-server.vercel.app/toys/${params.id}`)

            },
            {
                path: 'addtoys',
                element: <AddToys></AddToys>
            },
            {
                path: 'updatetoys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`https://kids-car-zone-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },

        ]
    },
]);

export default router;