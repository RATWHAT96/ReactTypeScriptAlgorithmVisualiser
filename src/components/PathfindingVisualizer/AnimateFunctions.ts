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

export const animate = (visitedNodesInOrder: any, nodesInShortestPathOrder: any): any => {
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

export const createNode = (col:any, row:any, sNodeRow: any, sNodeCol: any, fNodeRow:any, fNodeCol:any) => {
    return {
      col,
      row,
      isStart: row === sNodeRow && col === sNodeCol,
      isFinish: row === fNodeRow && col === fNodeCol,
      distance: Infinity,
      manhatanDistance: Infinity,
      totalCost: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  }

  /*animate preset*/
export const animatePresetOne = (sNodeRow: any, sNodeCol: any, fNodeRow:any, fNodeCol:any, setSPosition:Function, setFPosition: Function, setGrid: Function) => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row, sNodeRow, sNodeCol, fNodeRow, fNodeCol);
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

export const animatePresetTwo = (sNodeRow: any, sNodeCol: any, fNodeRow:any, fNodeCol:any, setSPosition:Function, setFPosition: Function, setGrid: Function) => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      let i = 0;
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row, sNodeRow, sNodeCol, fNodeRow, fNodeCol);
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
  
export const animatePresetThree = (sNodeRow: any, sNodeCol: any, fNodeRow:any, fNodeCol:any, setSPosition:Function, setFPosition: Function, setGrid: Function) => {
    const gridOne = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      let i = 0;
      for (let col = 0; col < 49; col++) {
        const node = createNode(col, row, sNodeRow, sNodeCol, fNodeRow, fNodeCol);
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
}

    