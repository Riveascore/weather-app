import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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
    const cityName = this.state.term;

    // We need to fetch weather data
    this.props.fetchWeather(cityName);

    // Clear search input for ease-of-use for users
    this.setState({
      term: ''
    });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null for now because mapDispatchToProps ALWAYS goes in as the 2nd argument
// and we don't have mapPropsToState setup yet
// essentially, we don't need state here
export default connect(null, mapDispatchToProps)(SearchBar)
