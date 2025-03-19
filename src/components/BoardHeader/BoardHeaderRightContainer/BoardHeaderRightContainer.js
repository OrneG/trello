import React, { Component } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { TagPanelContextConsumer } from 'components/Contexts/TagPanelContext';
import './BoardHeaderRightContainer.css';

class BoardHeaderRightContainer extends Component {
    render() {
        return (
            <div className='board-right-container'>
                <TagPanelContextConsumer>
                    {
                        ({openTagContainer}) => (
                            <div onClick={openTagContainer}>
                            <Button text='Show menu' classType={BUTTON_TYPES.TRANSPARENT}
                            icon={faEllipsisH} ></Button>
                            </div>
                        )
                    }
                </TagPanelContextConsumer>
            </div>
        )
    }
}

export default BoardHeaderRightContainer;