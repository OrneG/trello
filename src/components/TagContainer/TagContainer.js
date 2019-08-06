import React from 'react';
import tags from 'tags';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import './TagContainer.scss';

const TagContainer = () => (
    <div className='tag-container'>
        <h2 className='h2'>Labels</h2>
        <input className='input' type='text' placeholder='Search labels...'></input>
        {
            tags.map(tag => <Tag
                type={TAG_TYPES.BIG}
                key={tag.id}
                name={tag.name}
                color={tag.color}/>)
        }
    </div>
)

export default TagContainer;