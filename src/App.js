import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (loginData) => {
  
    console.log('Datos de login recibidos:', loginData);
    
    
    setIsAuthenticated(true);
    setUserData({
      clientCode: loginData.clientCode,
      username: loginData.username,
      lastLogin: new Date().toLocaleString()
    });
    
    alert(`Bienvenido ${loginData.username} (Código: ${loginData.clientCode})`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={universityLogo} alt="Universidad Rafael Landivar" className="logo" />
        <h1>Sistema Financiero</h1>
        {isAuthenticated && (
          <div className="user-info">
            <span>Usuario: {userData.username}</span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </header>

      <main className="main-content">
        {isAuthenticated ? (
          <div className="dashboard">
            <h2>Bienvenido al sistema</h2>
            <div className="user-details">
              <p><strong>Código de cliente:</strong> {userData.clientCode}</p>
              <p><strong>Último acceso:</strong> {userData.lastLogin}</p>
            </div>
          </div>
        ) : (
          <div className="login-wrapper">
            <h2>Inicio de sesión</h2>
            <LoginForm onLogin={handleLogin} />
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>© 2023 FinTrust - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
