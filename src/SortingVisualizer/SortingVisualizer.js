import React, { useState } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState(resetArray());

    return (
        <div>
            {array.map((value, id) => (
                <div
                    className="array-bar"
                    style={{height: `${value}px`}}>
                </div>
            ))}
        </div>
    );
}

const resetArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(randomIntFromInterval(5, 900));
    }
    return array;
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;