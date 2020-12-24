import React, { useEffect, useState } from 'react';

const List = ({ getNums }) => {
    const [nums, setNums] = useState([]);

    useEffect(() => {
        setNums(getNums(5));
        console.log('Nums updated!');
    }, [getNums]);

    return (
        nums.map(num => <div key={num}>{num}</div>)
    );
};

export default List;
