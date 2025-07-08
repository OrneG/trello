import React from 'react';
import ModalButtonContainer from 'components/ModalButtonContainer/ModalButtonContainer';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './Modal.css';

export default function Modal() {
    return (
        <ModalContextConsumer>
            {({ modalVisible, selectedCard }) => (
                modalVisible && (
                    <div className='modal'>
                        <section className='modal-content'>
                            <h2 className='card-title'>{selectedCard ? selectedCard.title : ''}</h2>
                            <ModalContainer/>
                        </section>
                        <ModalButtonContainer/>
                    </div>
                )
            )}
        </ModalContextConsumer>
    );
}