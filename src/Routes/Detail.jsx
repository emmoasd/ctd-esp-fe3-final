import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener el dentista');
        }
        return response.json();
      })
      .then(data => {
        setDentist(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!dentist) return null;
  return (
    <div className={`detail-container ${state.theme}`}>
      <h1>{dentist.name}</h1>
      <img src="../images/doctor.jpg" alt="doctor" />
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;