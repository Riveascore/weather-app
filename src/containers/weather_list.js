import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
