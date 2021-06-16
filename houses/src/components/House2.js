import React from 'react'
import house2 from '../images/4.png';

const House2 = () => {
    const handleHouse = () => {
        console.log('House2');
    };

    return (
        <div className="col m-0 p-0">
            <img className="h-50 mt-5" src={house2} onClick={handleHouse} alt="house2" />
        </div>
    )
}

export default House2
