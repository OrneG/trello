import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavInput.css';

export default function NavInput() {
    return (
        <>
            <input type='text' className='nav-input' />
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </>
    );
}
