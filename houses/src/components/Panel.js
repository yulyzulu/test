import React from 'react';
import panel from '../images/panel-vacio.png';
import boton from '../images/fondo.png';

const Panel = (props) => {
    console.log(props.house);
    let buttons = 0;

    if (props.house === 1) {
        buttons =
            <div className="text-center">
                <div>
                    <img className="boton1-overlay" src={boton} alt="button" />
                </div>
                <img className="boton2-overlay" src={boton} alt="button" />
            </div>
    }
    if (props.house === 2) {
        buttons =
            <div>
                <img className="boton2-1-overlay" src={boton} alt="button" />
                <img className="boton2-2-overlay" src={boton} alt="button" />
                <img className="boton3-overlay" src={boton} alt="button" />
            </div>
    }
    if (props.house === 3) {
        buttons =
            <div>
                <img className="boton1-overlay" src={boton} alt="button" />
                <img className="boton2-overlay" src={boton} alt="button" />
                <img className="boton3-3-overlay" src={boton} alt="button" />
                <img className="boton4-overlay" src={boton} alt="button" />
            </div>
    }

    return (
        <div className="total-panel">
             <img className="panel" src={panel} alt="panel" />
             {buttons}
        </div>
    )
}

export default Panel;
