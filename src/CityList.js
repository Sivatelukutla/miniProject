import React, { Component } from "react";

class CityList extends Component {
  state = {
    newCity: "",
    isAddingCity: false,
  };

  // Start adding a new city
  startAddCity = () => {
    this.setState({ isAddingCity: true });
  };

  // Add a city to the state (update the parent state)
  addCity = () => {
    const { newCity } = this.state;
    if (newCity.trim()) {
      const city = { id: Date.now(), name: newCity.trim() };
      this.props.onAddCity(city); // Calls the function passed from the parent
      this.setState({ newCity: "", isAddingCity: false });
    }
  };

  handleInputChange = (e) => {
    this.setState({ newCity: e.target.value });
  };

  render() {
    const { state, onDeleteCity } = this.props;
    const { newCity, isAddingCity } = this.state;

    return (
      <div className="city-list">
        {isAddingCity ? (
          <div>
            <input
              type="text"
              value={newCity}
              onChange={this.handleInputChange}
              placeholder="Enter city name"
            />
            <button onClick={this.addCity}>Add City</button>
            <button onClick={() => this.setState({ isAddingCity: false })}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.startAddCity}>Add City</button>
        )}

        {state.cities.map((city) => (
          <div key={city.id} className="city">
            <h4>{city.name}</h4>
            <button onClick={() => onDeleteCity(city.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;
