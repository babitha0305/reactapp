import * as React from 'react';
import './App.css';
import ButtonAppBar from './AppBar';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
    <div>
    <ButtonAppBar />
    </div>
    <div>
      <Grid />
    </div>
    </div>
  );
}

export default App;
