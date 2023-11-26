import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import BookList from './components/BookList';
import Login from './components/LoginComponent'; // Asegúrate de importar el componente de Login


function App() {
  const [endpoint, setEndpoint] = useState('book/all');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nuevo estado para manejar la autenticación

  const handleSelectEndpoint = (newEndpoint) => {
    console.log('Updating endpoint to: ', newEndpoint);
    setEndpoint(newEndpoint);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Actualiza el estado a autenticado cuando el login es exitoso
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Actualiza el estado a no autenticado cuando el usuario cierra sesión
  };

  // Renderiza el componente de Login si el usuario no está autenticado
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Renderiza la aplicación normalmente si el usuario está autenticado
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <NavigationBar onSelectEndpoint={handleSelectEndpoint} onLogout={handleLogout} />
        </div>
        <div className="col-md-10">
          <BookList endpoint={endpoint} />
        </div>
      </div>
    </div>
  );
}

export default App;
