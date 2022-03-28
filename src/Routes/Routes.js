import Homepage from '../pages/Homepage/Homepage'
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import NotFound from "../pages/NotFound/NotFound";
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

 const AllRoutes=[
    {path:"/",element:<Homepage/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<Contact/>},
    {path:"/productDetail/:id",element:<ProductDetail/>},
    {path:"*",element:<NotFound/>}
]
export default AllRoutes;