import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from './website/Pages/Index';
import About from './website/Pages/About';
import Contact from './website/Pages/Contact';
import Details from './website/Pages/Details';
import Feature from './website/Pages/Feature';
import Price from './website/Pages/Price';
import Quate from './website/Pages/Quate';
import Service from './website/Pages/Service';
import Team from './website/Pages/Team';
import Testimonial from './website/Pages/Testimonial';
import Blog from './website/Pages/Blog';
import Alogin from './admin/Pages/Alogin';
import Adashboard from './admin/Pages/Adashboard';
import Manage_categories from './admin/Pages/Manage_categories';
import Add_categories from './admin/Pages/Add_categories';
import Manage_product from './admin/Pages/Manage_product';
import Add_product from './admin/Pages/Add_product';
import Manage_user from './admin/Pages/Manage_user';
import Manage_contact from './admin/Pages/Manage_contact';
import Signup from './website/Pages/Signup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './website/Pages/Login';


function App() {
  return (
    <BrowserRouter>
        <ToastContainer></ToastContainer>
       <Routes>

            {
              //WEBSITE 
            }
            <Route path="/" element={<><Index/></>}></Route>
            <Route path="/about" element={<><About/></>}></Route>
            <Route path="/contact" element={<><Contact/></>}></Route>
            <Route path="/details" element={<><Details/></>}></Route>
            <Route path="/feature" element={<><Feature/></>}></Route>
            <Route path="/price" element={<><Price/></>}></Route>
            <Route path="/quate" element={<><Quate/></>}></Route>
            <Route path="/service" element={<><Service/></>}></Route>
            <Route path="/team" element={<><Team/></>}></Route>
            <Route path="/testimonial" element={<><Testimonial/></>}></Route>
            <Route path="/blog" element={<><Blog/></>}></Route>
            <Route path="/signup" element={<><Signup/></>}></Route>
            <Route path="/login" element={<><Login/></>}></Route>
           
            
            {
              //admin 
            }
            <Route path="/admin-login" element={<><Alogin/></>}></Route>
            <Route path="/dashboard" element={<><Adashboard/></>}></Route>
            <Route path="/manage_categories" element={<><Manage_categories/></>}></Route>
            <Route path="/add_categories" element={<><Add_categories/></>}></Route>
            <Route path="/manage_product" element={<><Manage_product/></>}></Route>
            <Route path="/add_product" element={<><Add_product/></>}></Route>
            <Route path="/manage_user" element={<><Manage_user/></>}></Route>
            <Route path="/manage_contact" element={<><Manage_contact/></>}></Route>
          
       </Routes>
    </BrowserRouter>
  );
}

export default App;
