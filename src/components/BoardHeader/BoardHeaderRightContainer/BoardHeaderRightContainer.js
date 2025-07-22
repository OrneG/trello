import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { TagPanelContextConsumer } from 'components/Contexts/TagPanelContext';
import './BoardHeaderRightContainer.css';

export default function BoardHeaderRightContainer() {
    return (
        <div className='board-right-container'>
            <TagPanelContextConsumer>
                {({ openTagContainer }) => (
                    <div onClick={openTagContainer}>
                        <Button text='Show tags' classType={BUTTON_TYPES.TRANSPARENT}
                        icon={faEllipsisH} ></Button>
                    </div>
                )}
            </TagPanelContextConsumer>
        </div>
    );
}