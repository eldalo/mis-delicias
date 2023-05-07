import React from 'react';
import { Link } from 'react-router-dom';

import ImgBanner from '../assets/images/banner.jpg';
import ImgAbout from '../assets/images/productos/comida5.jpg';
import ImgFirstProduct from '../assets/images/productos/comida1.jpeg';
import ImgSecondProduct from '../assets/images/productos/comida4.jpg';
import ImgThirdProduct from '../assets/images/productos/comida6.jpg';

const Home = () => (
  <section className="home">
    <section className="banner d-flex justify-content-center">
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
        <h2></h2>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Link to="/productos" className="carrousel-item">
              <figure className="mb-0 ui-image-full">
                <img
                  src={ImgFirstProduct}
                  className="d-block img-fluid m-auto ui-images-border"
                  alt="Mis Delicias"
                />
              </figure>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4">
            <Link to="/productos" className="carrousel-item">
              <figure className="mb-0 ui-image-full">
                <img
                  src={ImgSecondProduct}
                  className="d-block img-fluid m-auto ui-images-border"
                  alt="Mis Delicias"
                />
              </figure>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4">
            <Link to="/productos" className="carrousel-item">
              <figure className="mb-0 ui-image-full">
                <img
                  src={ImgThirdProduct}
                  className="d-block img-fluid m-auto ui-images-border"
                  alt="Mis Delicias"
                />
              </figure>
            </Link>
          </div>
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
