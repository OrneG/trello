import React from 'react';
import './Tag.css';

export const TAG_TYPES = {
    BIG: 'big-tag',
    CARD: 'card-tag',
    SMALL: 'small-tag'
    
}

export default function Tag({type, text='', onClick, isSelected = false}) {
    return (
        <button 
            className={`${type} ${text.toLowerCase()} ${isSelected ? 'selected' : ''}`}   
            onClick={onClick}>
            {text}
        </button>
    );
}
