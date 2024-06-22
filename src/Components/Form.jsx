import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length > 5 && validateEmail(formData.email)) {
      setMessage(`Gracias ${formData.name}, te contactaremos a la brevedad`);
    } else {
      setMessage("Por favor verifique su información");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre y apellido" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
