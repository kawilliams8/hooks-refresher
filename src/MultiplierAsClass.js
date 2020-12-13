import React from 'react';

class MultiplierAsClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            myNum: 1,
            myNum2: 2,
            nums: [0, 1]
        };
    }
}

export default MultiplierAsClass;
