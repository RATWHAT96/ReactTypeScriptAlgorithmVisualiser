import React from 'react';
import { generateArray, mergeSort, quickSort, bubbleSort, selectionSort } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 25;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'grey';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component<any, any> {
  constructor(props: any[]) {
    super(props);

    //this.state,array will contain the height values of the array
    this.state = {
      array: [],
    };
  }

  resetArr() {
    this.setState({array: generateArray(NUMBER_OF_ARRAY_BARS)});
  }

  //is invoked immediately after a component is mounted (inserted into the tree).
  componentDidMount() {
    this.resetArr();
  }

  
  
  render() {
    const {array} = this.state;

    return (
      <div className="main">
        <div className="array-container">
          {array.map((value: number, idx: number) => (//.map() function allows you to get index with second parameter
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
                height: '70vh',
              }}></div>
        </div>
        <div className="centreDiv">
          <div className="buttonbar">
            <button onClick={() => this.resetArr()}>Generate New Array</button>
            <button onClick={() => mergeSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Merge Sort</button>
            <button onClick={() => quickSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Quick Sort</button>
            <button onClick={() => bubbleSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Bubble Sort</button>
            <button onClick={() => selectionSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS)}>Selection Sort</button>
          </div>
        </div>
      </div>
    );
  }
}

