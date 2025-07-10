import React, { useState } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddCard.css';

export default function AddCard({ onChange, value, onClick, onKeyDown }) {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    return (
        <div className='add-card'>
            <div 
                style={{
                    display: visible ? 'block' : 'none'
                }}
            >
                <textarea 
                    placeholder='Ingrese un título para esta tarjeta...'
                    onChange={onChange}
                    value={value}
                    onKeyDown={onKeyDown}
                />
                <div className='add-card-buttons'>
                    <div onClick={onClick}>
                        <Button classType={BUTTON_TYPES.GREEN} text='Add'></Button>
                    </div>
                    <div onClick={toggle}>
                        <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                    </div>
                </div>
            </div>
            {!visible && (
                <div onClick={toggle}>
                    <Button classType={BUTTON_TYPES.TRANSPARENT} text='Add Card' icon={faPlus}></Button>
                </div>
            )}
        </div>
    );
}