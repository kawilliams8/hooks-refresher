import React, { useState, useEffect } from 'react';

function Multiplier () {
    const [num, setNum] = useState({ myNum: 1 });
    const [num2, setNum2] = useState({ myNum2: 2 });
    const [nums, setNums] = useState([0, 1]);
    //useState returns the current state variable and a function to update it
    //Use it as you would this.setState()
    //Requires one argument, the initial state: 1
    //Can be object, or any data type

    useEffect(() => {
        document.title = `Your Hooks number: ${num.myNum}`;
        // console.log('hooks'); //Executes after componentDidMount in Class
        return () => {
            console.log(`useEffect clean up!`);
        };
    });
    //Set up useEffect like componentDidMount or other lifecycle methods
    //useEffect is called on every render (both the mount and updates)
    //Return a function for any 'clean up' needs (runs on component un-mount)
    //Because the func is functionally scoped, it can access props and state

    const numsList = nums.map((num, index) => {
        let list = index === nums.length - 1 ? num : (num += ', ');
        return list;
    });

    const nextNum = nums[nums.length - 1] + 1;

    return (
        <div>
            <h1>Functional Component with Hooks</h1>
            <h3>Your Number: {num.myNum}</h3>
            <h3>Your Second Number: {num2.myNum2}</h3>
            <button
                onClick={() => {
                    setNum({ myNum: num.myNum * 10 });
                    setNum2({ myNum2: num2.myNum2 * 10 });
                }}
            >
            Multiply by 10
            </button>
            <h3>List of numbers: {numsList}</h3>
            <h3>Next number: {nextNum}</h3>
            <button
                onClick={() => {
                    setNums([...nums, nextNum]);
                }}
            >
            Add to list
            </button>
        </div>
    );
}

export default Multiplier;
