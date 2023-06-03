import React, { useContext } from 'react';
import { ProductosContext } from '../context';
import { Link } from 'react-router-dom';

import ImgBanner from '../assets/images/banner-cart.jpg';

const Carrito = () => {
  const { productosSeleccionados, eliminarProducto, valorTotal } =
    useContext(ProductosContext);
  const hayProductos = productosSeleccionados?.length > 0;

  const removerProducto = (id) => () => {
    eliminarProducto(id);
  };

  return (
    <section className="cart">
      <section className="ui-banner d-flex justify-content-center">
        <figure className="mb-0 ui-image-full">
          <img
            src={ImgBanner}
            className="d-block img-fluid m-auto"
            alt="Mis Delicias"
          />
        </figure>
        <article className="d-flex align-items-center text-center">
          <h1 className="mt-5 pt-5 text-uppercase">Carrito</h1>
        </article>
      </section>
      <section className="container py-4">
        <section className={`row ${!hayProductos && 'justify-content-center'}`}>
          {hayProductos ? (
            <>
              <article className="col-sm-12 col-md-8">
                <h2 className="cart-title text-uppercase">
                  Productos Seleccionados
                </h2>
                <ul className="cart-products pl-1">
                  {productosSeleccionados?.map((producto) => (
                    <li
                      key={producto?.id}
                      className="align-items-center d-flex flex-row mb-3"
                    >
                      <h3 className="cart-product mb-0">
                        {producto?.name}{' '}
                        <small className="ml-1">${producto?.price}K</small>
                      </h3>
                      <button
                        className="cart-btn"
                        type="button"
                        onClick={removerProducto(producto?.id)}
                        title={`Eliminar "${producto?.name}"`}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
              </article>
              <aside className="col-sm-12 col-md-4 card">
                <div className="align-items-center card-body d-flex justify-content-center">
                  <h3 className="cart-total">
                    Valor Total: <small>{valorTotal()}K</small>
                  </h3>
                </div>
              </aside>
            </>
          ) : (
            <article className="col-sm-12 col-md-4">
              <h3 className="text-center">No hay productos en el carrito</h3>
              <Link
                to="/productos"
                className="btn-cta btn px-5 text-uppercase w-100"
              >
                Haz tu pedido
              </Link>
            </article>
          )}
        </section>
      </section>
    </section>
  );
};

export default Carrito;
