import React from 'react';

class MultiplierAsClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            myNum: 1,
            myNum2: 2,
            nums: [0, 1],
            nextNum: null
        };
    }

    componentDidMount () {
        document.title = `Your Class number: ${this.state.myNum}`;
        this.setState({ nextNum: this.state.nums[this.state.nums.length - 1] + 1 });
        // console.log('class'); //Executes before useEffect in Hooks
    }
    //Runs once after component is rendered on the DOM
    //Instantiate fetch calls or subscriptions here

    componentDidUpdate () {
        document.title = `Component Updated! ${this.state.myNum} | ${this.state.nums.length }`;
    }
    //Runs each time state is updated, etc

    componentWillUnmount () {
        console.log('componentWillUnmount clean up!');
    }
    //Use for clean up from componentDidMount
    //Invoked right before component unmounts and is destroyed
    //No need to re-setState... it will never re-render

    handleMultiplier () {
        this.setState({ myNum: this.state.myNum * 10 });
        this.setState({ myNum2: this.state.myNum2 * 10 });
    }

    convertNumsList () {
        let numsList = this.state.nums.map((num, index) => {
            return index === this.state.nums.length - 1 ? num : (num += ", ");
        });
        return numsList;
    }

    incrementNumsList () {
        this.setState({ nums: [...this.state.nums, this.state.nextNum] });
        this.setState({ nextNum: this.state.nextNum + 1 });
    }

    render () {
        return (
            <div>
                <h1>Class Component with State</h1>
                <h3>Your Number: {this.state.myNum}</h3>
                <h3>Your Second Number: {this.state.myNum2}</h3>
                <button
                    onClick={() => {
                        this.handleMultiplier();
                    }}
                >
          Multiply by 10
                </button>
                <h3>List of numbers: {this.convertNumsList()}</h3>
                <h3>Next number: {this.state.nextNum}</h3>
                <button
                    onClick={() => {
                        this.incrementNumsList();
                    }}
                >
          Add to list
                </button>
            </div>
        );
    }
}

export default MultiplierAsClass;
