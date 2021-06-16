import React from 'react';
import house1 from '../images/1.png';
//import Panel from './Panel';
import Toggle from './Toggle';

const House1 = () => {

    const handleHouse = () => {
        console.log('House1');
        <Toggle house="1" />
    };

    return (
        <div className="col m-0 p-0">
            <img className="h-50 mt-5" src={house1} onClick={handleHouse} alt="house1" />
        </div>
    )
}

export default House1;
