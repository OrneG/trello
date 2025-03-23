import React from 'react';
import NavHeader from 'components/NavHeader/NavHeader';
import ColumnContainer from 'components/ColumnContainer/ColumnContainer';
import BoardHeader from 'components/BoardHeader/BoardHeader';
import TagPanelContextProvider from 'components/Contexts/TagPanelContext';
import TagContainer from 'components/TagContainer/TagContainer';
import ModalContextProvider from 'components/Contexts/ModalContext';
import Modal from 'components/Modal/Modal';
import './MainContainer.css';

const MainContainer = () => {
  return (
    <TagPanelContextProvider>
      <ModalContextProvider>
        <div className='main-container'>
          <NavHeader></NavHeader>
          <BoardHeader></BoardHeader>
          <ColumnContainer></ColumnContainer>
          <TagContainer></TagContainer>
          <Modal></Modal>
        </div>
      </ModalContextProvider>
    </TagPanelContextProvider>
  );
};

export default MainContainer;