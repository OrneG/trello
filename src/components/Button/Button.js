import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

export const BUTTON_TYPES = {
    SQUARE: 'square-button',
    LARGER: 'larger-button',
    GREEN: 'green-button',
    MODAL: 'modal-button',
    TRANSPARENT: 'transparent-button',
    COLUMN: 'column-button'
}

const Button = ({ classType, text, icon }) => (
    <div className={classType}>
        <FontAwesomeIcon
            icon={icon}
            className= 'awesome-icon'
            style={{ display: icon ? 'inline-block' : 'block' }}>
        </FontAwesomeIcon>
        {text}
    </div>
)

export default Button;