import React, { Component } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddCard.css';

class AddCard extends Component {
    state = {
        visible: false
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const { onChange, onClick, value } = this.props;
        return (
            <div className='add-card'>
                <div className='add-card-form'
                    style={{
                        display: this.state.visible ? 'block' : 'none'
                    }}
                >
                    <textarea placeholder='Ingrese un título para esta tarjeta...'
                        onChange={onChange}
                        value={value}>
                    </textarea>
                    <div className='add-card-buttons'>
                        <div onClick={onClick}>
                            <Button classType={BUTTON_TYPES.GREEN} text='Add card'></Button>
                        </div>
                        <div onClick={this.toggle}>
                            <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                        </div>
                    </div>
                </div>
                {
                    !this.state.visible &&
                    <div onClick={this.toggle}>
                        <Button classType={BUTTON_TYPES.TRANSPARENT} text='Agregar tarjeta' icon={faPlus}></Button>
                    </div>
                }
            </div>
        )
    }
}

export default AddCard;