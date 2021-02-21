import React from 'react';
import {SortingVisualizer} from './components/SortingVisualizer';
import {SearchingVisualizer} from './components/SearchingVisualizer';
import {DataStructures} from './components/DataStructures';
import {Navbar} from './components/Navbar/Navbar'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/sort"><SortingVisualizer/></Route>
          <Route path="/path"><SearchingVisualizer/></Route>
          <Route path="/structure"><DataStructures/></Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
