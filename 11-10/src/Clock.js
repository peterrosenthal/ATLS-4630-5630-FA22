import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };

    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    console.log(`Hello world! The time is ${this.state.date.toLocaleTimeString()}`)
  }

  sayGoodbye = () => {
    console.log(`Goodbye world! The time is ${this.state.date.toLocaleTimeString()}`)
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div onClick={this.sayHello}>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
