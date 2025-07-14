import React, { useState } from 'react';
import Column from 'components/Column/Column';
import AddColumn from 'components/AddColumn/AddColumn';
import './ColumnContainer.css';
import 'components/AddColumn/AddColumn.css'
import { ModalContextConsumer } from 'components/Contexts/ModalContext';

export default function ColumnContainer() {
    const [columnTitle, setColumnTitle] = useState('');
    return (
        <ModalContextConsumer>
            {({ columns, setColumns }) => {
                const addNewColumn = () => {
                    const newColumn = {
                        title: columnTitle,
                        cards: []
                    };
                    setColumns([...columns, newColumn]);
                    setColumnTitle('');
                };
                // Add this function to add a card to a specific column
                const addCardToColumn = (columnIndex, card) => {
                    setColumns(columns => columns.map((col, idx) => {
                        if (idx !== columnIndex) return col;
                        return {
                            ...col,
                            cards: [...col.cards, card]
                        };
                    }));
                };
                return (
                    <div className='column-container'>
                        {columns.map((column, columnIndex) =>
                            <Column
                                key={column.title}
                                title={column.title}
                                cards={column.cards}
                                columnIndex={columnIndex}
                                addCardToColumn={addCardToColumn}
                            />)}
                        <AddColumn onChange={(event) => setColumnTitle(event.target.value)}
                            value={columnTitle}
                            onClick={addNewColumn}
                            onKeyDown={(e) => {if (e.key === 'Enter') addNewColumn();}}
                        ></AddColumn>
                    </div>
                );
            }}
        </ModalContextConsumer>
    );
}