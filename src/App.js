import React, { Component } from 'react';
import CountryList from './components/CountryList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  addCountry = () => {
    const countryName = prompt("Enter Country Name:");
    if (countryName) {
      this.setState(prevState => ({
        countries: [...prevState.countries, { id: Date.now(), name: countryName, states: [] }]
      }));
    }
  };

  editCountry = (id) => {
    const newName = prompt("Enter new country name:");
    if (newName && window.confirm("Are you sure you want to update this country?")) {
      this.setState(prevState => ({
        countries: prevState.countries.map(country => country.id === id ? { ...country, name: newName } : country)
      }));
    }
  };

  deleteCountry = (id) => {
    if (window.confirm("Are you sure you want to delete this country? All states and cities will be removed.")) {
      this.setState(prevState => ({
        countries: prevState.countries.filter(country => country.id !== id)
      }));
    }
  };

  render() {
    return (
      <div className="app-container">
        <h1>Country, State, and City Management</h1>
        <button className="add-btn" onClick={this.addCountry}>Add Country</button>
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
