import React, { useState } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddColumn.css';

export default function AddColumn({ onChange, onClick, value }) {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    return (
        <>
            <div className='add-column'
                style={{
                    display: visible ? 'block' : 'none'
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
                    <div onClick={toggle}>
                        <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                    </div>
                </div>
            </div>
            <div>
                {!visible && (
                    <div onClick={toggle}>
                        <Button classType={BUTTON_TYPES.COLUMN} text='Agregar columna' icon={faPlus}></Button>
                    </div>
                )}
            </div>
        </>
    );
}