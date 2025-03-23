import React from 'react';
import ModalDescription from 'components/ModalDescription/ModalDescription';
import ModalComents from 'components/ModalComents/ModalComents';
import './ModalContainer.css';

export default function ModalContainer() {
    return (
        <div className='modal-container'>
            <ModalDescription />
            <ModalComents />
        </div>
    );
}