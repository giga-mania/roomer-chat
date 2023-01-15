import React from 'react';


import "./IconeManua.styles.scss"
const IconManual = ({toggleManual, isManualOpened}) => {

    return (
        <div className="manual-icon" onClick={() => toggleManual(!isManualOpened)} onBlur={() => toggleManual(false)} tabIndex="1">
            <img src="https://roomer-client-bdz2e.ondigitalocean.app/assets/icons8-manual-64.png" alt="manual icon"/>
        </div>
    );
};

export default IconManual;