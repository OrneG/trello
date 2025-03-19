import React, { Component } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddColumn.css';

class AddColumn extends Component {
    state = {
        visible: false,
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const { onChange, onClick, value } = this.props;
        return (
            <>
                <div className='add-column'
                    style={{
                        display: this.state.visible ? 'block' : 'none'
                    }}>
                    <input className='input'
                        type='text'
                        placeholder='Ingrese el título de la lista...'
                        onChange={onChange}
                        value={value}></input>
                    <div className='add-column-buttons'>
                        <div onClick={onClick}>
                            <Button classType={BUTTON_TYPES.GREEN} text='Agregar'></Button>
                        </div>
                        <div onClick={this.toggle}>
                            <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        !this.state.visible &&
                        <div onClick={this.toggle}>
                            <Button classType={BUTTON_TYPES.COLUMN} text='Agregar columna' icon={faPlus}></Button>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default AddColumn;