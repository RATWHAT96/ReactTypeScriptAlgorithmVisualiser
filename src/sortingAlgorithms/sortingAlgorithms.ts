import {getMergeSortAnimations} from './getMergeSortAnimations';
import { getBubbleSortAnimations } from "./getBubbleSortAnimations";
import {getQuickSortAnimations} from './getQuickSortAnimations';
import {getSelectionSortAnimations} from './getSelectionSortAnimations';

export function generateArray(numOfArrayBars: number): number[] {
    let arr = [];
    for (let i = 0; i < numOfArrayBars; i++) {
      var x = randomIntFromInterval(10, 55);
      arr.push(x);
    }
    return arr;
}

export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function mergeSort(arr: number[], colorTwo: string, colorOne: string, animationSpeed: number) {
    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? colorTwo : colorOne;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}vh`;
          arrayBars[barOneIdx].innerHTML = `${newHeight}`;
        }, i * animationSpeed);
      }
    } 
  }

export function quickSort(arr: number[], colorTwo: string, colorOne: string, animationSpeed: number) {
    const animations = getQuickSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;

      const isColorChangeOne = i % 3 == 0;
      const isColorChangeTwo = i % 3 == 1;
      const [newHeight, barIdx] = animations[i];
      const barStyle = arrayBars[barIdx].style;
      if (isColorChangeOne) {
        setTimeout(() => {
          barStyle.backgroundColor = colorTwo;
        }, i * animationSpeed);
      } else if (isColorChangeTwo) {
        setTimeout(() => {
          barStyle.height = `${newHeight}vh`;
          arrayBars[barIdx].innerHTML = `${newHeight}`;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          barStyle.backgroundColor = colorOne;
        }, i * animationSpeed);
      }
    }
  }

export function bubbleSort(arr: number[], colorTwo: string, colorOne: string, animationSpeed: number) {
    const animations = getBubbleSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? colorTwo : colorOne;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [newHeightOne, newHeightTwo] = animations[i];
          const [barOneIdx, barTwoIdx] = animations[i-1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeightOne}vh`;
          arrayBars[barOneIdx].innerHTML = `${newHeightOne}`;
          barTwoStyle.height = `${newHeightTwo}vh`;
          arrayBars[barTwoIdx].innerHTML = `${newHeightTwo}`;
        }, i * animationSpeed);
      }
    }
  }

export function selectionSort(arr: number[], colorTwo: string, colorOne: string, animationSpeed: number) {
    const animations = getSelectionSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? colorTwo : colorOne;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [newHeightOne, newHeightTwo] = animations[i];
          const [barOneIdx, barTwoIdx] = animations[i-1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeightOne}vh`;
          arrayBars[barOneIdx].innerHTML = `${newHeightOne}`;
          barTwoStyle.height = `${newHeightTwo}vh`;
          arrayBars[barTwoIdx].innerHTML = `${newHeightTwo}`;
        }, i * animationSpeed);
      }
    }
  }