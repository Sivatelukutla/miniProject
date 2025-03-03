import React, { Component } from 'react';
import CityList from './CityList';

class StateList extends Component {
  state = {
    newState: '',
    isAddingState: false
  };

  // Start adding a new state
  startAddState = () => {
    this.setState({ isAddingState: true });
  };

  // Add a state to the country
  addState = () => {
    const { newState } = this.state;
    if (newState) {
      const state = { id: Date.now(), name: newState, cities: [] };
      const country = { ...this.props.country };
      country.states.push(state);
      this.setState({ newState: '', isAddingState: false });
      this.props.country.states = country.states; // update parent country
    }
  };

  handleInputChange = (e) => {
    this.setState({ newState: e.target.value });
  };

  render() {
    const { country } = this.props;
    const { newState, isAddingState } = this.state;

    return (
      <div className="state-list">
        {isAddingState ? (
          <div>
            <input 
              type="text" 
              value={newState} 
              onChange={this.handleInputChange} 
              placeholder="Enter state name" 
            />
            <button onClick={this.addState}>Add State</button>
            <button onClick={() => this.setState({ isAddingState: false })}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.startAddState}>Add State</button>
        )}

        {country.states.map(state => (
          <div key={state.id} className="state">
            <h3>{state.name}</h3>
            <button onClick={() => this.editState(state.id)}>Edit</button>
            <button onClick={() => this.deleteState(state.id)}>Delete</button>
            <CityList state={state} />
          </div>
        ))}
      </div>
    );
  }
}

export default StateList;
