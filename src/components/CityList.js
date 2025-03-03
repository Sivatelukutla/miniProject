import React, { Component } from 'react';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: props.state.cities };
  }

  addCity = () => {
    const cityName = prompt("Enter City Name:");
    if (cityName) {
      this.setState(prevState => ({
        cities: [...prevState.cities, { id: Date.now(), name: cityName }]
      }));
    }
  };

  deleteCity = (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      this.setState(prevState => ({
        cities: prevState.cities.filter(city => city.id !== id)
      }));
    }
  };

  render() {
    return (
      <div className="city-list">
        <button className="add-btn" onClick={this.addCity}>Add City</button>
        {this.state.cities.map(city => (
          <div key={city.id} className="city">
            <p>{city.name}</p>
            <button className="delete-btn" onClick={() => this.deleteCity(city.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;
