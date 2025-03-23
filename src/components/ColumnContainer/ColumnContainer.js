import React, { useState } from 'react';
import Column from 'components/Column/Column';
// import columns from 'columns';
import AddColumn from 'components/AddColumn/AddColumn';
import { v4 as uuid } from 'uuid';
import './ColumnContainer.css';
import 'components/AddColumn/AddColumn.css'

export default function ColumnContainer() {
    const [columnName, setColumnName] = useState('');
    const [columns, setColumns] = useState([]);

    const addColumnName = evento => {
        setColumnName(evento.target.value);
    }

    const addNewColumn = () => {
        const newColumn = {
            id: uuid(),
            title: columnName,
            cards: []
        };
        setColumns([...columns, newColumn]);
        setColumnName('');
    }

    return (
        <div className='column-container'>
            {columns.map(column => <Column key={column.id} title={column.title} cards={column.cards} />)}
            <AddColumn onChange={addColumnName}
                value={columnName}
                onClick={addNewColumn}
            ></AddColumn>
        </div>
    );
}