import React, { Component } from 'react';
import Card from 'components/Card/Card';
import uuid from 'uuid/v4';
import AddCard from 'components/AddCard/AddCard';
import './Column.css';
import 'components/AddCard/AddCard.css';

class Column extends Component {
    state = {
        visible: false,
        cardName: '',
        cards: []
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    ingresarNombreTarjeta = evento => {
        this.setState({ cardName: evento.target.value })
    }
    agregarTarjeta = () => {
        const nuevaTarjeta = {
            id: uuid(),
            title: this.state.cardName,
            tags: []
        }
        const nuevoArray = this.state.cards.slice();
        nuevoArray.push(nuevaTarjeta)
        this.setState({ cardName: '', cards: nuevoArray })
    }
    render() {
        const { title } = this.props
        return (
            <div className='column'>
                <p className='column-p'>{title}</p>
                {
                    this.state.cards.map(card => <Card
                        key={card.id}
                        title={card.title}
                        text={card.text}
                        tags={card.tags} />)
                }
                <AddCard onChange={this.ingresarNombreTarjeta}
                    value={this.state.cardName}
                    onClick={this.agregarTarjeta}>
                </AddCard>
            </div>
        )
    }
}

export default Column;