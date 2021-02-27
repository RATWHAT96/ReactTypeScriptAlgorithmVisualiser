var animations: Array<[number,number, number]> = [];

export function getQuickSortAnimations(array: number[]): any[] {
    animations = [];
    if (array.length <= 1)
      return array;
    quickSortHelper(array, 0);
    return animations;
}

function quickSortHelper(array: number[], startIdx: number): number[]{
    //base case
    if (array.length <= 1) {
        return array;
    }

    console.log("startIdx " + startIdx);
    
    let middleIdx = Math.floor((array.length-1)/2);
    var pivot = array[middleIdx];

    console.log("middleIdx " + middleIdx);

    // higlight pivot in blue
    animations.push([pivot, startIdx+middleIdx, 1]);

    var leftArr = [];
    var rightArr = []; 
    var tempPiv = 0;
    
    // sort array by higher and lower
    for (let i = 0; i < array.length; i++){
        if (i == middleIdx) {
            tempPiv = array[i];
        } 
        else if (array[i] < pivot){
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }   
    }
    console.log("tempPiv " + tempPiv);
    console.log("LLength " + leftArr.length);
    console.log("RLength " + rightArr.length);

    //highlight all the arrays 
    for (let i = startIdx; i < (startIdx + array.length); i++){
        if(i == (startIdx + middleIdx)){

        } else {
            animations.push([array[i], i, 2]);
        }
    }
    
    //rewrite all pivot heights as zero
    for (let i = startIdx; i < (startIdx + array.length); i++){
        if(i == (startIdx+middleIdx)){

        } else {
            animations.push([0, i, 4]);
        }
    }
    
    var lAL = leftArr.length; 
    
    animations.push([0, startIdx + middleIdx, 4]);
    animations.push([tempPiv, startIdx + lAL, 1]);
    animations.push([tempPiv, startIdx + lAL, 4]);

    for(let i = 0; i < lAL; i++) {
        animations.push([leftArr[i], (startIdx + i), 4]);
        animations.push([leftArr[i], (startIdx + i), 3]);
    }

    for(let i = 0; i < rightArr.length; i++){
        animations.push([rightArr[i], ( startIdx + lAL + 1 + i), 4]);
        animations.push([rightArr[i], ( startIdx + lAL + 1 + i), 3]);
    } 

    animations.push([tempPiv, startIdx + lAL, 3]);
    
   

    return [...quickSortHelper(leftArr,  startIdx), tempPiv, ...quickSortHelper(rightArr,  lAL+startIdx+1)];
}