import Footer from './Footer/footer';
import Home from './Home/home';
import Nav from './Nav/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductPage/productsPage';
import Tablet from './categories/tablet';
import HeadPhone from './categories/headPhone';
import Phone from './categories/phone';
import Labtop from './categories/labtop';
import Watch from './categories/watch';
import Gaming from './categories/games';
import Camira from './categories/camira';
import Cart from './Cart/cart';
import Contact from './Contact/contact';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<ProductsPage/>}/>
          <Route path='/tablet' element={<Tablet/>}/>
          <Route path='/headphone' element={<HeadPhone/>}/>
          <Route path='/phone' element={<Phone/>}/>
          <Route path='/labtop' element={<Labtop/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/gaming' element={<Gaming/>}/>
          <Route path='/camira' element={<Camira/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
