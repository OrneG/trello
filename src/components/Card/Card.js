import React from 'react';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './Card.css';

export default function Card({ tags, title, text, columnIndex, cardIndex }) {
    return (
        <ModalContextConsumer>
            {({ toggleModal, setSelectedCard }) => (
                <>
                    <div className='card'
                        onClick={() => {
                            setSelectedCard({ columnIndex, cardIndex });
                            toggleModal();
                        }}>
                        <div className='tags'>
                            {tags.map(tag => <Tag
                                key={tag.id}
                                text={tag}
                                type={TAG_TYPES.CARD}/>)}
                        </div>
                        <p className='card-title'>{title}</p>
                        <p className='card-text'>{text}</p>
                    </div>
                </>
            )}
        </ModalContextConsumer>
    );
}