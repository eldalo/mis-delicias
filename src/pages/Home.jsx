import React from 'react';
import { Link } from 'react-router-dom';

import ImgBanner from '../assets/images/banner-home.jpg';
import ImgAbout from '../assets/images/banner-home-left.jpg';
import CarrouselItem from '../components/Carrousel-Item';

import MOCK_PRODUCTOS from '../mocks/productos.json';

const Home = () => (
  <section className="home">
    <section className="ui-banner d-flex justify-content-center">
      <figure className="mb-0 ui-image-full">
        <img
          src={ImgBanner}
          className="d-block img-fluid m-auto"
          alt="Mis Delicias"
        />
      </figure>
      <article className="d-flex align-items-center text-center">
        <h1 className="text-uppercase">
          Explora todos <strong className="d-block">tus sentidos</strong>
        </h1>
      </article>
    </section>
    <section className="container py-4">
      <section className="carrousel mb-4">
        <div className="row">
          {MOCK_PRODUCTOS?.slice(0, 3)?.map((product) => (
            <CarrouselItem
              key={`carrousel-item-${product.id}`}
              id={product.id}
              image={product.image}
              name={product.name}
              link={product.link}
            />
          ))}
        </div>
      </section>
      <section className="about">
        <div className="row h-100">
          <article className="col-sm-12 col-md-7 pt-4">
            <h2 className="text-uppercase mb-4">Bienvenido a Mis Delicias</h2>
            <h3>
              ¡Explora tus sentidos y deleita tu paladar con nuestros platos
              exquisitos!
            </h3>
            <p>
              No dejaras ni una migaja, ya que contamos con los mejores chefs
              del país.
            </p>
            <div className="text-center">
              <Link
                to="/productos"
                className="btn-cta btn mt-3 px-5 text-uppercase"
              >
                Haz tu pedido
              </Link>
            </div>
          </article>
          <div className="col-sm-12 col-md-5">
            <div className="about-preview">
              <figure className="mb-0 ui-image-full">
                <img
                  src={ImgAbout}
                  className="d-block img-fluid m-auto ui-images-border"
                  alt="Mis Delicias"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
);

export default Home;
