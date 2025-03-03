import React, { Component } from 'react';
import CityList from './CityList';

class StateList extends Component {
  constructor(props) {
    super(props);
    this.state = { states: props.country.states };
  }

  addState = () => {
    const stateName = prompt("Enter State Name:");
    if (stateName) {
      this.setState(prevState => ({
        states: [...prevState.states, { id: Date.now(), name: stateName, cities: [] }]
      }));
    }
  };

  editState = (id) => {
    const newName = prompt("Enter new state name:");
    if (newName && window.confirm("Are you sure you want to update this state?")) {
      this.setState(prevState => ({
        states: prevState.states.map(state => state.id === id ? { ...state, name: newName } : state)
      }));
    }
  };

  deleteState = (id) => {
    if (window.confirm("Are you sure you want to delete this state? All cities will be removed.")) {
      this.setState(prevState => ({
        states: prevState.states.filter(state => state.id !== id)
      }));
    }
  };

  render() {
    return (
      <div className="state-list">
        <button className="add-btn" onClick={this.addState}>Add State</button>
        {this.state.states.map(state => (
          <div key={state.id} className="state">
            <h3>{state.name}</h3>
            <button className="edit-btn" onClick={() => this.editState(state.id)}>Edit</button>
            <button className="delete-btn" onClick={() => this.deleteState(state.id)}>Delete</button>
            <CityList state={state} />
          </div>
        ))}
      </div>
    );
  }
}

export default StateList;
