import React from 'react';
// import 'Title.css';

export default class Title extends React.Component {
  constructor(props) {
    super();
    this.name = props.name;
  }

  render() {
    const h1Styles = {
      fontSize: '2em',
      color: 'lightblue'
    };
    return (
      <h1 style={h1Styles}>Hello {this.name}!</h1>
    );
  }
}
