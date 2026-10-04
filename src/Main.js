import React, { useState } from 'react';
import BookingForm from './BookingForm';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

  const submitForm = (formData) => {
    alert(`Booking successfully confirmed for ${formData.date} at ${formData.time}!`);
  };

  return (
    <main style={{ padding: '40px 20px', backgroundColor: '#edefee', minHeight: '100vh', fontFamily: 'Arial' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#495e57' }}>Little Lemon Restaurant</h1>
        <p style={{ color: '#333' }}>Reserve a table with us</p>
      </header>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </main>
  );
}

export default Main;