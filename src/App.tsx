import React from 'react';
import './App.css';
import Masthead from './components/Masthead.tsx';
import Team from './components/Team.tsx';

function App() {
  return (
    <div className="App">
      <nav style={styles.nav}>
        <div style={styles.first}> SullySoft </div>
        <div style={styles.item}> Team </div>
        <div style={styles.item}> Contact </div>
        <div style={styles.item}> Jobs </div>
      </nav>
      <Masthead />
      <Team />
    </div>
  );
}
const styles = {
    nav: {
      height: 100,
      display: 'flex',
      backgroundColor: 'rgba(255,255,255,.5)',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    first: {
      marginRight: 'auto',
      marginLeft: '50px',
      justifyContent: 'flex-start',
      fontFamily: 'Coral',
      position: 'relative' as any,
      top: '6px',

    },
    item: {
     color: 'red',
     padding: 10,
    }
}
export default App;
