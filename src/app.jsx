import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProductosProvider } from './context';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import AdminEmpleados from './pages/admin/Empleados';
import AdminProductos from './pages/admin/Productos';

const App = () => (
  <ProductosProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/administrador/empleados" element={<AdminEmpleados />} />
        <Route path="/administrador/productos" element={<AdminProductos />} />
      </Routes>
      <Footer />
    </Router>
  </ProductosProvider>
);

export default App;
