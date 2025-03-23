import React from 'react';
import BoardHeaderRightContainer from 'components/BoardHeader/BoardHeaderRightContainer/BoardHeaderRightContainer';
import BoardHeaderLeftContainer from 'components/BoardHeader/BoardHeaderLeftContainer/BoardHeaderLeftContainer';
import './BoardHeader.css';

export default function BoardHeader() {
    return (
        <div className='board-header'>
            <BoardHeaderLeftContainer/>
            <BoardHeaderRightContainer/>
        </div>
    );
}