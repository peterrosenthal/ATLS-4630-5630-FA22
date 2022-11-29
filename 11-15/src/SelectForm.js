import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'Peter' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value: value });
  }

  handleSubmit(event) {
    console.log(`value is: ${this.state.value}!`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="name">
          Name:
        </label>
        <select id="name" value={this.state.value} onChange={this.handleChange} >
          <option value="George">George</option>
          <option value="Claire">Claire</option>
          <option value="Peter">Peter</option>
          <option value="Tracey">Tracey</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}
