import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getMergeSortAnimations } from './sortingAlgorithms/getMergeSortAnimations';
import { getQuickSortAnimations } from './sortingAlgorithms/getQuickSortAnimations';
import { getSelectionSortAnimations } from './sortingAlgorithms/getSelectionSortAnimations';
import { getBubbleSortAnimations } from './sortingAlgorithms/getBubbleSortAnimations';
import { generateArray, bubbleSort, mergeSort, quickSort, selectionSort} from './sortingAlgorithms/sortingAlgorithms';
import SortingVisualizer from './components/SortingVisualizer';

 
test('Animation Algorithm Test', () => {
  const input = [9,8,7,6];
  const output = [[0,1], [0,1], [0,8], [0,0], [0,0], [1,9], [2,3], [2,3], [2,6], [2,2], [2,2],[3,7],[0,2], [0,2],[0,6], [0,3], [0,3], [1,7], [0,0], [0,0], [2,8], [1,1], [1,1], [3,9]];
  
  expect(getMergeSortAnimations(input)).toStrictEqual(output);
});
