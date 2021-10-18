import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        street: formState.street,
        colonia: formState.colonia,
        zipcode: formState.zipcode,
        city: formState.city,
        state: formState.state,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <div className="container my-1">
      <Link to="/login">← Ve a ingresar</Link>

      <h2>Crea una cuenta</h2>

 {/* PRIMER NOMBRE */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between">
          <label htmlFor="firstName">Primer Nombre:</label>
          <input
            placeholder="Nombre"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

{/* LAST NAME */}
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            placeholder="Apellidos"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>

{/* CORREO */}
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Correo eléctronico:</label>
          <input
            placeholder="correo electronico"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

{/* DIRECCION FISICA */}
<div className="flex-row space-between my-2">
          <label htmlFor="direccion">Dirección:</label>
          <input
            placeholder="Calle"
            name="street"
            type="street"
            id="street"
            onChange={handleChange}
          />

          <input
            placeholder="Colonia"
            name="colonia"
            type="colonia"
            id="colonia"
            onChange={handleChange}
          />

          <input
            placeholder="Código Postal"
            name="zipcode"
            type="zipcode"
            id="zipcode"
            onChange={handleChange}
          />

          <input
            placeholder="Ciudad"
            name="city"
            type="city"
            id="city"
            onChange={handleChange}
          />

          <input
            placeholder="Estado"
            name="state"
            type="state"
            id="state"
            onChange={handleChange}
          />

        </div>


{/* CONSTRASENA */}
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Contraseña:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
{/* BOTON DE ENVIAR */}
        <div className="flex-row flex-end">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
