import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favDentists = state.favDentists;

  return (
    <div className={`main-content ${state.theme}`}>
      <h1>Mis dentistas favoritos</h1>
      <div className="card-grid">
        {favDentists.map(dentist => (
          <Card key={dentist.id} {...dentist} isFavPage />
        ))}
      </div>
    </div>
  );
};

export default Favs;
