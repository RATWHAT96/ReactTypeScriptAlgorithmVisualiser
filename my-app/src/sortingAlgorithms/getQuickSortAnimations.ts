var animations: Array<[number,number]> = [];

export function getQuickSortAnimations(array: number[]): any[] {
    animations = [];
    if (array.length <= 1)
      return array;
    quickSortHelper(array, 0);
    return animations;
}



function quickSortHelper(array: number[], startIdx: number): number[]{
    if (array.length <= 1) {
        return array;
    }

    
    var pivot = array[array.length-1];
    var leftArr = [];
    var rightArr = []; 
    
    for (let i = 0; i < array.length-1; i++){
        if (array[i] < pivot){
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }    
    }

    var lAL = leftArr.length;
    
    for(let i = 0; i < lAL; i++){
        animations.push([leftArr[i], (startIdx + i)]);
        animations.push([leftArr[i], (startIdx + i)]);
        animations.push([leftArr[i], (startIdx + i)]);
    }

    if(pivot !== 0){
        animations.push([pivot, lAL + startIdx]);
        animations.push([pivot, lAL + startIdx]);
        animations.push([pivot, lAL + startIdx]);
    }

    for(let i = 0; i < rightArr.length; i++){
        animations.push([rightArr[i], ( startIdx + lAL + 1 + i)]);
        animations.push([rightArr[i], ( startIdx + lAL + 1 + i)]);
        animations.push([rightArr[i], ( startIdx + lAL + 1 + i)]);
    } 

    if(lAL == 0 ){
        return [ pivot, ...quickSortHelper(rightArr,  lAL+startIdx+1)];
    } else {
        return [...quickSortHelper(leftArr,  startIdx), pivot, ...quickSortHelper(rightArr,  lAL+startIdx+1)];
    }
}