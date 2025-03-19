import React from 'react';
import NavRightContainer from 'components/NavRightContainer/NavRightContainer';
import NavLeftContainer from 'components/NavLeftContainer/NavLeftContainer';
import './NavHeader.css';

const NavHeader = () => (
    <div className='nav-header'>
        <NavLeftContainer></NavLeftContainer>
        <NavRightContainer></NavRightContainer>
    </div>
)

export default NavHeader;