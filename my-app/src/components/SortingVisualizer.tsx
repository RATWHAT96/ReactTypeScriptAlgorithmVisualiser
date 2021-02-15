import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { generateArray, mergeSort, quickSort, bubbleSort, selectionSort } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';
import SortDataDisplay from './sortingAlgorithms/SortDataDisplay';

const ANIMATION_SPEED_MS = 100;
const NUMBER_OF_ARRAY_BARS = 20;
const PRIMARY_COLOR = 'grey';
const SECONDARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component<any, any> {
  constructor(props: any[]) {
    super(props);

    //this.state array will contain the height values of the array
    this.state = {
      array: [],
    };
  }

  resetArr() {
    this.setState({array: generateArray(NUMBER_OF_ARRAY_BARS)});
  }

  componentDidMount() {
    this.resetArr();
  }

  render() {
    const {array} = this.state;

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
              }}></div>
          ))}
            <div
              className="array-bar"
              style={{
                backgroundColor: 'white',
                height: '60vh',
              }}></div>
        </div>
        <div className="centreDiv">
          <div className="buttonbar">
            <button onClick={() => this.resetArr()}>New Array</button>
            <button onClick={() => mergeSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}><Link to="/ReactTypeScriptAlgorithmVisualiser/mergeSort" style={{ textDecoration: 'none', color: 'white' } }>Merge</Link></button>
            <button onClick={() => quickSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}><Link to="/ReactTypeScriptAlgorithmVisualiser/quickSort" style={{ textDecoration: 'none', color: 'white' }}>Quick</Link></button>
            <button onClick={() => bubbleSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}><Link to="/ReactTypeScriptAlgorithmVisualiser/bubbleSort" style={{ textDecoration: 'none', color: 'white' } }>Bubble</Link></button>
            <button onClick={() => selectionSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}><Link to="/ReactTypeScriptAlgorithmVisualiser/SelectionSort" style={{ textDecoration: 'none', color: 'white' } }>Selection</Link></button>
          </div>
        </div>
        <div className="algoInfoBox">
            <Switch>
              <Route path="/ReactTypeScriptAlgorithmVisualiser/mergeSort" component={() => <SortDataDisplay name="Merge Sort" bestCase = 'n * log(n)' averageCase = 'n * log(n)' worstCase = 'n * log(n)' space = 'n'/>}/>
              <Route path="/ReactTypeScriptAlgorithmVisualiser/quickSort" component={() => <SortDataDisplay name="Quick Sort" bestCase = 'n * log(n)' averageCase = 'n * log(n)' worstCase = 'n ^ 2' space = 'log(n)'/>} />
              <Route path="/ReactTypeScriptAlgorithmVisualiser/bubbleSort" component={() => <SortDataDisplay name="Bubble Sort" bestCase = 'n' averageCase = 'n ^ 2' worstCase = 'n ^ 2' space = '1'/>} />
              <Route path="/ReactTypeScriptAlgorithmVisualiser/selectionSort" component={() => <SortDataDisplay name="Selection Sort" bestCase = 'n ^ 2' averageCase = 'n ^ 2' worstCase = 'n ^ 2' space = '1'/>} />
            </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

