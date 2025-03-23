import React from 'react';
import NavInput from 'components/NavInput/NavInput';
import Button, {BUTTON_TYPES} from 'components/Button/Button';
import { faHome, faBorderAll} from '@fortawesome/free-solid-svg-icons';
import './NavLeftContainer.css';

export default function NavLeftContainer() {
    return (
        <div className='nav-container'>
            <Button classType={BUTTON_TYPES.SQUARE} icon={faHome}></Button>
            <Button text='Boards' classType={BUTTON_TYPES.LARGER} icon={faBorderAll}></Button>
            <NavInput></NavInput>
        </div>
    );
}