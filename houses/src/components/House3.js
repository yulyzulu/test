import React from 'react';
import house3 from '../images/11.png';

const House3 = () => {
    const handleHouse = () => {
        console.log('House3');
    };

    return (
        <div className="col m-0 p-0">
            <img className="h-50 mt-5" src={house3} alt="house3" onClick={handleHouse}/>
        </div>
    )
}

export default House3
