import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id, isFavPage }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const favDentist = { name, username, id };
    dispatch({ type: 'ADD_FAV', payload: favDentist });
  };

  const removeFav = () => {
    dispatch({ type: 'REMOVE_FAV', payload: id });
  };

  return (
    <div className={`card ${state.theme}`}>
      <h3 className="name">{name}</h3>
      <Link to={`/dentist/${id}`}>
        <img src="./images/doctor.jpg" alt="doctor" />
      </Link>
      <Link to={`/dentist/${id}`}>
        <p>{username}</p>
      </Link>
      <Link to={`/dentist/${id}`}>Ver detalle</Link>
      {isFavPage ? (
        <button onClick={removeFav} className="favButton">Eliminar favorito</button>
      ) : (
        <button onClick={addFav} className="favButton">Añadir favorito</button>
      )}
    </div>
  );
};

export default Card;
