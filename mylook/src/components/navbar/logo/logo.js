import React from 'react';
import Tilt from 'react-tilt'

const logo = () => {
    return(
        <div className='ma4 mt4 '>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </div>
    );
}

export default logo;