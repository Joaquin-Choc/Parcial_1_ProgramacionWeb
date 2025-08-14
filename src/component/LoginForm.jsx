import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    clientCode: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onLogin(formData);
    }
  };

  const isFormValid = () => {
    return formData.clientCode.trim() !== '' && 
           formData.username.trim() !== '' && 
           formData.password.trim() !== '';
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="clientCode">Código de Cliente</label>
        <input
          type="text"
          id="clientCode"
          name="clientCode"
          value={formData.clientCode}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button 
        type="submit" 
        disabled={!isFormValid()}
        className="login-button"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;