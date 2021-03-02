export function Graphs() {

    return(
        <div style={{lineHeight:"2.5vw"}} >  
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2vw"}}>
                <h1 style={{fontSize:"3vw", margin:"0"}}>Graphs</h1>
            </div>  
            <div style={{width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                <p style={{fontSize:"2vw", width:"80vw", textAlign:"start" }}>
                    A graph consists of a finite set of vertices or nodes and a set of edges connecting these vertices.
                    The order of a graph is the number of vertices in the graph. The size of a graph is the number of edges in the graph.
                    Two nodes are said to be adjacent if they are connected to each other by the same edge.
                    Directed Graphs
                    A graph G is said to be a directed graph if all its edges have a direction indicating what is the start vertex and what is the end vertex.
                    We say that (u, v) is incident from or leaves vertex u and is incident to or enters vertex v.
                    Self-loops: Edges from a vertex to itself.
                    Undirected Graphs
                    A graph G is said to be an undirected graph if all its edges have no direction. It can go in both ways between the two vertices.
                    If a vertex is not connected to any other node in the graph, it is said to be isolated.
                </p>
                <h2 style={{fontSize:"2vw", width:"80vw", textAlign:"start", marginBottom:"0"}}>
                    Applications of Graphs:
                </h2>
                <ul style={{fontSize:"2vw", width:"80vw", textAlign:"start"}}>
                    <li>Used to represent social media networks. Each user is a vertex, and when users connect they create an edge.</li>
                    <li>Used to represent web pages and links by search engines. Web pages on the internet are linked to each other by hyperlinks. Each page is a vertex and the hyperlink between two pages is an edge.</li> 
                    <li>Used for Page Ranking in Google.</li>
                    <li>Used to represent locations and routes in GPS. Locations are vertices and the routes connecting locations are edges. Used to calculate the shortest route between two locations.</li>
                </ul>
                <img style={{width:"70vw", height:"35vw", display:"none"}}></img>
            </div>
        </div>
    );
}

export function Trees() {

    return(
        <>  
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2vw"}}>
                <h1 style={{fontSize:"3vw", margin:"0"}}>Tree</h1>
            </div>  
            <div style={{width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                <p style={{fontSize:"2vw", width:"80vw", textAlign:"start"}}>
                    A tree is a hierarchical structure where data is organized hierarchically and are linked together. This structure is different than a linked list whereas, in a linked list, items are linked in a linear order.
                    Various types of trees have been developed throughout the past decades, in order to suit certain applications and meet certain constraints. Some examples are binary search tree, B tree, treap, red-black tree, splay tree, AVL tree and n-ary tree.
                    Binary Search Trees
                    A binary search tree (BST), as the name suggests, is a binary tree where data is organized in a hierarchical structure. This data structure stores values in sorted order.
                    Every node in a binary search tree comprises the following attributes.
                    key: The value stored in the node.
                    left: The pointer to the left child.
                    right: The pointer to the right child.
                    p: The pointer to the parent node.
                    A binary search tree exhibits a unique property that distinguishes it from other trees. This property is known as the binary-search-tree property.
                    Let x be a node in a binary search tree.
                    If y is a node in the left subtree of x, then y.key ≤ x.key
                    If y is a node in the right subtree of x, then y.key ≥ x.key
                </p>
                <h2 style={{fontSize:"2vw", width:"80vw", textAlign:"start", marginBottom:"0"}}>
                    Applications of Trees:
                </h2>
                <ul style={{fontSize:"2vw", width:"80vw", textAlign:"start"}}>
                    <li>Binary Trees: Used to implement expression parsers and expression solvers.</li>
                    <li>Binary Search Tree: used in many search applications where data are constantly entering and leaving.</li> 
                    <li>Heaps: used by JVM (Java Virtual Machine) to store Java objects.</li>
                    <li>Treaps: used in wireless networking.</li>
                </ul>
                <img style={{width:"70vw", height:"35vw", display:"none"}}></img>
            </div>
        </>
    );
}