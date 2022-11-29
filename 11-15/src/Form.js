import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Peter',
      full: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(`name is: ${this.state.name}!`);
    console.log(`full is: ${this.state.full}!`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="fullName">
          Full Name?
        </label>
        <input type="checkbox"
               id="fullName"
               name="full"
               checked={this.state.full}
               onChange={this.handleChange} />
        
        <label htmlFor="name">
          Name:
        </label>
        <input type="text"
               id="name"
               name="name"
               value={this.state.name}
               onChange={this.handleChange} />
        
        <input type="submit" />
      </form>
    );
  }
}
