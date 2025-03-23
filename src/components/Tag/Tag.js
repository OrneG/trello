import React from 'react';
import './Tag.css';

export const TAG_TYPES = {
    SMALL: 'small-tag',
    BIG: 'big-tag'
}

export default function Tag({type, color, name}) {
    return (
        <div className={type}
            style={{ backgroundColor: color }}>
            {name}
        </div>
    );
}