import React from 'react';
import BookingForm from './BookingForm';

function App() {
  return (
    <main style={{ padding: '40px 20px', backgroundColor: '#edefee', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#495e57' }}>Little Lemon Restaurant</h1>
      </header>
      <BookingForm />
    </main>
  );
}

export default App;