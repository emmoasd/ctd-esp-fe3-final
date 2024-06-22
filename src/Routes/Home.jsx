import React, { useContext, useEffect } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
  }, [dispatch]);

  return (
    <main className={`main-content ${state.theme}`}>
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;