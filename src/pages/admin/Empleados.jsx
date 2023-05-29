import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../database/firebase';

import ImgBanner from '../../assets/images/banner-product.jpg';

const AdminEmpleados = () => {
  const empresaCollection = collection(db, 'Empleados');
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');

  const obtenerEmpleados = async () => {
    try {
      const data = await getDocs(empresaCollection);
      setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log('Error al obtener los empleados: ', error);
    }
  };

  const limpiarDatos = () => {
    setNombre('');
    setDocumento('');
    setEmail('');
  };

  const agregarEmpleado = async () => {
    if (!nombre.trim() || !documento.trim()) {
      alert('Nombre o Documento están vacios');
      return;
    }

    try {
      await addDoc(empresaCollection, { nombre, documento, email });
      limpiarDatos();
      obtenerEmpleados();
    } catch (error) {
      console.log('Error al agregar los empleados: ', error);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return (
    <section className="admin-empleados">
      <section className="ui-banner d-flex justify-content-center">
        <figure className="mb-0 ui-image-full">
          <img
            src={ImgBanner}
            className="d-block img-fluid m-auto"
            alt="Mis Delicias"
          />
        </figure>
        <article className="d-flex align-items-center text-center">
          <h1 className="mt-5 pt-5 text-uppercase">Empleados</h1>
        </article>
      </section>
      <section className="admin-empleados__add">
        <form>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="button" onClick={agregarEmpleado} value="Agregar" />
        </form>
      </section>
      <section className="admin-empleados__list">
        <ul className="">
          {empleados?.map((empleado) => (
            <>
              {empleado?.nombre && empleado?.documento && (
                <li key={empleado.id}>
                  {empleado.nombre} <span>{empleado.documento}</span>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AdminEmpleados;
