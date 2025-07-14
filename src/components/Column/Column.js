import React, { useState } from 'react';
import Card from 'components/Card/Card';
import AddCard from 'components/AddCard/AddCard';
import './Column.css';
import 'components/AddCard/AddCard.css';

export default function Column({ title: initialTitle, cards, columnIndex, addCardToColumn }) {
    const [cardName, setCardName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(initialTitle);

    // Update addCard to actually add the card
    const addCard = () => {
        if (cardName.trim() === '') return;
        addCardToColumn(columnIndex, {
            title: cardName,
            text: '',
            tags: []
        });
        setCardName('');
    }

    const handleTitleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    return (
        <div className='column'>
            {isEditing ? (
                <input
                    className='input'
                    value={editedTitle}
                    onChange={(event) => setEditedTitle(event.target.value)}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={handleTitleKeyDown}
                    autoFocus
                />
            ) : (
                <p
                    className='column-title'
                    onDoubleClick={() => setIsEditing(true)}
                    style={{ cursor: 'pointer' }}
                >
                    {editedTitle}
                </p>
            )}
            {cards.map((card, cardIndex) => <Card
                key={card.title}
                title={card.title}
                text={card.text}
                tags={card.tags}
                columnIndex={columnIndex}
                cardIndex={cardIndex}
            />)}
            <AddCard onChange={(event) => setCardName(event.target.value)}
                value={cardName}
                onClick={addCard}
                onKeyDown={(e) => {if (e.key === 'Enter') addCard();}}>
            </AddCard>
        </div>
    );
}