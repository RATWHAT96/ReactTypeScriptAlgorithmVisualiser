//REDO TYPING OF ALL FUNCTION PARAMETERS
export function dijkstra(grid:any, startNode:any, finishNode:any) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.isWall) continue;
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

//sorts nodes in acsending order based on their distance property
function sortNodesByDistance(unvisitedNodes:any) {
  //.sort compare function used to decide sorting role
  unvisitedNodes.sort((nodeA:any, nodeB:any) => nodeA.distance - nodeB.distance);
}

//updates the neighbors with distance from start and pointer to previous node
function updateUnvisitedNeighbors(node:any, grid:any) {
  const unvisitedNeighbors: any[] = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

//returns an array of all potential neighbor nodes 
function getUnvisitedNeighbors(node:any, grid:any) {
  const neighbors: any[] = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}

//creates an array with all the nodes in a grid
function getAllNodes(grid:any) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

//returns an array of nodes starting from the finishedNode to the startNode.
export function getNodesInShortestPathOrder(finishNode:any) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
