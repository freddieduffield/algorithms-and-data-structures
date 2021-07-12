import {swap} from "../utils";

function partition(arr: number[], startIndex = 0, endIndex = arr.length+1): number {
    let pivot = arr[startIndex];
    let swapIndex = startIndex;

    for(let i = startIndex+1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, startIndex, swapIndex);

    return swapIndex;
}

export function quickSort(arr: number[], left=0, right = arr.length-1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }

    return arr;
}