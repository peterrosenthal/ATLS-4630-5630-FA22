import React from 'react';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({ name: 'Bob' });
  }

  render() {
    let title;
    if (this.state.name) {
      title = <h1>Hello {this.state.name}!</h1>
    } else {
      title = <h1>Hello stranger!</h1>
    }
    return (
      <div onClick={this.changeName}>
        {title}
        <h2>Hello {this.state.name ? this.state.name : 'stranger'}!</h2>
      </div>
    );
  }
}
