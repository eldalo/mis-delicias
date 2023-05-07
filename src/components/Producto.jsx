import React from 'react';

const Producto = ({ id, image, name, price, description }) => (
  <div className="col-sm-12 col-md-4 mb-3">
    <article className="product" id={`product-${id}`}>
      <div className="product-image mb-3">
        <figure className="mb-0 ui-image-full">
          <img
            src={image}
            className="d-block img-fluid m-auto ui-images-border"
            alt={name}
          />
        </figure>
      </div>
      <h3 className="text-center text-uppercase">
        {name} <small className="d-block">${price}K</small>
      </h3>
      <p>{description}</p>
      <button className="btn btn-cta d-block w-100">Agregar al carrito</button>
    </article>
  </div>
);

export default Producto;
