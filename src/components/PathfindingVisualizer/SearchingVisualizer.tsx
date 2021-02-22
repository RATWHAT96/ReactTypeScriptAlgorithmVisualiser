import React, {useState, useEffect} from 'react';
import {Node} from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../searchAlgorithms/dijkstra';
import './PathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 30;

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

  useEffect(() => {
    const newGrid = getInitialGrid()
    setGrid(newGrid);
  }, []) 


  const handleMouseDown = (row: any, col: any) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setPress(true);
  }

  const handleMouseEnter = (row: any, col: any) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }

  const handleMouseUp = () => {
    setPress(false);
  }

  const animateDijkstra = (visitedNodesInOrder: any, nodesInShortestPathOrder: any): any => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        let x = document.getElementById(`node-${node.row}-${node.col}`)
        x!.className = 'node node-visited';
      }, 10 * i);
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

    // figure out why this is not working properly when button is pressed
  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
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
        <button onClick={() => visualizeDijkstra()}>
          Dijkstra's
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
