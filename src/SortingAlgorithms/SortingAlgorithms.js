/*
 * Desc: Simple bubble sort algorithm
 * Param: the array to sort
 * Return: an array of animations to play
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
                animations.push({comparison: [j, j + 1], swap: true});
            }
            else
                animations.push({comparison: [j, j + 1], swap: false});
        }
    }

    return animations;
}