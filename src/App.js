import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Service from './components/Service';
import Products from './components/Products';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Authprovider from './components/Auth';
import BookNow from './components/BookNow';

function App() {
  return (
    <div className="App">
      <Authprovider>
      <NavBar/>
     <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bookNow' element={<BookNow/>}/>
      
     </Routes>
     </Authprovider>
    </div>
  );
}

export default App;
