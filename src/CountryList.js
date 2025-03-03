import React, { Component } from "react";
import StateList from "./StateList";

class CountryList extends Component {
  render() {
    const { countries, editCountry, deleteCountry, onAddState, onEditState, onDeleteState } =
      this.props;

    return (
      <div className="country-list">
        {countries.map((country, countryIndex) => (
          <div key={country.id} className="country">
            <h2>{country.name}</h2>
            <button onClick={() => editCountry(country.id)}>Edit</button>
            <button onClick={() => deleteCountry(country.id)}>Delete</button>

            {/* Pass the country along with functions for managing states */}
            <StateList
              country={country}
              onAddState={(newState) => onAddState(countryIndex, newState)}
              onEditState={(stateId) => onEditState(countryIndex, stateId)}
              onDeleteState={(stateId) => onDeleteState(countryIndex, stateId)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CountryList;
