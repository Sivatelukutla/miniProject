import React, { useState } from "react";
import "./App.css";
import CountryList from "./CountryList";

function App() {
  const [countries, setCountries] = useState([]);

  // Add a new country using a modal-style input
  const addCountry = () => {
    const countryName = window.prompt("Enter country name:");
    if (countryName?.trim()) {
      const newCountry = { id: Date.now(), name: countryName.trim(), states: [] };
      setCountries((prevCountries) => [...prevCountries, newCountry]);
    }
  };

  // Edit a country
  const editCountry = (id) => {
    const countryName = window.prompt("Enter new country name:");
    if (countryName?.trim()) {
      setCountries((prevCountries) =>
        prevCountries.map((country) =>
          country.id === id ? { ...country, name: countryName.trim() } : country
        )
      );
    }
  };

  // Delete a country with confirmation
  const deleteCountry = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this country?");
    if (confirmDelete) {
      setCountries((prevCountries) => prevCountries.filter((country) => country.id !== id));
    }
  };

  return (
    <div className="App">
      <h1>Country, State, and City Management</h1>
      <button className="btn" onClick={addCountry}>Add Country</button>
      <CountryList 
        countries={countries} 
        editCountry={editCountry} 
        deleteCountry={deleteCountry} 
      />
    </div>
  );
}

export default App;
