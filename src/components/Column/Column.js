import React, { useState } from 'react';
import Card from 'components/Card/Card';
import { v4 as uuid } from 'uuid';
import AddCard from 'components/AddCard/AddCard';
import './Column.css';
import 'components/AddCard/AddCard.css';

export default function Column({ title }) {
    const [cardName, setCardName] = useState('');
    const [cards, setCards] = useState([]);

    const ingresarNombreTarjeta = evento => {
        setCardName(evento.target.value);
    }

    const agregarTarjeta = () => {
        const nuevaTarjeta = {
            id: uuid(),
            title: cardName,
            tags: []
        };
        setCards([...cards, nuevaTarjeta]);
        setCardName('');
    }

    return (
        <div className='column'>
            <p className='column-p'>{title}</p>
            {cards.map(card => <Card
                key={card.id}
                title={card.title}
                text={card.text}
                tags={card.tags} />)}
            <AddCard onChange={ingresarNombreTarjeta}
                value={cardName}
                onClick={agregarTarjeta}>
            </AddCard>
        </div>
    );
}