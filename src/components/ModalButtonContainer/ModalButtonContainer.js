import React from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import modalButtons from 'modalButtons';
import CloseButton from 'components/CloseButton/CloseButton';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './ModalButtonContainer.css';

export default function ModalButtonContainer() {
    return (
        <ModalContextConsumer>
            {({ toggleModal }) => (
                <div className='modal-button-container'>
                    <div onClick={toggleModal}>
                        <CloseButton></CloseButton>
                    </div>
                    <ButtonContainer modalButtons={modalButtons}></ButtonContainer>
                </div>
            )}
        </ModalContextConsumer>
    );
}