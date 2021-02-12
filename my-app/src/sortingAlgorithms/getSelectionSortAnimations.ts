import { addEmitHelper } from "typescript";

export function getSelectionSortAnimations(arr: number[]): any[]{
    let animations = [];

    let sortedArr = arr;

    for(let i = 1; i < arr.length; i++){
        let curr = i;
        
        while(curr>0){
            if(sortedArr[curr]<sortedArr[curr-1]){
                animations.push([curr, curr - 1]);
                animations.push([curr, curr - 1]);
                [sortedArr[curr], sortedArr[curr-1]] = [sortedArr[curr-1], sortedArr[curr]];
                animations.push([sortedArr[curr], sortedArr[curr - 1]]);
            } else{
                animations.push([curr, curr - 1]);
                animations.push([curr, curr - 1]);
                animations.push([sortedArr[curr], sortedArr[curr - 1]]);
                break;
            }
            curr -= 1;
        }
    }


    return animations;

}

