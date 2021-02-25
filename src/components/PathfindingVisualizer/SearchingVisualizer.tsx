import React, {useState, useEffect} from 'react';
import {Node} from './Node/Node';
import './Node/Node.css';
import {dijkstra, getNodesInShortestPathOrder} from '../searchAlgorithms/dijkstra';
import {aStar} from '../searchAlgorithms/aStar'
import './PathfindingVisualizer.css';

const START_NODE_ROW = 17;
const START_NODE_COL = 0;
const FINISH_NODE_ROW = 0;
const FINISH_NODE_COL = 29;

interface nodeData{
  col: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
  mouseIsPressed: boolean;
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

  //creates and renders grid upon page load
  useEffect(() => {
    const newGrid = getInitialGrid()
    setGrid(newGrid);
  }, []) 

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
    console.log( row + " " + col)
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
    if (!mouseIsPressed) return;
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

  const handleMouseUp = () => {
    setPress(false);
    setSPress(false);
    setFPress(false);
  }

  /*algorithms to visualise and animate pathfinding algorithms*/
  const animateDijkstra = (visitedNodesInOrder: any, nodesInShortestPathOrder: any): any => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 30 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        let x = document.getElementById(`node-${node.row}-${node.col}`)
        if(node.isStart == true){
          x!.className = 'node node-start';
        } else if (node.isFinish) {
          x!.className = 'node node-finish';
        } else {
          x!.className = 'node node-visited';
        }
      }, 30 * i);
    }
  }

  const animateShortestPath = (nodesInShortestPathOrder:any) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        let x = document.getElementById(`node-${node.row}-${node.col}`)
        if(node.isStart == true){
          x!.className = 'node node-start';
        } else if (node.isFinish) {
          x!.className = 'node node-finish';
        } else {
          x!.className =  'node node-shortest-path';
        }
      }, 50 * i);
    }
  }

  const visualizeDijkstra = () => {
    const [sRow, sCol] = startPosition;
    const startNode = grid[sRow][sCol];
    const [fRow, fCol] = finishPosition;
    const finishNode = grid[fRow][fCol];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  const visualizeAStar = () => {
    const [sRow, sCol] = startPosition;
    const startNode = grid[sRow][sCol];
    const [fRow, fCol] = finishPosition;
    const finishNode = grid[fRow][fCol];
    const visitedNodesInOrder = aStar(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  /*animate preset*/
  const animatePresetOne = () => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row);
        if((row % 2 == 0 && col % 2 == 0) || (row % 3 == 0 && col % 3 == 0)){
          node.isWall = true;
          let x = document.getElementById(`node-${node.row}-${node.col}`)
          x!.className = 'node node-wall'
        } 
        node.isStart = false;
        node.isFinish = false;
        currentRow.push(node);
      }
      gridOne.push(currentRow);
    }
    const start = gridOne[13][0];
    start.isStart = true;
    const finish = gridOne[1][48];
    finish.isFinish = true;
    setSPosition([13, 0]);
    setFPosition([1, 48]);

    setGrid(gridOne);
  }

  const animatePresetTwo = () => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      let i = 0;
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row);
        if(i%6 == 0 || row % 4 == 0){
          node.isWall = true;
          let x = document.getElementById(`node-${node.row}-${node.col}`)
          x!.className = 'node node-wall' 
        }
        node.isStart = false;
        node.isFinish = false;
        currentRow.push(node);
        i+=1;
      }
      gridOne.push(currentRow);
    }

    for (let row = 0; row < 17; row++) {
      for (let col = 0; col < 49; col++) {
        if((row % 4 == 0 && col % 3 == 0) || (row % 3 == 0 && col % 6 == 0) ){
          const x = gridOne[row][col];
          x.isWall = false;
          let y = document.getElementById(`node-${x.row}-${x.col}`)
          y!.className = 'node' 
        } 
      }
    }

    const additionalWallNodes = [[3,6], [9,6], [4,9], [6,12], [15,12], [8,15], [9,24], [15,24], [6,24], [3,30], [8,27], [9,42], [3,42], [6, 42]];
    
    for(let i = 0; i< additionalWallNodes.length; i++){
      const [r, c] = additionalWallNodes[i];
      const x = gridOne[r][c];
      x.isWall = true;
      let y = document.getElementById(`node-${x.row}-${x.col}`);
      y!.className = 'node node-wall'; 
    }


    const start = gridOne[15][1];
    start.isStart = true;
    const finish = gridOne[1][47];
    finish.isFinish = true;
    setSPosition([15, 1]);
    setFPosition([1, 47]);

    setGrid(gridOne);
  }

  const animatePresetThree = () => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      let i = 0;
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row);
        if(i%3 == 0 || row % 4 == 0){
          node.isWall = true;
          let x = document.getElementById(`node-${node.row}-${node.col}`)
          x!.className = 'node node-wall' 
        }
        node.isStart = false;
        node.isFinish = false;
        currentRow.push(node);
        i+=1;
      }
      gridOne.push(currentRow);
    }

    for (let row = 0; row < 17; row++) {
      for (let col = 0; col < 49; col++) {
        if((row % 4 == 0 && col % 3 == 0) || (row % 3 == 0 && col % 6 == 0) ){
          const x = gridOne[row][col];
          x.isWall = false;
          let y = document.getElementById(`node-${x.row}-${x.col}`)
          y!.className = 'node' 
        } 
      }
    }

    
    const additionalWallNodes = [[15,3], [12,8], [10,3], [8,2], [6,3], [2,9], [4,7], [2,15], 
                                 [5,18], [8,20], [11,21], [13,21], [12,26], [9, 27], [8,29],
                                 [6,27], [4,23], [2,27], [2,33], [2,39], [4,41], [8,41], [10,45],
                                 [8,47], [4,46], [10,15], [12,11], [7,12], [15,27], [13,33], 
                                 [12,35], [7,36], [15,39], [13,45], [12,47]];
    
    for(let i = 0; i< additionalWallNodes.length; i++){
      const [r, c] = additionalWallNodes[i];
      const x = gridOne[r][c];
      x.isWall = false;
      let y = document.getElementById(`node-${x.row}-${x.col}`);
      y!.className = 'node'; 
    }

    const start = gridOne[15][1];
    start.isStart = true;
    const finish = gridOne[1][47];
    finish.isFinish = true;
    setSPosition([15, 1]);
    setFPosition([1, 47]);

    setGrid(gridOne);
  }

  return (
    <>
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
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row:any, col:any) => handleMouseDown(row, col)}
                      onMouseEnter={(row:any, col:any) =>
                        handleMouseEnter(row, col)
                      }
                      onMouseUp={() => handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonbar">
        <button onClick={() => resetGrid(grid)}> Reset Grid </button>
        <button onClick={() => visualizeDijkstra()}> Dijkstra's </button>
        <button onClick={() => visualizeAStar()}> A* </button>
        <button onClick={() => animatePresetOne()}> Preset 1 </button>
        <button onClick={() => animatePresetTwo()}> Preset 2 </button>
        <button onClick={() => animatePresetThree()}> Preset 3 </button>
      </div>
    </>
  );
}

/*Helper function*/
const getInitialGrid = ():any[][] => {
  const grid = [];
  for (let row = 0; row < 18; row++) {
    const currentRow = [];
    for (let col = 0; col <50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col:any, row:any) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    manhatanDistance: Infinity,
    totalCost: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
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
