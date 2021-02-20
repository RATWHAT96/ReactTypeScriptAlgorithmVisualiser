export function getBubbleSortAnimations(array: number[]): Array<any> {
    const animations = [];
    if (array.length <= 1) return array;
    //const auxiliaryArray = array.slice();
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] >= array[j + 1]) {
          animations.push([j, j + 1]);
          animations.push([j, j + 1]);
          animations.push([array[j + 1], array[j]]);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return animations;
  }