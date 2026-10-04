import React from 'react';
import Main from './Main';
function App() {
  return (
    <main style={{ padding: '40px 20px', backgroundColor: '#edefee', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#495e57' }}>Little Lemon Restaurant</h1>
      </header>
      <Main/>
    </main>
  );
}

export default App;