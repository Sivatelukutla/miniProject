import React, { Component } from 'react';
import './App.css';
import CountryList from './CountryList';

class App extends Component {
  state = {
    countries: []
  };

  // Add a new country
  addCountry = () => {
    const countryName = prompt('Enter country name:');
    if (countryName) {
      const newCountry = { id: Date.now(), name: countryName, states: [] };
      this.setState(prevState => ({
        countries: [...prevState.countries, newCountry]
      }));
    }
  };

  // Edit a country
  editCountry = (id) => {
    const countryName = prompt('Enter new country name:');
    if (countryName) {
      const countries = this.state.countries.map(country =>
        country.id === id ? { ...country, name: countryName } : country
      );
      this.setState({ countries });
    }
  };

  // Delete a country without confirmation
  deleteCountry = (id) => {
    const countries = this.state.countries.filter(country => country.id !== id);
    this.setState({ countries });
  };

  render() {
    return (
      <div className="App">
        <h1>Country, State, and City Management</h1>
        <button className="btn" onClick={this.addCountry}>Add Country</button>
        <CountryList 
          countries={this.state.countries} 
          editCountry={this.editCountry} 
          deleteCountry={this.deleteCountry} 
        />
      </div>
    );
  }
}

export default App;
