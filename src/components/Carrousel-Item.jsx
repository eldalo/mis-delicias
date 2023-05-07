import React from 'react';
import { Link } from 'react-router-dom';

const CarrouselItem = ({ id, image, name, link }) => (
  <div className="col-sm-12 col-md-4">
    <Link to={link} className="carrousel-item" id={`product-${id}`}>
      <figure className="mb-0 ui-image-full">
        <img
          src={image}
          className="d-block img-fluid m-auto ui-images-border"
          alt={name}
        />
      </figure>
    </Link>
  </div>
);

export default CarrouselItem;
