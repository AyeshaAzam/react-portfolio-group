import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Skills from './Skills';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
      
      </Router>
   
    </div>
  );
}

export default App;
