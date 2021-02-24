import React, {useState, useEffect} from 'react';
import {Node} from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../searchAlgorithms/dijkstra';
import {aStar} from '../searchAlgorithms/aStar'
import './PathfindingVisualizer.css';

const START_NODE_ROW = 19;
const START_NODE_COL = 0;
const FINISH_NODE_ROW = 0;
const FINISH_NODE_COL = 39;

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

  useEffect(() => {
    const newGrid = getInitialGrid()
    setGrid(newGrid);
  }, []) 


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
        x!.className = 'node node-visited';
      }, 30 * i);
    }
  }

  const animateShortestPath = (nodesInShortestPathOrder:any) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        let x = document.getElementById(`node-${node.row}-${node.col}`)
        x!.className =  'node node-shortest-path';
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

  return (
    <>
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
      <button onClick={() => resetGrid(grid)}>
        Reset Grid
      </button>
      <button onClick={() => visualizeDijkstra()}>
        Dijkstra's
      </button>
      <button onClick={() => visualizeAStar()}>
        A*
      </button>
    </>
  );
}

const getInitialGrid = ():any[][] => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 40; col++) {
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
