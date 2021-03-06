import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';
import Checkout from './Components/Pages/Checkout/Checkout';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Instruments from './Components/Pages/Instruments/Instruments';
import Login from './Components/Pages/Login/Login';
import RequerAuth from './Components/Pages/RequerAuth/RequerAuth';
import Services from './Components/Pages/Services/Services';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Loading from './Components/Shared/Loading/Loading';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/instrument' element={<Instruments></Instruments>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequerAuth>
            <Checkout></Checkout>
          </RequerAuth>
        }></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
