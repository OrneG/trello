import React, { Component } from 'react';
import ModalDescription from 'components/ModalDescription/ModalDescription';
import ModalComents from 'components/ModalComents/ModalComents';
import './ModalContainer.css';

class ModalContainer extends Component {
  render() {
    return (
      <div className='modal-container'>
        <ModalDescription></ModalDescription>
        <ModalComents></ModalComents>
      </div>
    )
  }
}

export default ModalContainer;