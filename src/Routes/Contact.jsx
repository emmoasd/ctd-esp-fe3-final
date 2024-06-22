import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`main-content ${state.theme}`}>
      <div className={`contact-container ${state.theme}`}>
        <h2>¿Deseas saber más?</h2>
        <p>Déjanos tu e-mail y te contactaremos</p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;

