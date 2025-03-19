import React, { Component } from 'react';
import Column from 'components/Column/Column';
// import columns from 'columns';
import AddColumn from 'components/AddColumn/AddColumn';
import uuid from 'uuid/v4';
import './ColumnContainer.css';
import 'components/AddColumn/AddColumn.css'

class ColumnContainer extends Component {
    state = {
        visible: false,
        columnName: '',
        columns: []
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    addColumnName = evento => {
        this.setState({ columnName: evento.target.value })
    }
    addNewColumn = () => {
        const newColumn = {
            id: uuid(),
            title: this.state.columnName,
            cards: []
        }
        const columns = this.state.columns.slice();
        columns.push(newColumn)
        this.setState({ columnName: '', columns: columns })
    }
    render() {
        return (
            <div className='column-container'>
                {
                    this.state.columns.map(column => <Column key={column.id} title={column.title} cards={column.cards} />)
                }
                <AddColumn onChange={this.addColumnName}
                    value={this.state.columnName}
                    onClick={this.addNewColumn}
                ></AddColumn>
            </div>
        )
    }
}

export default ColumnContainer;