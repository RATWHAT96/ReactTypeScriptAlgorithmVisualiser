import {pathData} from './PathFindingDataDisplay'


export const pathDataOne:pathData = {
    name: "Dijksta's",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    description: "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph. "
    + "The algorithm applys to graphs that Dijkstra's algorithm is applicable to graphs that are both " 
    + "directed and undirected and have no edges with negative weights. "
    + "Space Complexity is usually O(V). (V = number of vertices & E = number of edges). "
    + "Time Complexity of Dijkstra's Algorithm is O(V^2) "
    + "but with min-priority queue it drops down to O(V+ElogV)s.",
    descripOne: "All vertices are first added to a set of unvisited vertices.",
    descripTwo: "Set the start vertex's distance from the start vertex (SV) to zero and all other vertex's distance from the SV to infinity.",
    descripThree: "The distances are set to infinity as the distance from the SV is currently unknown and will be determined by the edges connecting a vertex to the SV.",
    descripFour:  "Add the start vertex to the visited list and set all the neighbouring vertices to the minimum distance from the SV to the weight of the connecting edge.",
    descripFive: "Sort the list of unvisted vertices by there distance from the source with the smallest distance being first.",
    descripSix: "Remove the first vertex in the sorted unvisted set, add it to the list of visited vertices and repeat steps 4 and 5.",
    descripSeven: "Continue to do this until the finish vetrex is reached or the set of unvisted nodes is empty.", 
    displayPoint:"default",
}

export const pathDataTwo:pathData = {
    name: "A*",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    description:"The A* algorithm is a searching algorithm that searches "
    + "for the shortest path between the initial and the final state. "
    + "The algorithm is similar to Dijkstra's algorithm but it considers"
    + " both the distance from the start vertex and the estimated cost to the finish vertex "
    + "to determine the order of updating unvisited nodes. " 
    + "The estimated cost to the finish vertex can be represented by different values. In the above graph it is represent by the euclidian distance to the start node. "
    + "The time and space complextity of A star will depend on what heuristic is used to represent the estimated cost (EC) to the finish vertex.",
    descripOne: "All vertices are first added to a set of unvisited vertices.  All the vertex's should also have an estimated cost to the current vertex.",
    descripTwo: "Set the start vertex's distance from the start vertex (SV) to zero and all other vertex's distance from the SV to infinity.",
    descripThree: "The distances are set to infinity as the distance from the SV is currently unknown and will be determined by the edges connecting a vertex to the SV.",
    descripFour:  "Add the start vertex to the visited list and set the total cost to travel to each neighbouring vertex as the minimum distance from the SV plus the EC",
    descripFive: "Sort the list of unvisted vertices by there total cost to traverse with the lowest cost being first.",
    descripSix: "Remove the first vertex in the sorted unvisted set, add it to the list of visited vertices and repeat steps 4 and 5.",
    descripSeven: "Continue to do this until the finish vetrex is reached or the set of unvisted nodes is empty.",
    displayPoint:"default",
}

