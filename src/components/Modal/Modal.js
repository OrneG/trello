import React from 'react';
import ModalButtonContainer from 'components/ModalButtonContainer/ModalButtonContainer';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './Modal.css';

export default function Modal() {
    return (
        <ModalContextConsumer>
            {({ modalVisible }) => (
                modalVisible && (
                    <div className='modal'>
                        <ModalContainer></ModalContainer>
                        <ModalButtonContainer></ModalButtonContainer>
                    </div>
                )
            )}
        </ModalContextConsumer>
    );
}