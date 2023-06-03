import React, { useContext } from 'react';
import { ProductosContext } from '../context';

const Producto = (producto) => {
  const { agregarCarrito } = useContext(ProductosContext);

  const agregarProducto = () => {
    agregarCarrito(producto);
  };

  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <article className="product" id={`product-${producto?.id}`}>
        <div className="product-image mb-3">
          <figure className="mb-0 ui-image-full">
            <img
              src={producto?.image}
              className="d-block img-fluid m-auto ui-images-border"
              alt={producto?.name}
            />
          </figure>
        </div>
        <h3 className="text-center text-uppercase">
          {producto?.name}{' '}
          <small className="d-block">${producto?.price}K</small>
        </h3>
        <p>{producto?.description}</p>
        <button className="btn btn-cta d-block w-100" onClick={agregarProducto}>
          Agregar al carrito
        </button>
      </article>
    </div>
  );
};

export default Producto;
