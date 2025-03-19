import React from 'react';
import Button, {BUTTON_TYPES} from 'components/Button/Button';
import { faPlus, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './NavRightContainer.css';

const NavRightContainer = () => (
    <div className='nav-container'>
        <Button classType={BUTTON_TYPES.SQUARE} icon={faPlus}></Button>
        <Button classType={BUTTON_TYPES.SQUARE} icon={faInfoCircle}></Button>
        <Button classType={BUTTON_TYPES.SQUARE} icon={faBell}></Button>
    </div>
)

export default NavRightContainer;