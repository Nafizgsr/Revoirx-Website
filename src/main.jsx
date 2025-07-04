import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from "./components/Home-page/Home";
import AboutUs from './components/AboutUs-page/AboutUs'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Service from './components/Service-page/Service';
import Blogs from './components/Blogs-page/Blogs';
import BlogDetails from './components/Blog-Details-page/BlogDetails';
import ContactUs from './components/Contact-Us-page/ContactUs';
import CaseStudies from './components/Case-Studies-page/CaseStudies';
import Changelog from './components/Change-Log-page/Changelog';
import Career from './components/Career-page/Career';
import Error404Page from './components/Error-404-page/Error404Page';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error404Page/>
  },{
    path:'/about-us',
    element:<AboutUs/>,
    errorElement:<Error404Page/>
  },{
    path:'/single-service',
    element:<Service/>,
    errorElement:<Error404Page/>
  },{
    path:'/blogs',
    element:<Blogs/>,
    errorElement:<Error404Page/>
  },{
    path:'/blog-details',
    element:<BlogDetails/>,
    errorElement:<Error404Page/>
  },{
    path:'/blog-details',
    element:<BlogDetails/>,
    errorElement:<Error404Page/>
  },{
    path:'/contact-us',
    element:<ContactUs/>,
    errorElement:<Error404Page/>
  },{
    path:'/case-studies',
    element:<CaseStudies/>,
    errorElement:<Error404Page/>
  },{
    path:'/changelog',
    element:<Changelog/>,
    errorElement:<Error404Page/>
  },{
    path:'/career',
    element:<Career/>,
    errorElement:<Error404Page/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
