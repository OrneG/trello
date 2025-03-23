import React from 'react';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './Card.css';

export default function Card({ tags, title, text }) {
    return (
        <ModalContextConsumer>
            {({ toggleModal }) => (
                <>
                    <div className='card'
                        onClick={toggleModal}>
                        <div className='tags'>
                            {tags.map(tag => <Tag
                                key={tag.id}
                                name={tag.name}
                                type={TAG_TYPES.SMALL}
                                color={tag.color} />)}
                        </div>
                        <p className='card-title'>{title}</p>
                        <p className='card-text'>{text}</p>
                    </div>
                </>
            )}
        </ModalContextConsumer>
    );
}