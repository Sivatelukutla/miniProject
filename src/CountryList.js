import React, { Component } from 'react';
import StateList from './StateList';

class CountryList extends Component {
  render() {
    const { countries, editCountry, deleteCountry } = this.props;
    return (
      <div className="country-list">
        {countries.map(country => (
          <div key={country.id} className="country">
            <h2>{country.name}</h2>
            <button onClick={() => editCountry(country.id)}>Edit</button>
            <button onClick={() => deleteCountry(country.id)}>Delete</button>
            <StateList country={country} />
          </div>
        ))}
      </div>
    );
  }
}

export default CountryList;
