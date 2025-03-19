import React from 'react';
import './Tag.css';

export const TAG_TYPES = {
    SMALL: 'tag-small',
    BIG: 'tag-big'
}

const Tag = ({type, color, name}) => (
    <div className={type}
        style={
            { backgroundColor: color }
        }>
        {name}
    </div>
)

export default Tag;