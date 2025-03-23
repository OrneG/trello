import React from 'react';
import Button, {BUTTON_TYPES} from 'components/Button/Button';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './BoardHeaderLeftContainer.css';

export default function BoardHeaderLeftContainer() {
    return (
        <div className='board-left-container'>
            <Button classType={BUTTON_TYPES.TRANSPARENT} icon={faStar}></Button>
            <Button text='Private' classType={BUTTON_TYPES.TRANSPARENT} icon={faLock}></Button>
        </div>
    );
}