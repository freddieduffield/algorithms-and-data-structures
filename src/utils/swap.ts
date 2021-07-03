// Legacy
export function legacySwap(
    array: number[],
    index1: number,
    index2: number
) : number[] {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

// ES6
export const swap = (
    array: number[],
    index1: number,
    index2: number
) : number[] =>
    ([array[index1], array[index2]] = [array[index2], array[index1]]);