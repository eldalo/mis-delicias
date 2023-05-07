import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header py-3">
      <div className="container">
        <div className="row align-items-center">
          <figure className="col-sm-12 col-md-2 mb-3 mb-md-0">
            <Link to="/" className="logo">
              <img
                src={Logo}
                className="d-block img-fluid m-auto"
                alt="Mis Delicias"
              />
            </Link>
          </figure>
          <nav className="menu col-sm-12 col-md-10 text-center text-uppercase">
            <Link
              to="/"
              className="menu-item me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Home
            </Link>
            <Link
              to="/productos"
              className="menu-item me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Productos
            </Link>
            <Link
              to="/carrito"
              className="menu-item me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Carrito
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
