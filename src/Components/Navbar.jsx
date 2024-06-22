import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/home">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contact">Contacto</Link>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

