import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <RotatingLines
            strokeColor="green"
            strokeWidth="3"
            animationDuration="0.75"
            width="72"
            visible={true}
        />
        </div>
    );
};

export default Loading;