/*
 * Desc: Simple bubble sort algorithm
 * Param: the array to sort
 * Return: an object which contains an array of animations to play and the sorted array
 */
export const bubbleSort = array => {
    const len = array.length;
    let animations = []
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                animations.push({comparison: [j, j + 1], swap: true, arrayAccesses: 6});
            }
            else
                animations.push({comparison: [j, j + 1], swap: false, arrayAccesses: 2});
        }
    }

    return {animations: animations, sortedArray: array};
}