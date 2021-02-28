import React, {useState, useEffect, useRef} from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { generateArray, generateArrayWithNums, mergeSort, quickSort, bubbleSort, selectionSort } from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';
import {SortDataDisplay} from '../algoDataDisplay/SortDataDisplay';
import {SortDataOne, SortDataTwo, SortDataThree, SortDataFour} from '../algoDataDisplay/SortDisplayData'

const ANIMATION_SPEED_MS = 200;
const NUMBER_OF_ARRAY_BARS = 10;
const PRIMARY_COLOR = 'grey';
const SECONDARY_COLOR = 'turquoise';

export const SortingVisualizer = () => {

  const [array, setArray] = useState<number[]>([0]);
  const [clicked, setClicked] = useState(false);
  const [sort, setSort] = useState("");

  const resetArr = () => {
    const newArr = generateArray(NUMBER_OF_ARRAY_BARS);
    setArray(newArr);
  }

  const resetHeightNums = () => {
    const newArr = generateArrayWithNums(NUMBER_OF_ARRAY_BARS);
    setArray(newArr);
  }

  useEffect(() => {
    resetArr();
  }, []) 

  //used to disbale sort buttons when a sort is running & and enable once new array is pressed
  useEffect(() => {
    if(sort=="merge"){
      mergeSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS);
    } else if (sort=="quick") {
      quickSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS);
    }
    else if (sort=="bubble") {
      bubbleSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS);
    }
    else if (sort=="selection") {
      selectionSort(array, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_SPEED_MS);
    } else {
      
    }
  }, [clicked]) 

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
        <div
            style={{
              backgroundColor: 'white',
              height: `${55}vh`,
              color: 'white',
              width: '1px',
              display: 'inline-block',
              margin: '0 2px'
            }}> 0 </div>
      </div>
      <div className="centreDiv">
        <div className="buttonbar">
          <button onClick={() => {setSort("reset");setClicked(false); resetHeightNums();}}>New Array</button>
          <Link to="/mergeSort" style={{ textDecoration: 'none', color: 'white' } }><button disabled={clicked} onClick={() => {setSort("merge"); setClicked(true)}}>Merge</button></Link>
          <Link to="/quickSort" style={{ textDecoration: 'none', color: 'white' }}><button  disabled={clicked} onClick={() => {setSort("quick"); setClicked(true)}}>Quick</button></Link>
          <Link to="/bubbleSort" style={{ textDecoration: 'none', color: 'white' } }><button  disabled={clicked} onClick={() => {setSort("bubble"); setClicked(true);}}>Bubble</button></Link>
          <Link to="/SelectionSort" style={{ textDecoration: 'none', color: 'white' } }><button disabled={clicked} onClick={() => {setSort("selection"); setClicked(true);}}>Selection</button></Link>
        </div>
      </div>
      <div className="algoInfoBox">
          <Switch>
            <Route path="/mergeSort" component={() => <SortDataDisplay name={SortDataOne.name} description={SortDataOne.description} bestCase = {SortDataOne.bestCase} averageCase = {SortDataOne.averageCase} worstCase = {SortDataOne.worstCase} space = {SortDataOne.space} />}/>
            <Route path="/quickSort" component={() => <SortDataDisplay name={SortDataTwo.name} description={SortDataTwo.description} bestCase = {SortDataTwo.bestCase} averageCase = {SortDataTwo.averageCase} worstCase = {SortDataTwo.worstCase} space = {SortDataTwo.space}  />}/>
            <Route path="/bubbleSort" component={() => <SortDataDisplay name={SortDataThree.name} description={SortDataThree.description} bestCase = {SortDataThree.bestCase} averageCase = {SortDataThree.averageCase} worstCase = {SortDataThree.worstCase} space = {SortDataThree.space}  />}/>
            <Route path="/selectionSort" component={() => <SortDataDisplay name={SortDataFour.name} description={SortDataFour.description} bestCase = {SortDataFour.bestCase} averageCase = {SortDataFour.averageCase} worstCase = {SortDataFour.worstCase} space = {SortDataFour.space}  />}/>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

