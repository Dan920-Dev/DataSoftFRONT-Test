import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import BookList from './components/BookList'; 


function App() {

  const [endpoint, setEndpoint] = useState('book/all'); // Estado inicial del endpoint.

  const handleSelectEndpoint = (newEndpoint) => {
    console.log('Updating endpoint to: ', newEndpoint);
    setEndpoint(newEndpoint);
  };

  return (
    <>
     <NavigationBar onSelectEndpoint={handleSelectEndpoint} />
    <BookList endpoint={endpoint} />
    </>
    
  );
}

export default App;
