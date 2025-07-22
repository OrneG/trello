import React from 'react';
import tags from 'tags';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import Button, {BUTTON_TYPES } from 'components/Button/Button';
import { faArrowRight, faArchive, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faEye } from '@fortawesome/free-regular-svg-icons';
import './ButtonContainer.css';

export default function ButtonContainer({ modalButtons }) {
    return (
        <>
            <div className='button-container'>
                <h3 className='h3'>ADD TO CARD</h3>
                {modalButtons.map(button => <Button
                    classType={BUTTON_TYPES.MODAL}
                    key={button.id || button.name}
                    icon={button.icon}
                    text={button.name}
                    popover={button.name === 'Labels'}
                />)}
            </div>
            <div className='button-container'>
                <h3 className='h3'>ACTIONS</h3>
                <Button classType={BUTTON_TYPES.MODAL}
                icon={faArrowRight}
                text='Move'>
                </Button>
                <Button classType={BUTTON_TYPES.MODAL}
                icon={faCopy}
                text='Copy'></Button>
                <Button classType={BUTTON_TYPES.MODAL}
                icon={faEye}
                text='Watch'></Button>
                <Button classType={BUTTON_TYPES.MODAL}
                icon={faArchive}
                text='Archive'></Button>
                <Button classType={BUTTON_TYPES.MODAL}
                icon={faShareAlt}
                text='Share'></Button>
            </div>
            <dialog popover='auto' id='add-tag'>
                {tags.map(tag => <Tag
                                    key={tag.id}
                                    name={tag.name}
                                    type={TAG_TYPES.SMALL}
                                    color={tag.color}
                                    popoverTarget='add-tag'/>)}
            </dialog>
        </>
    );
}