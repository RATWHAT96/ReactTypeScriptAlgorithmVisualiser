import React, {useState, useEffect} from 'react';
import {Node} from './Node/Node';
import './Node/Node.css';
import {animate, createNode, animatePresetOne, animatePresetTwo, animatePresetThree} from './AnimateFunctions';
import {dijkstra, getNodesInShortestPathOrder} from '../searchAlgorithms/dijkstra';
import {aStar} from '../searchAlgorithms/aStar';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './PathfindingVisualizer.css';
import {PathDataDisplay} from './PathFindingDataDisplay';
import {pathDataOne, pathDataTwo} from './PathFindingDisplayData'

const START_NODE_ROW = 8;
const START_NODE_COL = 0;
const FINISH_NODE_ROW = 8;
const FINISH_NODE_COL = 48;

interface nodeData{
  col: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
  
  onMouseDown: Function;
  onMouseEnter: Function;
  onMouseUp: Function;
  row: number;
}

export const SearchingVisualizer = () => {
  const [grid, setGrid] = useState<any[][]>([['']]);
  const [mouseIsPressed, setPress] = useState(false);
  const [startPressed, setSPress] = useState(false);
  const [finishPressed, setFPress] = useState(false);
  const [startPosition, setSPosition] = useState([START_NODE_ROW, START_NODE_COL]);
  const [finishPosition, setFPosition] = useState([FINISH_NODE_ROW, FINISH_NODE_COL]);
  const [clicked, setClicked] = useState(false);
  const [sort, setSort] = useState("");


  //creates and renders grid upon page load
  useEffect(() => {
    const newGrid = getInitialGrid()
    setGrid(newGrid);
  }, []) 

  useEffect(() => {
    if(sort=="dijkstra"){
      visualizeDijkstra();
    } else if (sort=="a*") {
      visualizeAStar();
    } else {
      
    }
  }, [clicked]) 

  const resetGrid = (grid:any) => {
    //need to reset node distance, total cost and the node colors
    for (const row of grid) {
      for (const node of row) {
        if (node.isVisited){
          node.distance = Infinity;
          node.totalCost = Infinity;
          let x = document.getElementById(`node-${node.row}-${node.col}`)
          if (node.isStart){
            x!.className =  'node node-start';
          } else if (node.isFinish){
            x!.className =  'node node-finish';
          } else {
            x!.className =  'node';
          }
          node.isVisited = false;
        }
      }
    }
  }

  /*mouse handlers for grid interactions*/
  const handleMouseDown = (row: any, col: any) => {
    const node = grid[row][col];
    if (node.isStart){
      setSPress(true);
      setSPosition([row, col]);
    } else if (node.isFinish) {
      setFPress(true);
      setFPosition([row, col]);
    } else {
      const newGrid = getNewGridWithWallToggled(grid, row, col);
      setGrid(newGrid);
    }
    setPress(true);
  }

  const handleMouseEnter = (row: any, col: any) => {
    if (mouseIsPressed == false) return;
    if(startPressed){
        const newGrid = getNewGridWithStartToggled(grid, row, col, startPosition);
        setGrid(newGrid);
        setSPosition([row, col]);
    } else if (finishPressed){
        const newGrid = getNewGridWithFinishToggled(grid, row, col, finishPosition);
        setGrid(newGrid);
        setFPosition([row, col]);
    } else {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
    }
  }

  const handleMouseUp = (row: any, col: any) => {
    setPress(false);
    setSPress(false);
    setFPress(false);
  }

  const visualizeDijkstra = () => {
    const [sRow, sCol] = startPosition;
    const startNode = grid[sRow][sCol];
    const [fRow, fCol] = finishPosition;
    const finishNode = grid[fRow][fCol];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animate(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  const visualizeAStar = () => {
    const [sRow, sCol] = startPosition;
    const startNode = grid[sRow][sCol];
    const [fRow, fCol] = finishPosition;
    const finishNode = grid[fRow][fCol];
    const visitedNodesInOrder = aStar(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animate(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  return (
    <>
    <Router>
      <div className="buttonbar">
        <div className="key">
          <p>Start Node</p>
          <div className="node node-start"></div>
        </div>
        <div className="key">
          <p>Finish Node</p>
          <div className="node node-finish"></div>
        </div>
        <div className="key">
          <p>Wall Node</p>
          <div className="node node-wall"></div>
        </div>
      </div>
      <div className="grid_container">
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="nodeRow">
                {row.map((node:any, nodeIdx:any) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      
                      onMouseDown={(row:any, col:any) => handleMouseDown(row, col)}
                      onMouseEnter={(row:any, col:any) => handleMouseEnter(row, col)}
                      onMouseUp={(row:any, col:any) => handleMouseUp(row, col)}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonbar">
        <button onClick={() => {setSort("reset");setClicked(false); resetGrid(grid)}}> Reset Grid </button>
        <Link to="/dijkstra" style={{ textDecoration: 'none', color: 'white' }}><button disabled={clicked} onClick={() => {setSort("dijkstra"); setClicked(true)}}> Dijkstra's </button></Link>
        <Link to="/astar" style={{ textDecoration: 'none', color: 'white' }}><button disabled={clicked} onClick={() => {setSort("a*"); setClicked(true)}}> A* </button></Link>
        <button disabled={clicked} onClick={() => {animatePresetOne(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 1 </button>
        <button disabled={clicked} onClick={() => {animatePresetTwo(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 2 </button>
        <button disabled={clicked} onClick={() => {animatePresetThree(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 3 </button>
      </div>
      <div className="algoInfoBox">
          <Switch>
            <Route path="/dijkstra" component={() => <PathDataDisplay name={pathDataOne.name} description={pathDataOne.description} descripOne={pathDataOne.descripOne} descripTwo={pathDataOne.descripTwo} descripThree={pathDataOne.descripThree} descripFour={pathDataOne.descripFour} descripFive={pathDataOne.descripFive} descripSix={pathDataOne.descripSix} descripSeven={pathDataOne.descripSeven} displayPoint={pathDataOne.displayPoint} image={pathDataOne.image} display={pathDataOne.display} />}/>
            <Route path="/astar" component={() => <PathDataDisplay name={pathDataTwo.name} description={pathDataTwo.description} descripOne={pathDataTwo.descripOne} descripTwo={pathDataTwo.descripTwo} descripThree={pathDataTwo.descripThree} descripFour={pathDataTwo.descripFour} descripFive={pathDataTwo.descripFive} descripSix={pathDataTwo.descripSix} descripSeven={pathDataTwo.descripSeven} displayPoint={pathDataTwo.displayPoint} image={pathDataTwo.image} display={pathDataTwo.display} />}/>
          </Switch>
      </div> 
    </Router>
    </>
  );
}

/*Helper function*/
const getInitialGrid = ():any[][] => {
  const grid = [];
  for (let row = 0; row < 17; row++) {
    const currentRow = [];
    for (let col = 0; col <49; col++) {
      currentRow.push(createNode(col, row, START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL));
    }
    grid.push(currentRow);
  }
  return grid;
};

const getNewGridWithWallToggled = (grid:any, row:any, col:any) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithStartToggled = (grid:any, newRow:any, newCol:any, startPosition:number[]) => {
  const newGrid = grid.slice();
  const [oldRow, oldCol] = startPosition;
  let node = newGrid[oldRow][oldCol];
  let newNode = {
    ...node,
    isStart: !node.isStart,
  };
  newGrid[oldRow][oldCol] = newNode;
  node = newGrid[newRow][newCol];
  newNode = {
    ...node,
    isStart: !node.isStart,
  };
  newGrid[newRow][newCol] = newNode;
  return newGrid;
};

const getNewGridWithFinishToggled = (grid:any, newRow:any, newCol:any, finishPosition:number[]) => {
  const newGrid = grid.slice();
  const [oldRow, oldCol] = finishPosition;
  let node = newGrid[oldRow][oldCol];
  let newNode = {
    ...node,
    isFinish: !node.isFinish,
  };
  newGrid[oldRow][oldCol] = newNode;
  node = newGrid[newRow][newCol];
  newNode = {
    ...node,
    isFinish: !node.isFinish,
  };
  newGrid[newRow][newCol] = newNode;
  return newGrid;
};