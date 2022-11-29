import React from 'react';
import BoilingVerdict from './BoilingVerdict.js';
import TemeratureInput from './TemeratureInput.js';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'c'
    };

    this.toCelsius = this.toCelsius.bind(this);
    this.toFahrenheit = this.toFahrenheit.bind(this);
    this.tryConvert = this.tryConvert.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
      <div>
        <TemeratureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemeratureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}