import React, { useState } from 'react';
import * as Algorithm from '../Algorithms/Algorithms';
import './SortingVisualizer.css';

var isRunning = false;
const DELAY = 3;
const DEFAULT_ARRAY_SIZE = 100;

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(DEFAULT_ARRAY_SIZE);
  const [array, setArray] = useState(randomArray([], arraySize));
  const [comparisons, setComparisons] = useState(0);
  const [arrayAccesses, setArrayAccesses] = useState(0);

  const Header = () => {
    return (
      <header className='header'>
        <h1>Sorting Visualizer</h1>
        <div onClick={() => setArray(randomArray(array, arraySize))}>
          <h3>Generate new array</h3>
        </div>
        <div
          onClick={() =>
            playBubbleSort(array, setArray, setComparisons, setArrayAccesses)
          }
        >
          <h3>Bubble Sort</h3>
        </div>
        <div
          onClick={() =>
            playMergeSort(array, setArray, setComparisons, setArrayAccesses)
          }
        >
          <h3>Merge Sort</h3>
        </div>
      </header>
    );
  };

  return (
    <div>
      <Header />
      <div className='array-bar-container'>
        {array.map((value, id) => (
          <div
            className='array-bar'
            key={id}
            style={{ height: `${(value * 80) / 1000}vh` }}
          ></div>
        ))}
      </div>
      <div className='header'>
        <p>Comparisons: {comparisons}</p>
        <p>Array Accesses: {arrayAccesses}</p>
      </div>
    </div>
  );
};

const playBubbleSort = (array, setArray, setComparisons, setArrayAccesses) => {
  if (isRunning) return;

  const animationObject = Algorithm.bubbleSort(array.slice());
  const animations = animationObject.animations;
  const len = animations.length;
  const arrayBars = document.getElementsByClassName('array-bar');
  let ArrayAccesses = 0;
  let j = 0;

  isRunning = true;

  for (let i = 0; i < len; i++, j++) {
    let firstBarStyle = arrayBars[animations[i].comparison[0]].style;
    let secondBarStyle = arrayBars[animations[i].comparison[1]].style;

    setTimeout(() => {
      firstBarStyle.backgroundColor = '#34A853';
      secondBarStyle.backgroundColor = '#34A853';
      setComparisons(i + 1);
      setArrayAccesses((ArrayAccesses += animations[i].arrayAccesses));
    }, j * DELAY);

    if (animations[i].swap) {
      setTimeout(() => {
        firstBarStyle.backgroundColor = '#EA4335';
        secondBarStyle.backgroundColor = '#EA4335';
      }, ++j * DELAY);
      setTimeout(() => {
        let tmp = firstBarStyle.height;
        firstBarStyle.height = secondBarStyle.height;
        secondBarStyle.height = tmp;
      }, ++j * DELAY);
    }

    setTimeout(() => {
      firstBarStyle.backgroundColor = '#FBBC05';
      secondBarStyle.backgroundColor = '#FBBC05';
    }, ++j * DELAY);
  }

  setTimeout(() => {
    isRunning = false;
    setArray(animationObject.sortedArray);
  }, ++j * DELAY);
};

const playMergeSort = (array, setArray, setComparisons, setArrayAccesses) => {
  if (isRunning) return;

  const animationObject = Algorithm.mergeSort(
    [],
    array.slice(),
    0,
    array.length - 1
  );
  const animations = animationObject.animations;
  const len = animations.length;
  const arrayBars = document.getElementsByClassName('array-bar');
  let ArrayAccesses = 0;
  let j = 0;

  isRunning = true;

  for (let i = 0; i < len; i++, j++) {
    let firstBarStyle = arrayBars[animations[i].comparison[0]].style;
    let secondBarStyle = arrayBars[animations[i].comparison[1]].style;
    console.log('tyest');

    setTimeout(() => {
      firstBarStyle.backgroundColor = '#34A853';
      secondBarStyle.backgroundColor = '#34A853';
      setComparisons(i + 1);
      setArrayAccesses((ArrayAccesses += animations[i].arrayAccesses));
    }, j * DELAY);

    if (animations[i].swap) {
      setTimeout(() => {
        firstBarStyle.backgroundColor = '#EA4335';
        secondBarStyle.backgroundColor = '#EA4335';
      }, ++j * DELAY);
      setTimeout(() => {
        let tmp = firstBarStyle.height;
        firstBarStyle.height = secondBarStyle.height;
        secondBarStyle.height = tmp;
      }, ++j * DELAY);
    }

    setTimeout(() => {
      firstBarStyle.backgroundColor = '#FBBC05';
      secondBarStyle.backgroundColor = '#FBBC05';
    }, ++j * DELAY);
  }

  setTimeout(() => {
    isRunning = false;
    setArray(animationObject.sortedArray);
  }, ++j * DELAY);
};

const randomArray = (array, arraySize) => {
  if (isRunning) return array;
  const newArray = [];
  for (let i = 0; i < arraySize; i++)
    newArray.push(randomIntFromInterval(5, 1000));
  return newArray;
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
