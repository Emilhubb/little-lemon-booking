import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(props.availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({ date, time, guests, occasion });
  };

  return (
    <section
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f4fce3",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#495e57", textAlign: "center" }}>
        Table Reservation
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "20px" }}
        aria-label="Booking Form"
      >
        <label htmlFor="res-date" style={{ fontWeight: "bold", color: "#333" }}>
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="res-time" style={{ fontWeight: "bold", color: "#333" }}>
          Choose time
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          {props.availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests" style={{ fontWeight: "bold", color: "#333" }}>
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="occasion" style={{ fontWeight: "bold", color: "#333" }}>
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>

        <button
          type="submit"
          style={{
            backgroundColor: "#f4ce14",
            color: "#333",
            padding: "12px",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
