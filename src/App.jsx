import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom';

import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import DetalleProducto from './pages/DetalleProducto'

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/'              element={<Productos/>}></Route>
          <Route path='/damas'         element={<Productos category="women"/>}> </Route>
          <Route path='/caballeros'    element={<Productos category="men"/>}> </Route>
          <Route path='/joyas'         element={<Productos category="jewelery"/>}> </Route>
          <Route path='/electronica'   element={<Productos category="electronics"/>}> </Route>
          <Route path='/contacto'      element={<Contacto/>}></Route>
          <Route path='/productos/:id' element={<DetalleProducto/>}/>
        </Routes>
      <Footer/>   
    </>
    )
}

export default App 

