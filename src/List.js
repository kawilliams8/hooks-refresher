import React, { useEffect, useState } from 'react';

const List = ({ getNums }) => {
    const [nums, setNums] = useState([]);

    useEffect(() => {
        setNums(getNums());
        console.log('Nums updated!');
    }, [getNums]);

    return (
        nums.map(num => <div key={num}>{num}</div>)
    );
};

export default List;
