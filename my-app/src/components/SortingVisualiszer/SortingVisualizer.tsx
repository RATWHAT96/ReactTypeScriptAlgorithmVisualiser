import React, {useState, useEffect, useRef} from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { generateArray, mergeSort, quickSort, bubbleSort, selectionSort } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';
import SortDataDisplay from './sortingAlgorithms/SortDataDisplay';

const ANIMATION_SPEED_MS = 200;
const NUMBER_OF_ARRAY_BARS = 15;
const PRIMARY_COLOR = 'grey';
const SECONDARY_COLOR = 'turquoise';

export const SortingVisualizer = () => {

  const [array, setArray] = useState<number[]>([0]);

  const resetArr = () => {
    const newArr = generateArray(NUMBER_OF_ARRAY_BARS)
    setArray(newArr);
  }

  useEffect(() => {
    resetArr();
  }, []) 
  
    return (
      <Router>
      <div className="main">
        <div className="array-container">
          {array.map((value: number, idx: number) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}vh`,
              }}> {value} </div>
          ))}
        </div>
        <div className="centreDiv">
          <div className="buttonbar">
            <button onClick={() => resetArr()}>New Array</button>
            <Link to="/mergeSort" style={{ textDecoration: 'none', color: 'white' } }><button onClick={() => mergeSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Merge</button></Link>
            <Link to="/quickSort" style={{ textDecoration: 'none', color: 'white' }}><button onClick={() => quickSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Quick</button></Link>
            <Link to="/bubbleSort" style={{ textDecoration: 'none', color: 'white' } }><button onClick={() => bubbleSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Bubble</button></Link>
            <Link to="/SelectionSort" style={{ textDecoration: 'none', color: 'white' } }><button onClick={() => selectionSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Selection</button></Link>
          </div>
        </div>
        <div className="algoInfoBox">
            <Switch>
              <Route path="/mergeSort" component={() => <SortDataDisplay name="Merge Sort" bestCase = 'n * log(n)' averageCase = 'n * log(n)' worstCase = 'n * log(n)' space = 'n'/>}/>
              <Route path="/quickSort" component={() => <SortDataDisplay name="Quick Sort" bestCase = 'n * log(n)' averageCase = 'n * log(n)' worstCase = 'n ^ 2' space = 'log(n)'/>} />
              <Route path="/bubbleSort" component={() => <SortDataDisplay name="Bubble Sort" bestCase = 'n' averageCase = 'n ^ 2' worstCase = 'n ^ 2' space = '1'/>} />
              <Route path="/selectionSort" component={() => <SortDataDisplay name="Selection Sort" bestCase = 'n ^ 2' averageCase = 'n ^ 2' worstCase = 'n ^ 2' space = '1'/>} />
            </Switch>
        </div>
      </div>
      </Router>
    );
}

