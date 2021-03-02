import {dataStructureData} from './DataStructureDisplay'

export const DisplayDataTwo:dataStructureData = {
    name: "Arrays",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "An array is a linear data structure of fixed-size, which can hold items of the same data type. " 
    + "Arrays are indexed, meaning that random access is possible. "
    + "They are used as the building blocks to build other data structures such as array lists, heaps and hash tables. "
    + "They are also commonly used in different sorting algorithms such as insertion sort, quick sort, bubble sort and merge sort.",
    averageAccess: "1",
    averageSearch: "n",
    averageInsertDelete: "n",
    worstAccess: "1",
    worstSearch: "n",
    worstInsertDelete: "n",
}

export const DisplayDataThree:dataStructureData = {
    name: "Linked Lists",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "A linked list is a linear and sequential structure that consists of a sequence of items which are linked to each other. "
    + "Each item is a node with a value and a pointer to the next node in the sequence. "
    + "The head attribute of a linked list refers to the first node in the linked list and "
    + "the tail attribute is the final node in the linked list. " 
    + "Hence, you have to access data sequentially and random access is not possible. "
    + "There three types of linked lists: Singly, Doubly, Cicular. "
    + "Singly linked lists are can only be traversed in one direction, "
    + "Doubly linked lists can be traversed in both directions and Circular " 
    + "linked lists where the prev pointer of the head points to the tail and the next pointer of the tail points to the head. "
    + "Commonly used to create stacks and queues as well as in switching between programs using Alt + Tab (implemented using Circular Linked List).", 
    averageAccess: "n",
    averageSearch: "n",
    averageInsertDelete: "1",
    worstAccess: "n",
    worstSearch: "n",
    worstInsertDelete: "1",
}

export const DisplayDataFour:dataStructureData = {
    name: "Stacks",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "A stack is a linear and Last In First Out (LIFO) structure. This means that the the element added last to the strucutre is the element accessed first. "
    + "The two basic operations that can be performed on a stacvk are Push (Insert an element on to the top of the stack) and Pop (Delete the topmost element and return it). "
    + "The Peek (Return the top element of the stack without deleting it), isEmpty (Check if the stack is empty) and isFull (Check if the stack is full) are common additional functions used with stacks. "
    + "Stacks are commonly used to in functional calls in recursive programming.",
    averageAccess: "n",
    averageSearch: "n",
    averageInsertDelete: "1",
    worstAccess: "n",
    worstSearch: "n",
    worstInsertDelete: "1",
}

export const DisplayDataFive:dataStructureData = {
    name: "Queues",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "A queue is a linear and First in First Out (FIFO) data structure. This means that the element added first can be accessed first. "
    + "Two common queue operations are Enqueue (Insert an element to the end of the queue) and Dequeue (Delete the element from the beginning of the queue). "
    + "Queues are commonly used for thread management in multithreading.",
    averageAccess: "n",
    averageSearch: "n",
    averageInsertDelete: "1",
    worstAccess: "n",
    worstSearch: "n",
    worstInsertDelete: "1",
}

export const DisplayDataSix:dataStructureData = {
    name: "Hashmap",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "A Hashmap is a data structure that stores values which have keys associated with each of them. Furthermore, it supports lookup efficiently if we know the key associated with the value. Hence it is very efficient in inserting and searching, irrespective of the size of the data. "
    + "Direct Addressing uses the one-to-one mapping between the values and keys when storing in a table. However, there is a problem with this approach when there is a large number of key-value pairs. The table will be huge with so many records and may be impractical or even impossible to be stored, given the memory available on a typical computer. To avoid this issue we use hash tables. "
    + "A special function named as the hash function (h) is used to overcome the aforementioned problem in direct addressing. "
    + "Hashmaps are commonly used to implement database indexes.",
    averageAccess: "N/A",
    averageSearch: "1",
    averageInsertDelete: "1",
    worstAccess: "N/A",
    worstSearch: "n",
    worstInsertDelete: "n",
}


export const DisplayDataSeven:dataStructureData = {
    name: "Graphs",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "Graphs",
    averageAccess: "",
    averageSearch: "",
    averageInsertDelete: "",
    worstAccess: "",
    worstSearch: "",
    worstInsertDelete: "",
}

export const DisplayDataEight:dataStructureData = {
    name: "Trees",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "Trees",
    averageAccess: "",
    averageSearch: "",
    averageInsertDelete: "",
    worstAccess: "",
    worstSearch: "",
    worstInsertDelete: "",
}

export const DisplayDataNine:dataStructureData = {
    name: "Heaps",
    image: './media/dataStructures/overview.PNG',
    display: "none",
    description: "Heaps",
    averageAccess: "",
    averageSearch: "",
    averageInsertDelete: "",
    worstAccess: "",
    worstSearch: "",
    worstInsertDelete: "",
}