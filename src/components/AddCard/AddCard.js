import React, { useState } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddCard.css';

export default function AddCard({ onChange, onClick, value }) {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    return (
        <div className='add-card'>
            <div 
                className='add-card-form'
                style={{
                    display: visible ? 'block' : 'none'
                }}
            >
                <textarea 
                    placeholder='Ingrese un título para esta tarjeta...'
                    onChange={onChange}
                    value={value}
                />
                <div className='add-card-buttons'>
                    <div onClick={onClick}>
                        <Button classType={BUTTON_TYPES.GREEN} text='Add card'></Button>
                    </div>
                    <div onClick={toggle}>
                        <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                    </div>
                </div>
            </div>
            {!visible && (
                <div onClick={toggle}>
                    <Button classType={BUTTON_TYPES.TRANSPARENT} text='Agregar tarjeta' icon={faPlus}></Button>
                </div>
            )}
        </div>
    );
}