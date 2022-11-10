import React from 'react';

export default class List extends React.Component {
  render() {
    const listItems = this.props.numbers
      .map((number, index) => <li key={index.toString()}>{number}</li>);

    return (
      <ul>
        {listItems}
      </ul>
    );

    /*
    return (
      <ul>
        {this.props.numbers.map((number) => {
          return <li>{number}</li>
        })}
      </ul>
    );
    */
  }
}
