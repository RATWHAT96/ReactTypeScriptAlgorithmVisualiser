import {sortData} from './SortDataDisplay'


export const SortDataOne:sortData = {
    name: "Merge Sort",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    descripOne: "This sorting algorithm works by dividing the array to be sorted into two halves." ,
    descripTwo: "It will then continue to divide each of these two new subarrays into further halves.",
    descripThree: "This will continue until the array is split into individual elements.",
    descripFour: "The individual elements will then be compared and combined two create a new sorted subarray.",
    descripFive: "This process will continue til all the entire subarrays are sorted and will result in an sorted array.",
    descripSix: "",
    descripSeven: "",
    displayPoint:"none",
    bestCase: "n * log(n)",
    averageCase: "n * log(n)",
    worstCase: "n * log(n)",
    space: "n"
}

export const SortDataTwo:sortData = {
    name: "Quick Sort",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    descripOne: "This sorting algorithm works by selecting a value in the array to act as the pivot value." ,
    descripTwo: "The pivot value will be used to sort the array and each value in the array will be compared to the pivot.",
    descripThree: "The pivot value in the above visualizer  was chosen to be the value at the middle position of the array (highlighted in blue).",
    descripFour: "If the value is greater than the pivot it will be put into one subarray (subarray1) and if it is smaller it will be added to another (subarray2).",
    descripFive: "Once all the values are sorted, a new array is created by combining the two sub arrays and the pivot value, which is positioned between subarray1 and subarray2.",
    descripSix: "The same process will be repeated on the new array until the array is completely sorted in ascending  order.",
    descripSeven: "The position of the pivot value in the array is not important but it must remain consistent through each sort.",
    displayPoint:"default",
    bestCase: "n * log(n)",
    averageCase: "n * log(n)",
    worstCase: "n^2",
    space: "log(n)"
}

export const SortDataThree:sortData = {
    name: "Bubble Sort",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    descripOne: "This sorting algorithm works by comparing the elements in an array that are next to each other." ,
    descripTwo: "If an element is greater than the element adjacent to it, then their positions are swapped and the next two elements are compared.",
    descripThree: "If it is not greater than the element adjacent, then no swap occurs and the next two elements are compared.",
    descripFour: "Once the final two elements in the array are compared, the process will repeat from the beginning of the array until the array is sorted.",
    descripFive: "Each iteration guarantees that the final element swapped will be in the correct position.",
    descripSix: "",
    descripSeven: "",
    displayPoint:"none",
    bestCase: "n",
    averageCase: "n^2",
    worstCase: "n^2",
    space: "1"
}

export const SortDataFour:sortData = {
    name: "Selection Sort",
    image: './media/sortingAlgorithms/mergeSort.PNG',
    display: "none",
    descripOne: "This sorting algorithm starts by comparing the first two elements at the beginning of the array." ,
    descripTwo: "It moves the smaller element to the start of the array and the next elements are then compared.",
    descripThree: "This element is moved down the list depending on its relative size to adjacent elements.",
    descripFour: "This process is continued until the array is sorted.",
    descripFive: "",
    descripSix: "",
    descripSeven: "",
    displayPoint:"none",
    bestCase: "n^2",
    averageCase: "n^2",
    worstCase: "n^2",
    space: "1"
}