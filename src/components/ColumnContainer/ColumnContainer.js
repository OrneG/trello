import React, { useState } from 'react';
import Column from 'components/Column/Column';
// import columns from 'columns';
import AddColumn from 'components/AddColumn/AddColumn';
import './ColumnContainer.css';
import 'components/AddColumn/AddColumn.css'

export default function ColumnContainer() {
    const [columnTitle, setColumnTitle] = useState('');
    const [columns, setColumns] = useState([]);

    const addNewColumn = () => {
        const newColumn = {
            title: columnTitle,
            cards: []
        };
        setColumns([...columns, newColumn]);
        setColumnTitle('');
    }

    return (
        <div className='column-container'>
            {columns.map(column =>
                <Column
                    key={column.title}
                    title={column.title}
                    cards={column.cards} />)}
            <AddColumn onChange={(event) => setColumnTitle(event.target.value)}
                value={columnTitle}
                onClick={addNewColumn}
            ></AddColumn>
        </div>
    );
}