import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <Chart cityData={cityData} color="red" weatherProp="temp" />
        <Chart cityData={cityData} color="blue" weatherProp="pressure" />
        <Chart cityData={cityData} color="green" weatherProp="humidity" />
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
