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

export default function Button({classType, text, icon, popover = false}) {

    const ButtonContent = (
        <>
            {icon && (
                <FontAwesomeIcon
                    icon={icon}
                    className='awesome-icon'
                    style={{ display: 'inline-block' }}
                />
            )}
            {text}
        </>
    );

    return (
        popover ? (
            <button className={classType} popovertarget='add-tag'>
                {ButtonContent}
            </button>
        ) : (
            <div className={classType}>
                {ButtonContent}
            </div>
        )
    );
}
