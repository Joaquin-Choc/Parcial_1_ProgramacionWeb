import React, { useState } from 'react';

const LoginForm = () => {
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
    console.log('Datos enviados:', formData);
  };

  const isFormValid = () => {
    return formData.clientCode.trim() !== '' && 
           formData.username.trim() !== '' && 
           formData.password.trim() !== '';
  };

  return (
    <div style={containerStyle}>
      {/* Encabezado con el logo de la universidad */}
      <div style={headerStyle}>
        <img 
          src="image.png" 
          alt="logo de la universidad"
          style={logoStyle}
        />
      </div>
      
      {/* Formulario de login */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="clientCode" style={labelStyle}>Código de Cliente:</label>
          <input
            type="text"
            id="clientCode"
            name="clientCode"
            value={formData.clientCode}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Ingrese su código"
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label htmlFor="username" style={labelStyle}>Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={!isFormValid()}
          style={buttonStyle}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

// Estilos actualizados
const containerStyle = {
  maxWidth: '500px',
  margin: '20px auto',
  padding: '0',
  fontFamily: 'Arial, sans-serif'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

const logoStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '10px'
};

const formStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff'
};

const inputGroupStyle = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxSizing: 'border-box',
  fontSize: '14px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#1a237e',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: 'bold'
};

export default LoginForm;