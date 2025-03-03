import React, { Component } from 'react';
import StateList from './StateList';

class CountryList extends Component {
  render() {
    const { countries, editCountry, deleteCountry } = this.props;
    return (
      <div className="country-list">
        {countries.length === 0 ? <p>No Countries Added</p> : countries.map(country => (
          <div key={country.id} className="country">
            <h2>{country.name}</h2>
            <button className="edit-btn" onClick={() => editCountry(country.id)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteCountry(country.id)}>Delete</button>
            <StateList country={country} />
          </div>
        ))}
      </div>
    );
  }
}

export default CountryList;
