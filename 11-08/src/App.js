import './App.css';
import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Peter" />
        <Welcome name="Class" />
      </div>
    );
  }
}

export default App;
