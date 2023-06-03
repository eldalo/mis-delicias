import React, { createContext, useState } from 'react';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarCarrito = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
  };

  const eliminarProducto = (id) => {
    const productosFiltrados = productosSeleccionados.filter(
      (producto) => producto?.id !== id,
    );
    setProductosSeleccionados(productosFiltrados);
  };

  const valorTotal = () => {
    const valor = productosSeleccionados.reduce(
      (total, producto) => total + producto?.price,
      0,
    );
    return valor;
  };

  return (
    <ProductosContext.Provider
      value={{
        productosSeleccionados,
        agregarCarrito,
        eliminarProducto,
        valorTotal,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
