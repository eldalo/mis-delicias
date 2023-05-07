import React from 'react';

import ImgBanner from '../assets/images/banner-product.jpg';
import Product from '../components/Producto';

import MOCK_PRODUCTOS from '../mocks/productos.json';

const Productos = () => (
  <section className="products">
    <section className="ui-banner d-flex justify-content-center">
      <figure className="mb-0 ui-image-full">
        <img
          src={ImgBanner}
          className="d-block img-fluid m-auto"
          alt="Mis Delicias"
        />
      </figure>
      <article className="d-flex align-items-center text-center">
        <h1 className="mt-5 pt-5 text-uppercase">Productos</h1>
      </article>
    </section>
    <section className="container py-4">
      <section className="products-list mt-3">
        <div className="row">
          {MOCK_PRODUCTOS?.map((product) => (
            <Product
              key={`product-item-${product.id}`}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </section>
  </section>
);

export default Productos;
