export function aStar(grid:any, startNode:any, finishNode:any) {
    addManhatanDistance(grid, finishNode);
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    startNode.totalCost = startNode.distance + startNode.manhatanDistance;
    const unvisitedNodes = getAllNodes(grid);
    while (!!unvisitedNodes.length) {
      sortNodesByTotalCost(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();
      if (closestNode.isWall) continue;
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, grid);
    }
}

function manhatanDistance(currNode: any, finishNode: any): number {
  const manhatanDistance = Math.sqrt((Math.pow((finishNode.col-currNode.col), 2) - Math.pow((finishNode.row - currNode.row), 2)));
  return manhatanDistance;
}

function addManhatanDistance(grid: any, finishNode: any) {
  for (const row of grid) {
    for (const node of row) {
      node.manhatanDistance = manhatanDistance(node, finishNode);
      //console.log("mDis " + node.manhatanDistance);
    }
  }
}

//sort function that sorts node by total cost in ascending order
function sortNodesByTotalCost(unvisitedNodes:any) {
  unvisitedNodes.sort((nodeA:any, nodeB:any) => nodeA.totalCost - nodeB.totalCost);
}
  
function updateUnvisitedNeighbors(node:any, grid:any) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.totalCost = neighbor.distance + neighbor.manhatanDistance;
    neighbor.previousNode = node;
  }
}
  
function getUnvisitedNeighbors(node:any, grid:any) {
  const neighbors = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getAllNodes(grid:any) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
  
export function getNodesInShortestPathOrder(finishNode:any) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
  