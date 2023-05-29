import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../database/firebase';

import ImgBanner from '../../assets/images/banner-product.jpg';

const AdminProductos = () => {
  const productosCollection = collection(db, 'Productos');
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const obtenerProductos = async () => {
    try {
      const data = await getDocs(productosCollection);
      setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log('Error al obtener los productos: ', error);
    }
  };

  const limpiarDatos = () => {
    setNombre('');
    setPrecio('');
    setStock('');
    setDescripcion('');
    setImagen('');
  };

  const agregarProducto = async () => {
    if (!nombre.trim() || !precio.trim() || !stock.trim()) {
      alert('Nombre/Precio/Stock están vacios');
      return;
    }

    try {
      await addDoc(productosCollection, {
        nombre,
        precio,
        stock,
        descripcion,
        imagen,
      });
      limpiarDatos();
      obtenerProductos();
    } catch (error) {
      console.log('Error al agregar los productos: ', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <section className="admin-productos">
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
      <section className="admin-productos__add">
        <form>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="url"
            placeholder="URL Imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <textarea
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <input type="button" onClick={agregarProducto} value="Agregar" />
        </form>
      </section>
      <section className="admin-productos__list">
        <ul className="">
          {productos?.map((producto) => (
            <>
              {producto?.nombre && producto?.precio && (
                <li key={producto.id}>
                  {producto.nombre}
                  <span>Precio: {producto.precio}</span>
                  <span>Stock: {producto.stock}</span>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AdminProductos;
