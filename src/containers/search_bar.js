import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // The context "this" is incorrect from onChange={this.onInputChange}
    // so we have to make sure its context is actually the
    // SearchBar container!!!!

    // this.onInputChange.bind(this);
    // ^means, SearchBar instance has a function called inputChange
    // bind the context SearchBar instance to the function, aka "this"
    // THEN, replace the funciton definition with the same function definition
    // that now has the correct "this" context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to fetch weather data
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    queryString = 'api.openweathermap.org/data/2.5/forecast?q=';
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Get a 5 day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Find City
          </button>
        </span>
      </form>
    );
  }
}
