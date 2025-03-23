import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './CloseButton.css'

export default function CloseButton ({onClose}) {
    return (
        <FontAwesomeIcon
        icon={faTimes}
        className='close-button'
        onClick={onClose}/>
    )
}
