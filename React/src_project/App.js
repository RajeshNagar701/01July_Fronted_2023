import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header1 from './Component/Header1';
import Index from './Pages/Index';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<><Header1/><Index/><Footer/></>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
