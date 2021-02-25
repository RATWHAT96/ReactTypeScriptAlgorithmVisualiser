import React, {useState, useEffect} from 'react';
import {Node} from './Node/Node';
import './Node/Node.css';
import {animate, createNode, animatePresetOne, animatePresetTwo, animatePresetThree} from './AnimateFunctions';
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
    if (!mouseIsPressed) return;
    if(startPressed){
      const [oldRow, oldCol] = startPosition;
      let node = grid[oldRow][oldCol];
      node.isStart = !node.isStart;
      node = grid[row][col];
      node.isStart = !node.isStart;
      setSPosition([row, col]);
    } else if (finishPressed){
      const [oldRow, oldCol] = startPosition;
      let node = grid[oldRow][oldCol];
      node.isFinish = !node.isFinish;
      node = grid[row][col];
      node.isFinish = !node.isFinish;
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
        <button disabled={clicked} onClick={() => {setSort("dijkstra"); setClicked(true)}}> Dijkstra's </button>
        <button disabled={clicked} onClick={() => {setSort("a*"); setClicked(true)}}> A* </button>
        <button disabled={clicked} onClick={() => {animatePresetOne(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 1 </button>
        <button disabled={clicked} onClick={() => {animatePresetTwo(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 2 </button>
        <button disabled={clicked} onClick={() => {animatePresetThree(START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, setSPosition, setFPosition, setGrid)}}> Preset 3 </button>
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

