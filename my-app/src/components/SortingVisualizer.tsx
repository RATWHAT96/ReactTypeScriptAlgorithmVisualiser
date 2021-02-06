import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/getMergeSortAnimations';
import { getBubbleSortAnimations } from "../sortingAlgorithms/getBubbleSortAnimations";
import {getQuickSortAnimations} from '../sortingAlgorithms/getQuickSortAnimations';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component<any, any> {
  constructor(props: any[]) {
    super(props);

    //this.state,array will contain the height values of the array
    this.state = {
      array: [],
    };
  }

  //is invoked immediately after a component is mounted (inserted into the tree).
  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(2, 90));
    }
    this.setState({array});
  }

  //this is actually doing the animations using the logged changes
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    for(let i = 0; i < this.state.array.length; i++){
      console.log(this.state.array[i] + " array");
    }
    const animations = getQuickSortAnimations(this.state.array);
    for(let i = 0; i < animations.length; i++){
      console.log(animations[i] + " animation");
    }
    console.log("animationsLength:");
    console.log(animations.length);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;

      setTimeout(() => {
        const [newHeight, barIdx] = animations[i];
        const barStyle = arrayBars[barIdx].style;
        barStyle.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          const [newHeight, barIdx] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}vh`;
          setTimeout(() => {
            const [newHeight, barIdx] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);  
        }, i * ANIMATION_SPEED_MS);
      }, i * ANIMATION_SPEED_MS);
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [newHeightOne, newHeightTwo] = animations[i];
          const [barOneIdx, barTwoIdx] = animations[i-1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeightOne}vh`;
          barTwoStyle.height = `${newHeightTwo}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  /*
  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }
  */

  render() {
    const {array} = this.state;

    return (
      <div>
        <div className="wrapper">
          <div className="buttonbar">
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </div>
        </div>
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
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}