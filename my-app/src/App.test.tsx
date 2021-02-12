import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getMergeSortAnimations } from './sortingAlgorithms/getMergeSortAnimations';
import { getQuickSortAnimations } from './sortingAlgorithms/getQuickSortAnimations';
import { getSelectionSortAnimations } from './sortingAlgorithms/getSelectionSortAnimations';
import { getBubbleSortAnimations } from './sortingAlgorithms/getBubbleSortAnimations';
import { resetArray, bubbleSort, mergeSort, quickSort, selectionSort} from './sortingAlgorithms/sortingAlgorithms';
import SortingVisualizer from './components/SortingVisualizer';

 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
