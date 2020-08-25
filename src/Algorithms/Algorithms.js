/*
 * Desc: Simple bubble sort algorithm
 * Param: the array to sort
 * Return: an object which contains an array of animations to play and the sorted array
 */
export const bubbleSort = (array) => {
  const len = array.length;
  let animations = [];
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        animations.push({
          comparison: [j, j + 1],
          swap: true,
          arrayAccesses: 6,
        });
      } else
        animations.push({
          comparison: [j, j + 1],
          swap: false,
          arrayAccesses: 2,
        });
    }
  }

  return { animations: animations, sortedArray: array };
};

const merge = (animations, array, left, mid, right) => {
  let i,
    j,
    k = left;
  const n1 = mid - left + 1;
  const n2 = right - mid;
  let L = [],
    R = [];

  for (let i = 0; i < n1; i++) L.push(array[left + i]);
  for (let j = 0; i < n2; j++) R.push(array[mid + 1 + j]);

  i = 0;
  j = 0;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      animations.push({
        comparison: [k, left + i],
        swap: true,
        arrayAccesses: 0,
      });
      i++;
    } else {
      array[k] = R[j];
      animations.push({
        comparison: [k, mid + 1 + j],
        swap: true,
        arrayAccesses: 0,
      });
      j++;
    }
    k++;
  }

  while (i < n1) {
    array[k] = L[i];
    animations.push({
      comparison: [k, left + i],
      swap: true,
      arrayAccesses: 0,
    });
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = R[j];
    animations.push({
      comparison: [k, mid + 1 + j],
      swap: true,
      arrayAccesses: 0,
    });
    j++;
    k++;
  }
};

export const mergeSort = (animations, array, left, right) => {
  if (left < right) {
    let mid = (left + right) / 2;

    mergeSort(animations, array, left, mid);
    mergeSort(animations, array, mid + 1, right);

    merge(animations, array, left, mid, right);
  }

  return { animations: animations, sortedArray: array };
};
