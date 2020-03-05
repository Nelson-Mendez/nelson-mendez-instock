import React from 'react';
import kebab from '../../assets/Icons/SVG/Icon-kebab-default.svg'; 

const RemoveItem = (props) => {

    // const displayShowMenu = props.showMenu ?  : null;
        return (
            <div className="container">
                <button onClick={props.handleShowMenu}type="button" class="button">
                    <img src={kebab} className="kebab" />
                </button>
                {props.showMenu &&
                <div className="dropdown">
                    <p className="dropdown__text">Remove</p>
                </div>
}
            </div>
        )
}

export default RemoveItem; 