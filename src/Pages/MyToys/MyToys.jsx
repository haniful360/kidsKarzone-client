import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys')
    return (
        <div>
            <h3>my toys</h3>
        </div>
    );
};

export default MyToys;