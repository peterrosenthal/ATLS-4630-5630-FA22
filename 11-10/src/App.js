import './App.css';
import Clock from './Clock.js';
import Welcome from './Welcome.js';
import List from './List.js';


function App() {
  return (
    <div>
      <Clock date={new Date()} />
      <Welcome name="Peter" />
      <Welcome />
      <List numbers={[1, 3, 77, 9]} />
      <List numbers={[113, 2, 1]} />
    </div>
  );
}

export default App;
