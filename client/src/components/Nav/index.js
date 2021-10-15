import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Historial de Compras
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Cerrar sesión
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Crear Cuenta
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Ingresar
            </Link>
          </li>

          <li className="mx-1">
            <Link to="/about">
              Acerca de nosotros
            </Link>
          </li>

        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">👕 </span>
            Ropavejera
        </Link>
</h1>
      <nav>
        {showNavigation()}
      </nav>
    </header>
    
  );
}

export default Nav;
