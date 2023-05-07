import React from 'react';

import ImgBanner from '../assets/images/banner-product.jpg';

const Carrito = () => (
  <section className="card">
    <section className="ui-banner d-flex justify-content-center">
      <figure className="mb-0 ui-image-full">
        <img
          src={ImgBanner}
          className="d-block img-fluid m-auto"
          alt="Mis Delicias"
        />
      </figure>
      <article className="d-flex align-items-center text-center">
        <h1 className="mt-5 pt-5 text-uppercase">Coming Soon</h1>
      </article>
    </section>
    <section className="container pt-1" />
  </section>
);

export default Carrito;
