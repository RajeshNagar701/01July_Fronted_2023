import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Details from './Pages/Details';
import Feature from './Pages/Feature';
import Price from './Pages/Price';
import Quate from './Pages/Quate';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Blog from './Pages/Blog';


function App() {
  return (
    <BrowserRouter>
       <Routes>
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
           
            
       </Routes>
    </BrowserRouter>
  );
}

export default App;
