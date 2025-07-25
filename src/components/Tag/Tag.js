import React from 'react';
import './Tag.css';

export const TAG_TYPES = {
    BIG: 'big-tag',
    CARD: 'card-tag',
    SMALL: 'small-tag'
    
}

export default function Tag({type, text=''}) {
    return (
        <div className={`${type} ${text.toLowerCase()}`}>
            {text}
        </div>
    );
}